# 🚀 Guide de Déploiement - Solexi.ai

Ce guide vous accompagne pour déployer votre site Solexi.ai en production.

---

## 📋 Options de déploiement

### Option 1 : Netlify (RECOMMANDÉ - Le plus simple) ⚡

**Avantages** : Gratuit, CDN global, HTTPS automatique, déploiement en 2 minutes

#### Étapes :
1. Créez un compte sur [netlify.com](https://netlify.com)
2. Cliquez sur "Add new site" → "Deploy manually"
3. Glissez-déposez le dossier complet du projet
4. Votre site est en ligne ! 🎉
5. Configurez votre domaine solexi.ai dans les paramètres DNS

**Configuration domaine** :
- Type : A Record
- Name : @
- Value : (IP fournie par Netlify)
- Type : CNAME
- Name : www
- Value : votre-site.netlify.app

---

### Option 2 : Vercel (Pour développeurs) 🔧

**Avantages** : Performances excellentes, déploiement Git, analytics gratuits

#### Étapes :
1. Installez Vercel CLI : `npm i -g vercel`
2. Dans le dossier du projet : `vercel`
3. Suivez les instructions
4. Déploiement automatique à chaque push Git

---

### Option 3 : GoDaddy avec cPanel (Classique) 📁

**Avantages** : Vous possédez déjà l'hébergement

#### Étapes :
1. Connectez-vous à votre cPanel GoDaddy
2. Ouvrez "File Manager"
3. Naviguez vers `public_html/`
4. Supprimez les fichiers WordPress existants (BACKUP d'abord !)
5. Uploadez tous les fichiers du projet
6. Vérifiez les permissions (755 pour dossiers, 644 pour fichiers)
7. Visitez solexi.ai - votre site est en ligne !

**Structure finale dans public_html/** :
```
public_html/
├── index.html
├── personne.html
├── musee.html
├── vedette.html
├── css/
├── js/
└── README.md
```

---

### Option 4 : GitHub Pages (Gratuit pour open source) 🐙

#### Étapes :
1. Créez un repository GitHub
2. Uploadez tous les fichiers
3. Allez dans Settings → Pages
4. Source : Deploy from branch (main)
5. Le site sera accessible sur username.github.io/repo-name
6. Configurez un domaine custom dans les paramètres

---

### Option 5 : Cloudflare Pages (Performance maximale) ⚡

**Avantages** : CDN le plus rapide du monde, HTTPS automatique, gratuit

#### Étapes :
1. Compte sur [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connectez votre repository Git OU uploadez directement
3. Build settings : aucun (site statique)
4. Déployez !

---

## 🔒 Checklist avant déploiement

### Contenu
- [ ] Remplacez les placeholders d'images
- [ ] Ajoutez de vraies photos (familles, musées, portraits)
- [ ] Vérifiez tous les textes (typos, grammaire)
- [ ] Testez tous les liens internes

### Technique
- [ ] Testez sur mobile (Chrome, Safari)
- [ ] Testez sur desktop (Chrome, Firefox, Edge, Safari)
- [ ] Vérifiez la vitesse de chargement
- [ ] Validez le HTML : [validator.w3.org](https://validator.w3.org)
- [ ] Validez le CSS : [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)

### SEO
- [ ] Configurez Google Search Console
- [ ] Créez un sitemap.xml
- [ ] Ajoutez robots.txt
- [ ] Configurez Google Analytics
- [ ] Testez Open Graph (partage social)

### Légal
- [ ] Ajoutez page Politique de confidentialité
- [ ] Ajoutez page Mentions légales
- [ ] Ajoutez page CGV (si e-commerce futur)
- [ ] Configurez cookie consent

---

## 📧 Configuration email professionnelle

Pour avoir contact@solexi.ai, support@solexi.ai, etc.

### Option 1 : Google Workspace (Recommandé)
- 6€/mois par utilisateur
- Interface Gmail professionnelle
- 30 Go de stockage

### Option 2 : Microsoft 365
- 5€/mois par utilisateur
- Outlook + Office inclus

### Option 3 : Email GoDaddy
- Inclus avec certains plans d'hébergement
- Interface webmail basique

---

## 🔗 Configuration du domaine solexi.ai

### Si votre domaine est chez GoDaddy :

1. **Connectez-vous à GoDaddy**
2. **Allez dans "Mes produits"**
3. **Cliquez sur "DNS" à côté de solexi.ai**
4. **Ajoutez les enregistrements selon votre hébergeur** :

#### Pour Netlify :
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 1 heure

Type: CNAME
Name: www
Value: votre-site.netlify.app
TTL: 1 heure
```

#### Pour Vercel :
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 1 heure

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 1 heure
```

5. **Attendez la propagation DNS** (1-48 heures, souvent 1-2h)

---

## 📊 Outils recommandés après déploiement

### Analytics
- **Google Analytics 4** - Gratuit, complet
- **Plausible** - Privacy-first, simple (9$/mois)
- **Fathom** - Privacy-friendly (14$/mois)

### SEO
- **Google Search Console** - Gratuit, essentiel
- **Bing Webmaster Tools** - Gratuit
- **Semrush** - Payant, très complet

### Performance
- **Google PageSpeed Insights** - Gratuit
- **GTmetrix** - Gratuit
- **WebPageTest** - Gratuit

### Chat & Support
- **Crisp** - Chat gratuit (plan de base)
- **Intercom** - Chat avancé (74$/mois)
- **Tawk.to** - Entièrement gratuit

### Email Marketing
- **Mailchimp** - Gratuit jusqu'à 500 contacts
- **SendGrid** - Gratuit jusqu'à 100 emails/jour
- **Brevo** - Gratuit jusqu'à 300 emails/jour

---

## 🚨 Support d'urgence

### Le site ne s'affiche pas ?
1. Vérifiez que index.html est bien à la racine
2. Vérifiez les permissions des fichiers (644)
3. Videz le cache de votre navigateur (Ctrl+Shift+R)
4. Testez en navigation privée
5. Vérifiez les erreurs dans la Console (F12)

### Le CSS ne se charge pas ?
1. Vérifiez que le dossier css/ est bien uploadé
2. Vérifiez les chemins dans les balises `<link>`
3. Vérifiez les permissions du dossier (755)

### Le JavaScript ne fonctionne pas ?
1. Ouvrez la Console (F12)
2. Cherchez les erreurs en rouge
3. Vérifiez que js/main.js est bien uploadé
4. Vérifiez le chemin dans la balise `<script>`

---

## 📞 Besoin d'aide ?

Pour des questions spécifiques sur le déploiement :

1. **Documentation Netlify** : [docs.netlify.com](https://docs.netlify.com)
2. **Documentation Vercel** : [vercel.com/docs](https://vercel.com/docs)
3. **Support GoDaddy** : [godaddy.com/help](https://www.godaddy.com/help)

---

## ✅ Checklist finale

Avant d'annoncer le site officiellement :

- [ ] Site accessible sur solexi.ai
- [ ] HTTPS activé (cadenas vert)
- [ ] Toutes les pages fonctionnent
- [ ] Responsive sur mobile vérifié
- [ ] Formulaires de contact connectés
- [ ] Google Analytics configuré
- [ ] Logo et favicon en place
- [ ] Emails professionnels configurés
- [ ] Sauvegarde du site effectuée
- [ ] Performance testée (score > 90)

---

**🎉 Félicitations ! Votre site Solexi.ai est maintenant en ligne !**

N'oubliez pas de :
- Partager sur les réseaux sociaux
- Informer vos contacts
- Référencer le site sur les annuaires
- Créer du contenu blog pour le SEO

---

**Bonne chance avec le lancement de Solexi.ai !** 🚀
