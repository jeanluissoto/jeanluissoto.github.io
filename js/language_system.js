// Système de sélection de langue avec popup initial - Version finale
class LanguageSystem {
    constructor() {
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'fr';
        this.translations = {
            fr: {
                // Navigation
                home: "Accueil",
                about: "À propos",
                education: "Éducation",
                experience: "Expérience",
                portfolio: "Portfolio",
                contact: "Contact",
                
                // Hero section
                heroIntro: "Je suis",
                heroTitle: "Data Scientist",
                contactMe: "Contactez-moi",
                
                // Section headers
                learnAboutMe: "Apprenez à me connaître",
                aboutMe: "À propos de moi",
                myJourneyInKnowledge: "Mon parcours de connaissance",
                myCareerJourney: "Mon parcours professionnel",
                workExperience: "Expérience professionnelle (4+ ans)",
                myWork: "Mon travail",
                getInTouch: "Entrons en contact",
                
                // About section
                aboutDescription: "En tant que professionnel spécialisé dans l'extraction d'insights à partir de données, j'excelle dans l'identification de tendances, la création de rapports et le soutien aux processus de prise de décision. Mon expertise réside dans l'interprétation de jeux de données complexes, la conception de modèles de données efficaces et la fourniture de recommandations exploitables pour améliorer les performances commerciales. Avec une solide base en analyse statistique et un œil attentif aux détails, j'aide les organisations à comprendre leurs données et à conduire des initiatives stratégiques.",
                
                // Education section
                masterDegree: "MSc Science des Données et Intelligence Artificielle",
                bachelorDegree: "BSc Ingénierie Commerciale",
                masterDegree2: "Programme d'été en Science des Données",
                bachelorDegree2: "Programme Exécutif en Advanced Analytics & AI",

                // Experience section
                currentRole: "Consultant Data x IA Transformation, UX",
                currentTask1: "Création d'un chatbot interne connecté à BigQuery pour l'analyse des métriques du Service Client (NPS, CSAT).",
                currentTask2: "Développement d'un agent GenAI intégré à Okta et Kibana, optimisant l'analyse des interactions intranet client.",
                currentTask3: "Conception d'un pipeline NLP (GenAI + BERTopic) pour la classification des tickets, améliorant la précision de 70% à 90%.",
                
                internRole1: "Stagiaire en Science des Données",
                intern1Task1: "Développement d'un pipeline de classification avec GenAI, réduisant le temps de traitement de 40% et atteignant 90% de précision.",
                intern1Task2: "Intégration de modèles GenAI dans le pipeline CI/CD de l'équipe de données CX (GitHub, Jenkins) pour automatiser les déploiements.",
                
                biRole: "Spécialiste Business Intelligence, Opérations",
                biTask1: "Développement de pipelines de données Snowflake et de tableaux de bord Power BI pour les leaders régionaux, améliorant la visibilité stratégique.",
                biTask2: "Direction de l'implémentation de solutions BI en temps réel utilisant Redash, consolidant tous les rapports régionaux.",
                biTask3: "Création de +15 tableaux de bord Looker Studio pour les fournisseurs externes afin de suivre les stocks et les ventes hebdomadaires.",
                
                consultantRole: "Consultant Senior",
                consultantTask1: "Optimisation d'un outil d'évaluation des risques SAS : automatisation ETL multi-sources et amélioration de 80% de la précision.",
                consultantTask2: "Optimisation des processus de service après-vente bancaire, identification des opportunités d'amélioration et augmentation de la satisfaction de 10%.",
                consultantTask3: "Direction de l'automatisation des tests de stress bancaires en développant des pipelines ETL et VBA, réduisant le temps de traitement de 80%.",
                
                // Portfolio section
                artificialIntelligence: "Intelligence Artificielle",
                machineLearning: "Apprentissage Automatique",
                dataVisualization: "Visualisation de Données",
                databaseManipulation: "Manipulation de Base de Données",
                travelling: "Voyages",
                
                // Contact section
                contactDescription: "Discutons de la façon dont nous pouvons travailler ensemble pour transformer vos données en insights exploitables.",
                
                // Language selection popup
                selectLanguage: "Sélectionnez votre langue",
                selectLanguageDescription: "Choisissez votre langue préférée pour naviguer sur le site",
                french: "Français",
                english: "English",
                spanish: "Español",
                confirm: "Confirmer"
            },
            en: {
                // Navigation
                home: "Home",
                about: "About",
                education: "Education",
                experience: "Experience",
                portfolio: "Portfolio",
                contact: "Contact",
                
                // Hero section
                heroIntro: "I'm",
                heroTitle: "Data Scientist",
                contactMe: "Contact Me",
                
                // Section headers
                learnAboutMe: "Learn About Me",
                aboutMe: "About Me",
                myJourneyInKnowledge: "My Journey in Knowledge",
                myCareerJourney: "My Career Journey",
                workExperience: "Work Experience (4+ Years)",
                myWork: "My Work",
                getInTouch: "Get In Touch",
                
                // About section
                aboutDescription: "As a professional specializing in extracting insights from data, I excel in identifying trends, creating reports, and supporting decision-making processes. My expertise lies in interpreting complex datasets, designing efficient data models, and providing actionable recommendations to enhance business performance. With a strong foundation in statistical analysis and a keen eye for detail, I help organizations understand their data and drive strategic initiatives.",
                
                // Education section
                masterDegree: "MSc Data Science & Artificial Intelligence",
                masterDegree2: "Data Science Summer Program",
                bachelorDegree: "BSc Business Engineering",
                bachelorDegree2: "Executive Program in Advanced Analytics & AI",
                // Experience section
                currentRole: "Consultant Data x IA Transformation, UX",
                currentTask1: "Created an internal chatbot connected to BigQuery for analyzing Customer Service metrics such as NPS, CSAT and others.",
                currentTask2: "Developed a GenAI agent integrated with Okta and Kibana, optimizing the analysis of client intranet interactions.",
                currentTask3: "Designed an NLP pipeline (GenAI + BERTopic) for ticket classification, improving accuracy from 70% to 90%.",
                
                internRole1: "Data Science Intern",
                intern1Task1: "Developed a classification pipeline with GenAI, reducing processing time by 40% and achieving 90% accuracy.",
                intern1Task2: "Integrated GenAI models into the CX data team's CI/CD pipeline (GitHub, Jenkins) to automate deployments.",
                
                biRole: "Business Intelligence Specialist, Operations",
                biTask1: "Developed Snowflake data pipelines and Power BI dashboards for regional leaders, improving strategic visibility.",
                biTask2: "Led the implementation of real-time BI solutions using Redash, consolidating all regional reports.",
                biTask3: "Created +15 Looker Studio dashboards for external vendors to track weekly Stock and Sales.",
                
                consultantRole: "Senior Consultant",
                consultantTask1: "Optimized a SAS risk assessment tool: multi-source ETL automation and 80% accuracy improvement.",
                consultantTask2: "Optimized banking after-sales service processes, identifying improvement opportunities and increasing satisfaction by 10%.",
                consultantTask3: "Led the automation of bank stress testing by developing ETL and VBA pipelines, reducing processing time by 80%.",
                
                // Portfolio section
                artificialIntelligence: "Artificial Intelligence",
                machineLearning: "Machine Learning",
                dataVisualization: "Data Visualization",
                databaseManipulation: "Database Manipulation",
                travelling: "Travelling",
                
                // Contact section
                contactDescription: "Let's discuss how we can work together to turn your data into actionable insights.",
                
                // Language selection popup
                selectLanguage: "Select your language",
                selectLanguageDescription: "Choose your preferred language to browse the site",
                french: "Français",
                english: "English",
                spanish: "Español",
                confirm: "Confirm"
            },
            es: {
                // Navigation
                home: "Inicio",
                about: "Acerca de",
                education: "Educación",
                experience: "Experiencia",
                portfolio: "Portafolio",
                contact: "Contacto",
                
                // Hero section
                heroIntro: "Soy",
                heroTitle: "Científico de Datos",
                contactMe: "Contáctame",
                
                // Section headers
                learnAboutMe: "Conóceme",
                aboutMe: "Acerca de Mí",
                myJourneyInKnowledge: "Mi Viaje en el Conocimiento",
                myCareerJourney: "Mi Trayectoria Profesional",
                workExperience: "Experiencia Laboral (4+ Años)",
                myWork: "Mi Trabajo",
                getInTouch: "Ponte en Contacto",
                
                // About section
                aboutDescription: "Como profesional especializado en extraer insights de datos, sobresalgo en identificar tendencias, crear reportes y apoyar procesos de toma de decisiones. Mi experiencia radica en interpretar conjuntos de datos complejos, diseñar modelos de datos eficientes y proporcionar recomendaciones accionables para mejorar el rendimiento empresarial. Con una sólida base en análisis estadístico y un ojo atento al detalle, ayudo a las organizaciones a entender sus datos y impulsar iniciativas estratégicas.",
                
                // Education section
                masterDegree: "MSc Ciencia de Datos e Inteligencia Artificial",
                bachelorDegree: "BSc Ingeniería Comercial",
                masterDegree2: "Programa de Verano en Ciencia de Datos",
                bachelorDegree2: "Programa Especializado en Advanced Analytics & AI ",

                
                // Experience section
                currentRole: "Consultor Data x IA Transformation, UX",
                currentTask1: "Creé un chatbot interno conectado a BigQuery para analizar métricas del Servicio al Cliente como NPS, CSAT y otros.",
                currentTask2: "Desarrollé un agente GenAI integrado con Okta y Kibana, optimizando el análisis de interacciones de intranet del cliente.",
                currentTask3: "Diseñé un pipeline NLP (GenAI + BERTopic) para clasificación de tickets, mejorando la precisión del 70% al 90%.",
                
                internRole1: "Interno de Ciencia de Datos",
                intern1Task1: "Desarrollé un pipeline de clasificación con GenAI, reduciendo el tiempo de procesamiento en 40% y logrando 90% de precisión.",
                intern1Task2: "Integré modelos GenAI en el pipeline CI/CD del equipo de datos CX (GitHub, Jenkins) para automatizar despliegues.",
                
                biRole: "Especialista en Business Intelligence, Operaciones",
                biTask1: "Desarrollé pipelines de datos Snowflake y dashboards Power BI para líderes regionales, mejorando la visibilidad estratégica.",
                biTask2: "Lideré la implementación de soluciones BI en tiempo real usando Redash, consolidando todos los reportes regionales.",
                biTask3: "Creé +15 dashboards Looker Studio para proveedores externos para rastrear Stock y Ventas semanales.",
                
                consultantRole: "Consultor Senior",
                consultantTask1: "Optimicé una herramienta de evaluación de riesgos SAS: automatización ETL multi-fuente y mejora del 80% en precisión.",
                consultantTask2: "Optimicé procesos de servicio post-venta bancario, identificando oportunidades de mejora e incrementando satisfacción en 10%.",
                consultantTask3: "Lideré la automatización de pruebas de estrés bancario desarrollando pipelines ETL y VBA, reduciendo tiempo de procesamiento en 80%.",
                
                // Portfolio section
                artificialIntelligence: "Inteligencia Artificial",
                machineLearning: "Aprendizaje Automático",
                dataVisualization: "Visualización de Datos",
                databaseManipulation: "Manipulación de Base de Datos",
                travelling: "Viajes",
                
                // Contact section
                contactDescription: "Hablemos sobre cómo podemos trabajar juntos para convertir tus datos en insights accionables.",
                
                // Language selection popup
                selectLanguage: "Selecciona tu idioma",
                selectLanguageDescription: "Elige tu idioma preferido para navegar por el sitio",
                french: "Français",
                english: "English",
                spanish: "Español",
                confirm: "Confirmar"
            }
        };
        
        this.init();
    }
    
    init() {
        // Vérifier si c'est la première visite
        if (!localStorage.getItem('languageSelected')) {
            this.showLanguagePopup();
        } else {
            this.applyLanguage(this.currentLanguage);
            this.updateLanguageSelector();
        }
    }
    
    showLanguagePopup() {
        // Créer le popup de sélection de langue
        const popup = document.createElement('div');
        popup.id = 'language-popup';
        popup.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            font-family: 'Montserrat', sans-serif;
        `;
        
        const popupContent = document.createElement('div');
        popupContent.style.cssText = `
            background: linear-gradient(135deg, #2E86C1, #27AE60);
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            max-width: 400px;
            width: 90%;
        `;
        
        popupContent.innerHTML = `
            <h2 style="color: white; margin-bottom: 10px; font-size: 24px;">🌍 Select Language / Sélectionner la langue / Seleccionar idioma</h2>
            <p style="color: #A9CCE3; margin-bottom: 30px; font-size: 16px;">Choose your preferred language to browse the site</p>
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <button class="lang-btn" data-lang="fr" style="
                    background: white;
                    color: #2E86C1;
                    border: none;
                    padding: 15px 20px;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                ">🇫🇷 Français</button>
                <button class="lang-btn" data-lang="en" style="
                    background: white;
                    color: #2E86C1;
                    border: none;
                    padding: 15px 20px;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                ">🇺🇸 English</button>
                <button class="lang-btn" data-lang="es" style="
                    background: white;
                    color: #2E86C1;
                    border: none;
                    padding: 15px 20px;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                ">🇪🇸 Español</button>
            </div>
        `;
        
        popup.appendChild(popupContent);
        document.body.appendChild(popup);
        
        // Ajouter les événements de survol
        const langButtons = popupContent.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.background = '#27AE60';
                btn.style.color = 'white';
                btn.style.transform = 'translateY(-2px)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.background = 'white';
                btn.style.color = '#2E86C1';
                btn.style.transform = 'translateY(0)';
            });
            
            btn.addEventListener('click', (e) => {
                const selectedLang = e.target.getAttribute('data-lang');
                this.selectLanguage(selectedLang);
                document.body.removeChild(popup);
            });
        });
    }
    
    selectLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
        localStorage.setItem('languageSelected', 'true');
        this.applyLanguage(lang);
        this.updateLanguageSelector();
    }
    
    updateLanguageSelector() {
        const selector = document.querySelector('.language-selector select');
        if (selector) {
            selector.value = this.currentLanguage;
        }
    }
    
    applyLanguage(lang) {
        const translations = this.translations[lang];
        
        // Appliquer les traductions à tous les éléments avec data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
        
        // Mettre à jour le contenu dynamique du portfolio si nécessaire
        this.updatePortfolioContent(lang);
    }
    
    updatePortfolioContent(lang) {
        // Cette fonction sera appelée quand le contenu du portfolio est chargé
        // pour s'assurer que les traductions sont appliquées
    }
    
    // Méthode pour changer de langue manuellement
    changeLanguage(lang) {
        this.selectLanguage(lang);
    }
    
    // Méthode pour obtenir la traduction d'une clé
    translate(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
}

// Initialiser le système de langue quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    window.languageSystem = new LanguageSystem();
});

// Fonction globale pour changer de langue (peut être appelée depuis n'importe où)
function changeLanguage(lang) {
    if (window.languageSystem) {
        window.languageSystem.changeLanguage(lang);
    }
}

