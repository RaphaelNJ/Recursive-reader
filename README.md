# Benchmark de lecture de fichiers - BunJS vs NodeJS

Ce programme est un benchmark conçu pour comparer les performances de lecture de fichiers entre BunJS et NodeJS. Il mesure le nombre total de lignes et de caractères de chaques fichiers présents dans un répertoire donné.

## Prérequis

- NodeJS (version 8 ou supérieure)
- BunJS (version 0.6.4 ou supérieure)

Veuillez noter que BunJS est actuellement disponible uniquement sur les systèmes au noyau Unix (par exemple, Linux, macOS). Il n'est pas compatible avec Windows. Cela est du au fait qu'il utilise AppleWebKit et non V8 pour l'interpretation du JavaScript.

## Installation

1. Clonez ce dépôt sur votre machine locale.
```shell
git clone https://github.com/RaphaelNJ/Recurcive-reader.git
```
2. Assurez-vous d'avoir NodeJS et BunJS installés.
3. Ouvrez une fenêtre de terminal et accédez au répertoire du projet.
4. Installez les dépendances requises pour NodeJS en exécutant la commande suivante :
```
npm install
```

## Utilisation

```
node main.js <folderPath>
```

- `folderPath` : Le chemin du répertoire à analyser.

Assurez-vous de remplacer `<folderPath>` par le chemin absolu ou relatif du répertoire que vous souhaitez analyser.

## Exemple d'exécution

```
$ node main.js ./data
Total lines: 3986
Total characters: 121034
Time taken: 0.024 seconds
```

## Résultat du benchmark

Selon le benchmark réalisé, voici les performances de BunJS et NodeJS dans la lecture du même répertoire :

- Utilisation de NodeJS :
  - Total lines: 3986
  - Total characters: 121034
  - Temps d'exécution: 0.024 secondes

- Utilisation de BunJS :
  - Total lines: 3986
  - Total characters: 121034
  - Temps d'exécution: 0.004 secondes

## Conclusion

Sur la base des résultats du benchmark, BunJS semble être plus rapide que NodeJS dans la lecture de fichiers. Cependant, veuillez noter que BunJS est actuellement limité aux systèmes Unix et n'est pas compatible avec Windows. Il est recommandé de réaliser vos propres tests de performance pour évaluer les performances réelles sur votre environnement spécifique. A noter que ces tests ont été faits sur une machine locale. Or, il est souvent préférable, pour ce genre de tests de les conduire sur un serveur pour des raisons d'unicité.

## Licence

Ce programme est sous licence [MIT License](https://opensource.org/licenses/MIT).
