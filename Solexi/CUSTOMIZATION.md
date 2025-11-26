# 🎨 Guide de Personnalisation - Solexi.ai

Ce guide vous aide à personnaliser facilement votre site Solexi.ai.

---

## 🎨 Modifier les couleurs

### Fichier : `css/style.css`

Trouvez les variables CSS au début du fichier (lignes 15-30) :

```css
:root {
    /* VOLET PERSONNE - Modifiez ces valeurs */
    --personne-primary: #C0C0C0;     /* Couleur principale argentée */
    --personne-secondary: #F0F0F0;   /* Couleur secondaire */
    --personne-accent: #A8A8A8;      /* Couleur d'accent */
    
    /* VOLET MUSÉE - Modifiez ces valeurs */
    --musee-primary: #1B2838;        /* Bleu nuit */
    --musee-secondary: #2A3F54;      /* Bleu secondaire */
    --musee-accent: #B8986A;         /* Or pâle */
    
    /* VOLET VEDETTE - Modifiez ces valeurs */
    --vedette-primary: #D4AF37;      /* Or */
    --vedette-secondary: #F5F5DC;    /* Beige */
    --vedette-accent: #8B7355;       /* Bronze */
}
```

**Exemples de palettes alternatives** :

#### Pour un look plus moderne (Personne)
```css
--personne-primary: #4A90E2;     /* Bleu moderne */
--personne-secondary: #E8F4FD;
--personne-accent: #2E6DB5;
```

#### Pour un look plus chaleureux (Musée)
```css
--musee-primary: #2C1810;        /* Marron foncé */
--musee-secondary: #4A3426;
--musee-accent: #D4A574;         /* Or chaud */
```

#### Pour un look plus sobre (Vedette)
```css
--vedette-primary: #8B7355;      /* Bronze sobre */
--vedette-secondary: #F8F6F0;
--vedette-accent: #5C4A3A;
```

---

## 🖼️ Ajouter vos images

### 1. Créer un dossier images
```
solexi-ai/
├── images/
│   ├── hero-personne.jpg
│   ├── hero-musee.jpg
│   ├── hero-vedette.jpg
│   ├── recette-1.jpg
│   ├── recette-2.jpg
│   └── recette-3.jpg
```

### 2. Remplacer les placeholders

#### Dans `personne.html` - Recettes (lignes ~180-220)
Remplacez :
```html
<div class="recipe-placeholder">
    <i class="fas fa-utensils"></i>
</div>
```

Par :
```html
<img src="images/recette-1.jpg" alt="Tourtière traditionnelle" 
     style="width: 100%; height: 200px; object-fit: cover;">
```

#### Dans `personne.html` - Programme Humanitaire (ligne ~360)
Remplacez :
```html
<div class="humanitarian-placeholder">
    <i class="fas fa-hands-helping"></i>
</div>
```

Par :
```html
<img src="images/humanitarian.jpg" alt="Programme humanitaire" 
     style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">
```

### 3. Optimiser vos images

**Tailles recommandées** :
- Hero images : 1920x1080px
- Recettes : 800x600px
- Portraits : 800x1000px
- Icons : 400x400px

**Formats recommandés** :
- Photos : `.jpg` (qualité 80-90%)
- Logos/Icons : `.svg` ou `.png`
- Fond transparent : `.png`

**Outils gratuits** :
- [TinyPNG.com](https://tinypng.com) - Compression d'images
- [Squoosh.app](https://squoosh.app) - Outil de Google
- [Remove.bg](https://remove.bg) - Supprimer arrière-plan

---

## ✏️ Modifier les textes

### Titres principaux

#### Page d'accueil (index.html)
```html
<!-- Ligne ~44 -->
<h1 class="hero-title">Préserver l'essentiel.<br>Pour l'éternité.</h1>
```

#### Volet Personne (personne.html)
```html
<!-- Ligne ~36 -->
<h1 class="hero-title">Préserver votre histoire.<br>Pour ceux que vous aimez.</h1>
```

#### Volet Musée (musee.html)
```html
<!-- Ligne ~36 -->
<h1 class="hero-title">L'histoire prend vie.</h1>
```

#### Volet Vedette (vedette.html)
```html
<!-- Ligne ~36 -->
<h1 class="hero-title">Pour ceux qui veulent<br>laisser une trace.</h1>
```

### Programme Humanitaire

#### Modifier le nombre (actuellement 50)
Cherchez "50 personnes" dans tous les fichiers et remplacez par le nombre souhaité.

---

## 💰 Modifier les tarifs

### Volet Personne (personne.html) - Lignes ~480-560

```html
<!-- Formule Essentiel -->
<div class="price-amount">19€</div>  <!-- Modifiez ici -->

<!-- Formule Famille -->
<div class="price-amount">49€</div>  <!-- Modifiez ici -->

<!-- Formule Héritage -->
<div class="price-amount">99€</div>  <!-- Modifiez ici -->
```

### Volet Vedette (vedette.html) - Lignes ~520-600

```html
<!-- Legacy Essentiel -->
<div class="premium-price">À partir de 5 000€</div>  <!-- Modifiez ici -->

<!-- Legacy Premium -->
<div class="premium-price">À partir de 25 000€</div>  <!-- Modifiez ici -->

<!-- Coffre Prestige -->
<div class="premium-price">Sur consultation</div>  <!-- Modifiez ici -->
```

---

## 📞 Modifier les informations de contact

### Footer (présent dans chaque fichier HTML)

Cherchez la section footer (vers la fin de chaque fichier) :

```html
<div class="footer-social">
    <a href="https://linkedin.com/company/solexi" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://twitter.com/solexiai" aria-label="Twitter">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com/solexi.ai" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
    </a>
</div>
```

Remplacez les URLs par vos propres liens de réseaux sociaux.

---

## 🔗 Connecter un vrai formulaire de contact

### Option 1 : Formspree (Le plus simple)

1. Créez un compte sur [formspree.io](https://formspree.io)
2. Créez un nouveau formulaire
3. Copiez votre endpoint (ex: `https://formspree.io/f/abcd1234`)

Dans `js/main.js`, trouvez la fonction `showDemoModal()` (ligne ~110) et modifiez la soumission :

```javascript
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
        const response = await fetch('https://formspree.io/f/VOTRE-ID', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            // Afficher le message de succès
            modal.innerHTML = `
                <div class="demo-modal-content" style="text-align: center; padding: 4rem 3rem;">
                    <h2>Demande envoyée !</h2>
                    <p>Merci ! Nous vous contacterons sous 24 heures.</p>
                </div>
            `;
        }
    } catch (error) {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.');
    }
});
```

### Option 2 : EmailJS (Sans backend)

1. Créez un compte sur [emailjs.com](https://www.emailjs.com)
2. Configurez votre service email
3. Ajoutez ce script dans le `<head>` de vos pages HTML :

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init("VOTRE_PUBLIC_KEY");
</script>
```

### Option 3 : Backend custom

Si vous avez votre propre backend (Node.js, PHP, etc.), modifiez l'URL dans la fonction fetch() pour pointer vers votre API.

---

## 🌐 Ajouter Google Analytics

Dans le `<head>` de chaque page HTML, ajoutez :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VOTRE-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-VOTRE-ID');
</script>
```

Remplacez `G-VOTRE-ID` par votre vrai ID Google Analytics.

---

## 🍪 Ajouter un bandeau de cookies

Ajoutez avant la balise `</body>` de chaque page :

```html
<!-- Cookie Consent -->
<div id="cookie-banner" style="position: fixed; bottom: 0; left: 0; right: 0; background: #1A1A1A; color: white; padding: 1rem 2rem; display: none; z-index: 10000; align-items: center; justify-content: space-between;">
    <p style="margin: 0;">Ce site utilise des cookies pour améliorer votre expérience. 
    <a href="#privacy" style="color: #C0C0C0;">En savoir plus</a></p>
    <button onclick="acceptCookies()" style="padding: 0.5rem 1.5rem; background: white; color: black; border: none; border-radius: 20px; cursor: pointer; font-weight: 600;">J'accepte</button>
</div>

<script>
function acceptCookies() {
    localStorage.setItem('cookies-accepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}

if (!localStorage.getItem('cookies-accepted')) {
    document.getElementById('cookie-banner').style.display = 'flex';
}
</script>
```

---

## 📱 Personnaliser le logo

### Modifier le logo texte

Dans chaque fichier HTML, cherchez :

```html
<a href="index.html" class="logo">
    <span class="logo-icon">⬡</span>
    <span class="logo-text">SOLEXI.AI</span>
</a>
```

**Option 1** : Changer le symbole
```html
<span class="logo-icon">◆</span>  <!-- ou ⬢ ◇ ◈ ⬡ -->
```

**Option 2** : Utiliser une image
```html
<a href="index.html" class="logo">
    <img src="images/logo.png" alt="Solexi.ai" style="height: 40px;">
</a>
```

---

## 🎯 Personnaliser les CTA (Appels à l'action)

### Modifier les boutons principaux

Cherchez dans chaque page :

```html
<a href="#demo" class="nav-btn">Demander une démo</a>
```

Remplacez le texte par :
- "Commencer gratuitement"
- "Essai gratuit 30 jours"
- "Réserver une consultation"
- "Découvrir l'offre"

---

## 💡 Astuces de personnalisation

### 1. Tester avant de publier
- Testez sur mobile ET desktop
- Vérifiez tous les liens
- Testez le formulaire de contact

### 2. Cohérence visuelle
- Utilisez max 3 couleurs principales
- Gardez la même typographie
- Espacements réguliers

### 3. Performance
- Compressez vos images (< 200 Ko chacune)
- Minimisez le CSS si possible
- Utilisez un CDN pour les polices

### 4. Accessibilité
- Gardez un bon contraste texte/fond
- Ajoutez des alt text aux images
- Testez la navigation au clavier

---

## 📚 Ressources utiles

### Design
- [Coolors.co](https://coolors.co) - Générateur de palettes
- [Google Fonts](https://fonts.google.com) - Typographies gratuites
- [FontAwesome](https://fontawesome.com) - Icônes gratuites

### Images
- [Unsplash](https://unsplash.com) - Photos gratuites HD
- [Pexels](https://pexels.com) - Photos et vidéos gratuites
- [Pixabay](https://pixabay.com) - Images libres de droits

### Outils
- [CodePen](https://codepen.io) - Tester du code
- [Can I Use](https://caniuse.com) - Compatibilité navigateurs
- [CSS Gradient](https://cssgradient.io) - Générateur de dégradés

---

## ❓ FAQ Personnalisation

**Q: Puis-je changer la police de caractères ?**
Oui ! Allez sur [Google Fonts](https://fonts.google.com), choisissez une police, et remplacez le lien dans le `<head>`.

**Q: Comment ajouter une nouvelle page ?**
1. Dupliquez index.html
2. Renommez (ex: blog.html)
3. Ajoutez le lien dans la navigation
4. Personnalisez le contenu

**Q: Le site est-il responsive ?**
Oui ! Il s'adapte automatiquement mobile, tablette et desktop.

**Q: Puis-je utiliser WordPress ?**
Oui, mais vous devrez convertir le HTML en thème WordPress. Plus complexe.

**Q: Combien de temps pour personnaliser ?**
- Couleurs : 10 minutes
- Textes : 30 minutes
- Images : 1-2 heures
- Formulaire : 15 minutes

---

**Besoin d'aide ?** Consultez le fichier README.md pour plus d'informations ! 🚀
