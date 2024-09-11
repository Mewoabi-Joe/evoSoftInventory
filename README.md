# EvoSoft Inventory
EvoSoft Inventory est une application de gestion d'inventaire pour une entreprise fictive gérant plusieurs magasins. L'application permet aux employés de saisir et de gérer les données d'inventaire pour divers produits dans différents magasins. Elle est développée en utilisant React, TypeScript et Material UI.

## Table des Matières

- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du Projet](#structure-du-projet)
- [Choix des Technologies](#choix-des-technologies)
- [Mon Approche](#mon-approche)
- [Défis, Limitations et Perspectives](#défis-limitations-et-perspectives)
- [Conclusion](#conclusion)

## Fonctionnalités

- Liste statique des magasins et des produits
- Module de saisie d'inventaire
- Stockage des données dans le `localStorage`
- Fonctionnalité d'exportation CSV
- Validation des données
- Internationalisation avec `react-i18next`

J'ai implémenté toutes ces fonctionnalités dans le fichier de spécifications des exigences et les ai réparties dans des commits séparés.

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

- **src/** : Dossier principal contenant le code source de l'application.
  - **App.tsx** : Composant racine de l'application.
  - **assets/** : Dossier pour les ressources telles que les images et les fichiers CSS.
  - **composants/** : Dossier pour les composants réutilisables de l'application.
    - **CarteAccueil.tsx** : Composant pour afficher une carte d'accueil.
    - **ChampDeRecherche.tsx** : Composant pour le champ de recherche.
    - **ChampDeRechercheEtFiltre.tsx** : Composant combinant recherche et filtres.
    - **ElementListe.tsx** : Composant pour un élément de liste.
    - **EnTetePage.tsx** : Composant pour l'en-tête de page.
    - **ExporterCSV.tsx** : Composant pour l'exportation des données en CSV.
    - **Filtre.tsx** : Composant pour les filtres.
    - **FiltresDInventaire.tsx** : Composant pour les filtres d'inventaire.
    - **Liste.tsx** : Composant pour afficher une liste.
  - **donnees/** : Dossier pour les fichiers de données statiques.
    - **magasins.ts** : Données des magasins.
    - **produits.ts** : Données des produits.
  - **i18n.ts** : Configuration pour l'internationalisation.
  - **index.css** : Fichier CSS principal.
  - **locales/** : Dossier pour les fichiers de traduction.
    - **en/** : Traductions en anglais.
      - **translation.json** : Fichier de traduction anglais.
    - **fr/** : Traductions en français.
      - **translation.json** : Fichier de traduction français.
  - **main.tsx** : Point d'entrée principal de l'application.
  - **miseEnPages/** : Dossier pour les composants de mise en page.
    - **MiseEnPageApplication.tsx** : Composant de mise en page de l'application.
    - **MiseEnPagePage.tsx** : Composant de mise en page de page.
  - **pages/** : Dossier pour les pages de l'application.
    - **Accueil.tsx** : Page d'accueil.
    - **CreerInventaire.tsx** : Page pour créer un inventaire.
    - **Inventaire.tsx** : Page d'inventaire.
    - **Magasin.tsx** : Page des magasins.
    - **Produits.tsx** : Page des produits.
  - **routes.tsx** : Configuration des routes de l'application.
  - **types/** : Dossier pour les types TypeScript.
    - **inventaire.ts** : Types pour l'inventaire.
    - **inventaireSimple.ts** : Types pour un inventaire simple.
    - **magasin.ts** : Types pour les magasins.
    - **nomDePages.ts** : Types pour les noms de pages.
    - **produit.ts** : Types pour les produits.
  - **utils/** : Dossier pour les utilitaires.
    - **codecLocalStorageInventaire.ts** : Utilitaire pour le stockage local de l'inventaire.
    - **obtenirDateActuelle.ts** : Utilitaire pour obtenir la date actuelle.

## Choix des Technologies

Pour mes choix technologiques, le projet mentionnait déjà l'utilisation de React et TypeScript, que j'adore utiliser. TypeScript offre une détection précoce des erreurs, fournit de la documentation et rend l'application plus robuste. J'ai choisi **Material UI** pour le style en raison de ma familiarité avec cette excellente bibliothèque de style et de tous les composants réutilisables qu'elle propose. Les boutons, les cartes, les champs de formulaire, les graphiques et même les hooks comme `useNotification` et `useLocalStorage` ont été très utiles dans mon implémentation.

## Mon Approche

J'ai adopté une approche axée sur le design pour implémenter ma solution. J'ai pris le temps de réfléchir aux exigences fonctionnelles et à la manière dont tout cela s'assemble. J'ai dessiné rapidement des wireframes des différentes pages avec un stylo et du papier pour avoir une idée générale de ce que je vais coder. De cette manière, je peux savoir à l'avance quels composants réutilisables je dois créer et comment structurer mon code pour répondre à ma vision.

J'ai également planifié comment je vais progresser dans mes commits à l'avance, en commettant après chaque grande fonctionnalité. Après la configuration initiale du projet, après avoir terminé l'implémentation de toutes les fonctionnalités sur une page, je fais un commit.

## Défis, Limitations et Perspectives

**Défis**
Je n'ai rencontré aucun défi majeur en travaillant sur ce projet, mais si je devais en mentionner deux, ce seraient :
- Mon manque de familiarité avec le codage en français
- L'enregistrement de la vidéo, son montage et sa compression pour obtenir une taille que je pouvais pousser sur GitHub

**Limitations et Perspectives**
- Bien que les exigences ne mentionnaient pas le responsiveness, c'est quelque chose que j'avais en tête pour rendre l'application entièrement responsive.
- Implémenter un CRUD complet pour les magasins, les produits et l'inventaire dans l'application pourrait également être intéressant plutôt que d'avoir certaines données statiques.
- Passer l'application en full stack et ajouter un backend avec une base de données est également quelque chose qui pourrait amener l'application au niveau supérieur.

## Conclusion

Dans l'ensemble, je pense avoir fait un excellent travail sur cet exercice. J'ai implémenté toutes les fonctionnalités et les bonus stipulés dans le fichier des exigences. J'ai une vidéo de démonstration `demo.mp4` qui montre l'application en action. Passez un bon moment à la regarder et à tester l'application en suivant les étapes d'installation ci-dessus.
