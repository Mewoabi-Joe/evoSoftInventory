# EvoSoft Inventory

EvoSoft Inventory est une application de gestion d'inventaire pour une entreprise fictive gérant plusieurs magasins. L'application permet aux employés de saisir et de gérer les données d'inventaire pour divers produits dans différents magasins. Elle est développée en utilisant React, TypeScript et Material UI.

## Table des Matières

- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du Projet](#structure-du-projet)
- [Internationalisation](#internationalisation)
- [Fonctionnalités Bonus](#fonctionnalités-bonus)

## Fonctionnalités

- Liste statique des magasins et des produits
- Module de saisie d'inventaire
- Stockage des données dans le `localStorage`
- Fonctionnalité d'exportation CSV
- Validation des données
- Internationalisation avec `react-i18next`

## Installation

1. Clonez le dépôt :

  ```sh
  git clone https://github.com/Mewoabi-Joe/evoSoftInventory.git
  cd evoSoftInventory
  ```

2. Installez les dépendances :

  ```sh
  npm install
  ```

## Utilisation

Ouvrez votre navigateur et accédez à http://localhost:5173. Utilisez l'interface pour saisir les données d'inventaire des produits dans différents magasins. Exportez les données d'inventaire au format CSV en utilisant le bouton d'exportation.

## Structure du Projet

```
.gitignore
eslint.config.js
index.html
package.json
public/
README.md
src/
  App.tsx
  assets/
  composants/
    CarteAccueil.tsx
    ChampDeRecherche.tsx
    ChampDeRechercheEtFiltre.tsx
    ElementListe.tsx
    EnTetePage.tsx
    ExporterCSV.tsx
    Filtre.tsx
    FiltresDInventaire.tsx
    Liste.tsx
  donnees/
    magasins.ts
    produits.ts
  i18n.ts
  index.css
  locales/
    en/
      translation.json
    fr/
      translation.json
  main.tsx
  miseEnPages/
    MiseEnPageApplication.tsx
    MiseEnPagePage.tsx
  pages/
    Accueil.tsx
    CreerInventaire.tsx
    Inventaire.tsx
    Magasin.tsx
    Produits.tsx
  routes.tsx
  types/
    inventaire.ts
    inventaireSimple.ts
    magasin.ts
    nomDePages.ts
    produit.ts
  utils/
    codecLocalStorageInventaire.ts
    obtenirDateActuelle.ts
  vite-env.d.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Internationalisation

L'application prend en charge plusieurs langues en utilisant `react-i18next`. Pour changer de langue, utilisez le sélecteur de langue fourni dans l'interface.

Les fichiers de traduction sont situés dans le répertoire `src/locales/`.

## Fonctionnalités Bonus

- **Exportation CSV** : Exportez les données d'inventaire au format CSV en utilisant le composant `ExporterCSV` dans `src/composants/ExporterCSV.tsx`.
- **Validation des Données** : Assurez-vous que les données saisies sont correctes et complètes.
- **Internationalisation** : Implémentée en utilisant `react-i18next`.

