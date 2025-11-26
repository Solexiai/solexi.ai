# 🚀 GUIDE DE DÉPLOIEMENT RAPIDE - SOLEXI.AI
## Version 2.2.1 - Post-Audit

---

## ✅ PRÉ-REQUIS

Avant de déployer, assurez-vous que :
- ✅ Toutes les corrections de l'audit ont été appliquées (voir [CORRECTIONS-APPLIQUEES.md](CORRECTIONS-APPLIQUEES.md))
- ✅ La [checklist de vérification](CHECKLIST-VERIFICATION.md) a été complétée
- ✅ Les tests locaux sont passés avec succès
- ✅ Vous avez un accès FTP/SSH ou un compte sur une plateforme d'hébergement

---

## 📂 STRUCTURE DES FICHIERS À DÉPLOYER

```
Racine du site (/)
│
├── index.html
├── personal.html
├── museums.html
├── celebrities.html
├── how-it-works.html
├── favicon.svg
├── robots.txt
├── sitemap.xml
│
├── css/
│   ├── style.css
│   └── volets.css
│
├── js/
│   └── main.js
│
└── fr/
    ├── index.html
    ├── personne.html
    ├── musee.html
    ├── vedette.html
    └── comment-ca-marche.html
```

---

## 🎯 MÉTHODES DE DÉPLOIEMENT

### Option 1 : Hébergement Statique Moderne (RECOMMANDÉ)

#### A) Netlify (Le plus simple)

1. **Créer un compte** sur [netlify.com](https://netlify.com)
2. **Drag & Drop** : Glisser tout le dossier du projet dans Netlify Drop
3. **Configuration automatique** : Netlify détecte automatiquement un site statique
4. **URL personnalisée** : Configurer votre domaine `solexi.ai`

**Avantages :**
- ✅ Déploiement en 30 secondes
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Redéploiement automatique avec Git
- ✅ Gratuit pour sites statiques

**Configuration domaine :**
```
1. Aller dans "Domain settings"
2. Ajouter "solexi.ai"
3. Configurer les DNS :
   - Type: A Record
   - Host: @
   - Value: 75.2.60.5
   
   - Type: CNAME
   - Host: www
   - Value: <votre-site>.netlify.app
```

---

#### B) Vercel

1. **Créer un compte** sur [vercel.com](https://vercel.com)
2. **Import project** : Connecter votre repository GitHub/GitLab
3. **Deploy** : Cliquer sur "Deploy"
4. **Configuration domaine** : Ajouter `solexi.ai` dans les paramètres

**Avantages :**
- ✅ Déploiement Git automatique
- ✅ Preview deployments
- ✅ Analytics intégré
- ✅ Edge Network global

---

#### C) Cloudflare Pages

1. **Créer un compte** sur [cloudflare.com](https://cloudflare.com)
2. **Pages** → **Create a project**
3. **Connect Git** : Lier votre repository
4. **Deploy** : Configuration automatique

**Avantages :**
- ✅ CDN le plus rapide au monde
- ✅ Protection DDoS
- ✅ Web Analytics gratuit
- ✅ Unlimited bandwidth

---

### Option 2 : Hébergement Traditionnel (FTP)

#### A) Via FTP (FileZilla, Cyberduck, etc.)

**Étape 1 : Connexion FTP**
```
Host: ftp.votrehebergeur.com
Username: votre_username
Password: votre_password
Port: 21 (ou 22 pour SFTP)
```

**Étape 2 : Upload des fichiers**
1. Naviguer vers le dossier `public_html` ou `www`
2. Uploader TOUS les fichiers et dossiers :
   - Fichiers HTML racine
   - Dossier `css/`
   - Dossier `js/`
   - Dossier `fr/`
   - `favicon.svg`
   - `robots.txt`
   - `sitemap.xml`

**Étape 3 : Vérification**
- Ouvrir `https://solexi.ai` dans un navigateur
- Tester toutes les pages
- Vérifier les liens

---

#### B) Via cPanel / Plesk

**cPanel :**
1. Se connecter à cPanel
2. **File Manager** → `public_html`
3. **Upload** → Sélectionner tous les fichiers
4. Extraire si fichier ZIP

**Plesk :**
1. Se connecter à Plesk
2. **Files** → **File Manager**
3. Naviguer vers `httpdocs`
4. Upload des fichiers

---

### Option 3 : WordPress (Si hébergement existant)

#### Intégration comme thème WordPress custom

**Étape 1 : Créer structure de thème**
```
wp-content/themes/solexi-ai/
├── style.css (avec header de thème WP)
├── index.php (template)
├── header.php
├── footer.php
├── css/ (copier depuis projet)
├── js/ (copier depuis projet)
└── fr/ (adapter en templates)
```

**Étape 2 : Convertir HTML en PHP**
```php
<?php get_header(); ?>
<!-- Votre contenu HTML -->
<?php get_footer(); ?>
```

**Note :** Cette méthode nécessite des connaissances WordPress et n'est pas recommandée pour un site 100% statique.

---

## 🔧 CONFIGURATION POST-DÉPLOIEMENT

### 1. Configuration DNS

**Pour utiliser `solexi.ai` :**

```dns
Type: A
Host: @
Value: [IP de votre hébergeur]
TTL: 3600

Type: CNAME
Host: www
Value: solexi.ai
TTL: 3600

Type: A
Host: @
Value: [IPv6 si disponible]
TTL: 3600
```

**Temps de propagation DNS :** 24-48 heures (généralement 1-2 heures)

---

### 2. Configuration HTTPS (SSL)

#### A) Let's Encrypt (Gratuit)

**Netlify/Vercel/Cloudflare :** Automatique ✅

**cPanel :**
1. **SSL/TLS Status**
2. Activer AutoSSL
3. Attendre la génération (5-10 min)

**Certbot (Serveur Linux) :**
```bash
sudo certbot --nginx -d solexi.ai -d www.solexi.ai
```

---

### 3. Redirection WWW → Non-WWW (ou inverse)

**Fichier `.htaccess` (Apache) :**
```apache
# Redirection www vers non-www
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.solexi\.ai [NC]
RewriteRule ^(.*)$ https://solexi.ai/$1 [L,R=301]

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://solexi.ai/$1 [L,R=301]
```

---

### 4. Configuration robots.txt

Vérifier que `robots.txt` est accessible :
```
https://solexi.ai/robots.txt
```

**Contenu actuel :**
```txt
User-agent: *
Allow: /

Sitemap: https://solexi.ai/sitemap.xml
```

---

### 5. Soumission aux moteurs de recherche

#### Google Search Console
1. Aller sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajouter la propriété `solexi.ai`
3. Vérifier la propriété (DNS ou HTML tag)
4. Soumettre le sitemap : `https://solexi.ai/sitemap.xml`

#### Bing Webmaster Tools
1. Aller sur [bing.com/webmasters](https://bing.com/webmasters)
2. Ajouter le site
3. Soumettre le sitemap

---

## ✅ CHECKLIST DÉPLOIEMENT

### Avant le déploiement :
- [ ] Tous les fichiers sont prêts
- [ ] La checklist de vérification est complétée
- [ ] Les tests locaux sont OK
- [ ] Backup de la version précédente (si applicable)

### Pendant le déploiement :
- [ ] Tous les fichiers uploadés
- [ ] Structure de dossiers respectée
- [ ] Permissions correctes (644 pour fichiers, 755 pour dossiers)

### Après le déploiement :
- [ ] Site accessible via URL principale
- [ ] HTTPS activé
- [ ] Pages FR chargent correctement
- [ ] CSS et JS se chargent
- [ ] Sélecteurs de langue fonctionnent
- [ ] Footers complets
- [ ] Aucune erreur 404
- [ ] robots.txt accessible
- [ ] sitemap.xml accessible
- [ ] Soumis à Google Search Console
- [ ] Analytics configuré (si applicable)

---

## 🧪 TESTS POST-DÉPLOIEMENT

### Tests essentiels :
```bash
# 1. Vérifier les codes HTTP
curl -I https://solexi.ai
# Attendu : 200 OK

curl -I https://solexi.ai/fr/
# Attendu : 200 OK

# 2. Tester les redirections
curl -I http://solexi.ai
# Attendu : 301 → https://solexi.ai

# 3. Vérifier les ressources
curl -I https://solexi.ai/css/style.css
# Attendu : 200 OK

curl -I https://solexi.ai/js/main.js
# Attendu : 200 OK
```

### Tests manuels :
1. ✅ Ouvrir `https://solexi.ai` dans un navigateur privé
2. ✅ Tester toutes les pages principales
3. ✅ Tester le changement de langue
4. ✅ Vérifier sur mobile
5. ✅ Tester dans différents navigateurs

---

## 🚨 DÉPANNAGE

### Problème : "Pages françaises ne chargent pas les CSS"
**Solution :** Vérifier que les chemins relatifs sont corrects (`../css/style.css`)

### Problème : "Erreur 404 sur certaines pages"
**Solution :** Vérifier que tous les fichiers sont uploadés et dans les bons dossiers

### Problème : "HTTPS ne fonctionne pas"
**Solution :** Attendre la propagation DNS ou activer le certificat SSL dans le panel

### Problème : "www.solexi.ai ne redirige pas"
**Solution :** Configurer la redirection dans `.htaccess` ou les paramètres du serveur

---

## 📊 MONITORING POST-LANCEMENT

### À surveiller :
1. **Uptime** : Utiliser [UptimeRobot](https://uptimerobot.com) (gratuit)
2. **Performance** : [Google PageSpeed Insights](https://pagespeed.web.dev)
3. **SEO** : Google Search Console
4. **Erreurs** : Logs du serveur
5. **Trafic** : Google Analytics (si configuré)

---

## 🎉 FÉLICITATIONS !

Si toutes les étapes sont complétées, votre site Solexi.ai est maintenant en ligne ! 🚀

**Prochaines étapes suggérées :**
1. ⏳ Configurer Google Analytics
2. ⏳ Activer un système de monitoring
3. ⏳ Mettre en place des backups automatiques
4. ⏳ Commencer à créer du contenu (blog)

---

**Guide créé le : 25 novembre 2024**  
**Version du site : 2.2.1**  
**Statut : ✅ Prêt pour production**

---

*Pour plus d'informations, consultez :*
- [AUDIT-REPORT.md](AUDIT-REPORT.md)
- [CORRECTIONS-APPLIQUEES.md](CORRECTIONS-APPLIQUEES.md)
- [CHECKLIST-VERIFICATION.md](CHECKLIST-VERIFICATION.md)
