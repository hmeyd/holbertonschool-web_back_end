# ES6 Promises

## Description
Ce projet explore l'utilisation des Promises en JavaScript ES6. Il couvre la création, la gestion et la combinaison de Promises pour gérer des opérations asynchrones de manière efficace.

## Installation
1. **Cloner le dépôt :**
   ```sh
   git clone https://github.com/holbertonschool-web_back_end.git
   ```
2. **Naviguer dans le dossier du projet :**
   ```sh
   cd holbertonschool-web_back_end/ES6_promise
   ```
3. **Installer les dépendances :**
   ```sh
   npm install
   ```

## Exercices

### 0. Keep every promise you make and only make promises you can keep
- Implémente la fonction `getResponseFromAPI()` qui retourne une Promise.

### 1. Don't make a promise...if you know you can't keep it
- Implémente `getFullResponseFromAPI(success)`, qui retourne une Promise résolue ou rejetée en fonction du paramètre `success`.

### 2. Catch me if you can!
- Implémente `handleResponseFromAPI(promise)`, qui gère les réponses d'une Promise avec `.then()`, `.catch()` et `.finally()`.

### 3. Handle multiple successful promises
- Utilise `uploadPhoto` et `createUser` pour résoudre plusieurs Promises simultanément avec `Promise.all`.

### 4. Simple promise
- Implémente `signUpUser(firstName, lastName)`, qui retourne une Promise résolue avec un objet contenant le prénom et le nom.

### 5. Reject the promises
- Implémente `uploadPhoto(filename)`, qui rejette une Promise avec une erreur contenant le nom du fichier.

### 6. Handle multiple promises
- Implémente `handleProfileSignup(firstName, lastName, fileName)`, qui exécute plusieurs Promises et retourne un tableau contenant le statut et la valeur de chaque Promise.

### 7. Load balancer
- Implémente `loadBalancer(chinaDownload, USDownload)`, qui retourne la première Promise résolue avec `Promise.race`.

### 8. Throw an error
- Implémente `divideFunction(numerator, denominator)`, qui lève une erreur si `denominator` est `0`.

### 9. Throw error / try catch
- Implémente `guardrail(mathFunction)`, qui exécute une fonction, gère les erreurs et ajoute un message de suivi à un tableau.

## Exécution des tests
- Pour tester un fichier spécifique :
  ```sh
  npm run dev <nom_du_fichier>.js
  ```

## Auteurs
- **Holberton School**