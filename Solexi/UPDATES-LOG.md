# 📝 Journal des mises à jour - Solexi.ai

## [Update 1] - 24 novembre 2024

### ✅ Modifications effectuées

#### 1. Page d'accueil (index.html)
- **✅ DÉJÀ FAIT** : Le texte "100%" était déjà présent (ligne 53)
  - Affichage : "100%" au lieu de "100"
  - Label : "Sécurité & confidentialité"

#### 2. Position du scroll indicator
- **✅ MODIFIÉ** : Déplacé le bloc "Découvrez nos solutions" 
  - **Avant** : À l'intérieur de la section hero (position absolute)
  - **Après** : Entre la section hero et la section "Trois Volets"
  - **Effet** : Le scroll indicator est maintenant ~5 lignes plus bas

#### 3. CSS (css/style.css)
- **✅ MODIFIÉ** : Ajusté les styles du `.scroll-indicator`
  - Supprimé `position: absolute`
  - Supprimé `bottom: 3rem`
  - Supprimé `left: 50%`
  - Modifié l'animation de `bounce` à `bounce-vertical`
  - Animation simplifiée pour translateY uniquement

### 📄 Fichiers modifiés
1. `index.html` (lignes 58-64)
2. `css/style.css` (lignes 252-264)

### 🎨 Résultat visuel
- Le scroll indicator "Découvrez nos solutions" apparaît maintenant :
  - ✅ Plus bas sur la page
  - ✅ Entre le hero et les trois volets
  - ✅ Avec une animation verticale fluide
  - ✅ Centré et visible

### ✅ Statut : Modifications complétées avec succès

---

**Note** : Le texte "100%" était déjà correct dans le code, aucune modification n'était nécessaire pour cette partie.

---

## [Update 2] - 24 novembre 2024

### ✅ Modifications effectuées - Section Recettes (personne.html)

#### 1. Changement de nom
- **✅ MODIFIÉ** : "Grand-mère Marie" → "Grand-Maman Lise"
  - Ligne 191 : Titre de la première recette
  - Ligne 203 : Titre de la deuxième recette

#### 2. Nouvelle recette ajoutée
- **✅ MODIFIÉ** : Deuxième carte recette transformée
  - **Avant** : "Gâteau d'anniversaire / Recette familiale depuis 1950"
  - **Après** : "Recette de Grand-Maman Lise / Sa fameuse tarte aux pommes"
  - **Icône** : Changée de gâteau (birthday-cake) à pomme (apple-alt)
  - **Tag** : Changé de "Célébrations" à "Automne"

#### 3. Réorganisation des recettes
- **Carte 1** : Recette de Grand-Maman Lise - Tourtière traditionnelle (Noël)
- **Carte 2** : Recette de Grand-Maman Lise - Sa fameuse tarte aux pommes (Automne) ⭐ NOUVEAU
- **Carte 3** : Gâteau d'anniversaire - Recette familiale depuis 1950 (Célébrations)

### 📄 Fichiers modifiés
1. `personne.html` (lignes 191, 196-207, 208-219)

### 🎨 Résultat visuel
- ✅ Deux recettes de Grand-Maman Lise maintenant visibles
- ✅ Tourtière traditionnelle (Noël)
- ✅ Sa fameuse tarte aux pommes (Automne) avec icône pomme
- ✅ Gâteau d'anniversaire conservé en 3ème position

### ✅ Statut : Modifications complétées avec succès
