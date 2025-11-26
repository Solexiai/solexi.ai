# ⚡ Démarrage Rapide - Solexi.ai

**Votre site est prêt ! Voici comment l'utiliser en 5 minutes.**

---

## 🚀 Étape 1 : Ouvrir le site (30 secondes)

1. Double-cliquez sur `index.html`
2. Le site s'ouvre dans votre navigateur
3. Naviguez entre les pages :
   - **Accueil** : Vue d'ensemble
   - **Pour Vous** : Grand public & Familles
   - **Musées & Histoire** : Institutions culturelles
   - **Vedettes & Institutions** : Personnalités premium

✅ **Ça fonctionne ?** Parfait ! Passez à l'étape suivante.

---

## 🎨 Étape 2 : Personnaliser les couleurs (5 minutes)

1. Ouvrez `css/style.css` avec un éditeur de texte
2. Trouvez les lignes 15-30 (variables CSS)
3. Changez les codes couleurs selon vos préférences

**Exemple** :
```css
/* Avant */
--personne-primary: #C0C0C0;

/* Après - Bleu moderne */
--personne-primary: #4A90E2;
```

4. Sauvegardez et rechargez la page (F5)

---

## ✏️ Étape 3 : Modifier les textes (10 minutes)

1. Ouvrez `index.html` avec un éditeur de texte
2. Cherchez le texte que vous voulez changer
3. Remplacez-le directement
4. Sauvegardez et rechargez (F5)

**Exemple** :
```html
<!-- Avant -->
<h1>Préserver l'essentiel.<br>Pour l'éternité.</h1>

<!-- Après -->
<h1>Votre titre ici.<br>Votre sous-titre.</h1>
```

---

## 🖼️ Étape 4 : Ajouter vos images (15 minutes)

1. Créez un dossier `images/` à la racine
2. Ajoutez vos photos dedans
3. Dans les fichiers HTML, remplacez :

```html
<!-- Avant (placeholder) -->
<div class="recipe-placeholder">
    <i class="fas fa-utensils"></i>
</div>

<!-- Après (votre image) -->
<img src="images/ma-photo.jpg" alt="Description" 
     style="width: 100%; height: 200px; object-fit: cover;">
```

**Conseil** : Compressez vos images sur [TinyPNG.com](https://tinypng.com)

---

## 🌐 Étape 5 : Mettre en ligne (10 minutes)

### Option A : Netlify (Le plus rapide)
1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte gratuit
3. Glissez-déposez tout le dossier du site
4. Votre site est en ligne ! 🎉

### Option B : Votre hébergeur
1. Connectez-vous à votre cPanel/FTP
2. Uploadez tous les fichiers dans `public_html/`
3. Visitez votre domaine

📖 **Plus de détails ?** Voir `DEPLOYMENT.md`

---

## 📝 Checklist avant mise en ligne

- [ ] J'ai testé toutes les pages
- [ ] J'ai changé les textes principaux
- [ ] J'ai ajouté mes vraies images
- [ ] J'ai vérifié sur mobile
- [ ] J'ai testé les boutons "Demander une démo"
- [ ] Le favicon s'affiche correctement
- [ ] Les couleurs me plaisent

---

## 🆘 Problèmes courants

### Le CSS ne s'affiche pas
➡️ Vérifiez que le dossier `css/` est au même niveau que les fichiers HTML

### Les icônes ne s'affichent pas
➡️ Vérifiez votre connexion Internet (Font Awesome charge depuis le CDN)

### Le menu mobile ne fonctionne pas
➡️ Vérifiez que le fichier `js/main.js` est bien uploadé

### Les couleurs ne changent pas
➡️ Videz le cache du navigateur (Ctrl + Shift + R)

---

## 📚 Guides complets disponibles

- **README.md** - Documentation complète du projet
- **CUSTOMIZATION.md** - Guide de personnalisation détaillé
- **DEPLOYMENT.md** - Guide de déploiement complet
- **CHANGELOG.md** - Historique des versions

---

## 🎯 Prochaines étapes recommandées

1. **Ajoutez Google Analytics** (voir CUSTOMIZATION.md)
2. **Configurez les formulaires** avec Formspree
3. **Ajoutez un bandeau cookies** (voir CUSTOMIZATION.md)
4. **Créez vos pages légales** (CGV, Confidentialité)
5. **Optimisez le SEO** (meta tags, descriptions)

---

## 💡 Conseils Pro

### Performance
- Compressez vos images (< 200 Ko)
- Testez la vitesse sur [PageSpeed Insights](https://pagespeed.web.dev)

### Design
- Gardez une cohérence visuelle
- 3 couleurs maximum
- Espacements réguliers

### Contenu
- Écrivez pour vos visiteurs, pas pour vous
- Utilisez des appels à l'action clairs
- Ajoutez des preuves sociales (témoignages)

### Marketing
- Partagez sur les réseaux sociaux
- Créez du contenu blog pour le SEO
- Collectez les emails dès le début

---

## ✨ Votre site en chiffres

- **4 pages** HTML complètes
- **50+ sections** uniques
- **3 volets** distincts
- **100%** responsive
- **0** dépendances externes (hors CDN)
- **⚡** Prêt en 5 minutes

---

## 📞 Besoin d'aide ?

1. **Questions techniques ?** → Consultez README.md
2. **Personnalisation ?** → Consultez CUSTOMIZATION.md
3. **Déploiement ?** → Consultez DEPLOYMENT.md

---

**🎉 Félicitations ! Votre site Solexi.ai est prêt à conquérir le web !**

**Astuce finale** : Marquez ce fichier en favori pour y revenir rapidement ! 🔖

---

*Créé avec ❤️ pour simplifier votre lancement*
