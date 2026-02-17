#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
GÉNÉRATEUR DE PAGES PROJET
===========================
Ce script génère automatiquement les pages HTML de détail
pour chaque projet défini dans data-projets-details.js

USAGE:
    python generer-pages-projets.py

Le script va :
1. Lire data-projets-details.js
2. Lire projet-template.html
3. Générer une page HTML pour chaque projet
4. Créer un dossier projects/ avec toutes les pages
"""

import json
import re
import os

def read_js_data(filename):
    """Lit le fichier JS et extrait les données"""
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extraire l'objet projectsDetails
    match = re.search(r'const projectsDetails = ({.*?});', content, re.DOTALL)
    if not match:
        print("❌ Impossible de trouver projectsDetails dans le fichier")
        return None
    
    js_object = match.group(1)
    
    # Convertir le JS en JSON valide (approximatif)
    # Remplacer les simple quotes par des double quotes
    js_object = js_object.replace("'", '"')
    # Enlever les trailing commas
    js_object = re.sub(r',(\s*[}\]])', r'\1', js_object)
    
    try:
        data = json.loads(js_object)
        return data
    except json.JSONDecodeError as e:
        print(f"❌ Erreur de parsing JSON: {e}")
        return None

def read_template(filename):
    """Lit le template HTML"""
    with open(filename, 'r', encoding='utf-8') as f:
        return f.read()

def generate_gallery_html(gallery):
    """Génère le HTML de la galerie"""
    if not gallery:
        return '<p style="text-align:center;color:rgba(232,232,240,0.6);">Aucune image disponible</p>'
    
    html = '<div class="gallery-grid">'
    for item in gallery:
        image = item.get('image', '')
        caption = item.get('caption', '')
        
        html += f'''
        <div class="gallery-item">
            <div class="gallery-placeholder">
                <span>📸 {caption}</span>
            </div>
            <div class="gallery-caption">{caption}</div>
        </div>
        '''
    html += '</div>'
    return html

def generate_results_html(results):
    """Génère le HTML des résultats"""
    if not results:
        return ''
    
    html = ''
    for result in results:
        html += f'''
        <div class="result-card">
            <p>{result}</p>
        </div>
        '''
    return html

def generate_links_section(links):
    """Génère la section des liens"""
    if not links or all(v is None for v in links.values()):
        return ''
    
    html = '''
    <section class="project-section project-links">
        <div class="container-narrow">
            <h3>Voir le projet</h3>
            <div class="links-container">
    '''
    
    link_labels = {
        'github': ('GitHub', '💻'),
        'demo': ('Démo Live', '🚀'),
        'behance': ('Behance', '🎨'),
        'other': ('Site Web', '🔗')
    }
    
    for key, (label, icon) in link_labels.items():
        if links.get(key):
            html += f'<a href="{links[key]}" class="project-link" target="_blank">{icon} {label}</a>'
    
    html += '''
            </div>
        </div>
    </section>
    '''
    return html

def generate_next_project(next_project_id, all_projects):
    """Génère la section projet suivant"""
    if not next_project_id or next_project_id not in all_projects:
        return ''
    
    next_proj = all_projects[next_project_id]
    gradient = next_proj.get('heroGradient', 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)')
    
    html = f'''
    <section class="next-project" style="background: {gradient};">
        <div class="next-project-content">
            <div class="next-label">Projet suivant</div>
            <h2 class="next-project-title">{next_proj.get('title', '')}</h2>
            <a href="{next_project_id}.html" class="next-project-link">Découvrir →</a>
        </div>
    </section>
    '''
    return html

def generate_page(project_id, project_data, template, all_projects):
    """Génère une page HTML pour un projet"""
    html = template
    
    # Remplacer les placeholders basiques
    replacements = {
        '{{TITLE}}': project_data.get('title', ''),
        '{{SUBTITLE}}': project_data.get('subtitle', ''),
        '{{CATEGORY}}': project_data.get('category', ''),
        '{{YEAR}}': project_data.get('year', ''),
        '{{CLIENT}}': project_data.get('client', ''),
        '{{DESCRIPTION}}': project_data.get('description', ''),
        '{{CHALLENGE}}': project_data.get('challenge', ''),
        '{{SOLUTION}}': project_data.get('solution', ''),
        '{{HERO_GRADIENT}}': project_data.get('heroGradient', ''),
        '{{HERO_IMAGE}}': project_data.get('heroImage', 'null'),
    }
    
    for placeholder, value in replacements.items():
        html = html.replace(placeholder, str(value))
    
    # Technologies
    tech_list = ''.join([f'<li>{tech}</li>' for tech in project_data.get('technologies', [])])
    html = html.replace('{{TECHNOLOGIES}}', tech_list)
    
    # Role
    role_list = ''.join([f'<li>{role}</li>' for role in project_data.get('role', [])])
    html = html.replace('{{ROLE}}', role_list)
    
    # Gallery
    gallery_html = generate_gallery_html(project_data.get('gallery', []))
    html = html.replace('{{GALLERY}}', gallery_html)
    
    # Results
    results_html = generate_results_html(project_data.get('results', []))
    html = html.replace('{{RESULTS}}', results_html)
    
    # Links section
    links_html = generate_links_section(project_data.get('links', {}))
    html = html.replace('{{LINKS_SECTION}}', links_html)
    
    # Next project
    next_html = generate_next_project(project_data.get('nextProject'), all_projects)
    html = html.replace('{{NEXT_PROJECT}}', next_html)
    
    return html

def main():
    print("🚀 GÉNÉRATEUR DE PAGES PROJET\n")
    
    # Vérifier les fichiers
    if not os.path.exists('data-projets-details.js'):
        print("❌ Fichier data-projets-details.js introuvable!")
        return
    
    if not os.path.exists('projet-template.html'):
        print("❌ Fichier projet-template.html introuvable!")
        return
    
    # Lire les données
    print("📖 Lecture des données...")
    projects = read_js_data('data-projets-details.js')
    
    if not projects:
        print("❌ Impossible de lire les données des projets")
        return
    
    # Lire le template
    print("📄 Lecture du template...")
    template = read_template('projet-template.html')
    
    # Créer le dossier projects/
    os.makedirs('projects', exist_ok=True)
    print("📁 Dossier projects/ créé")
    
    # Générer les pages
    print(f"\n✨ Génération de {len(projects)} pages...\n")
    
    for project_id, project_data in projects.items():
        if project_id == 'template-projet':
            continue  # Ignorer le template
        
        print(f"   → Génération de {project_id}.html...")
        html = generate_page(project_id, project_data, template, projects)
        
        # Sauvegarder
        output_path = f'projects/{project_id}.html'
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(html)
        
        print(f"      ✓ {output_path}")
    
    print(f"\n🎉 Terminé! {len(projects)-1} pages générées dans projects/")
    print("\n💡 Pour les voir:")
    print("   1. Ouvre index.html dans ton navigateur")
    print("   2. Ou ouvre directement projects/sonova.html")

if __name__ == '__main__':
    main()
