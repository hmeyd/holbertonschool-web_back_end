# Python - Async

## 📚 Description

Ce projet introduit les bases de la programmation **asynchrone** en Python avec le module `asyncio`. Il explore comment exécuter plusieurs coroutines en parallèle, mesurer le temps d'exécution, créer des tâches, et gérer l'asynchronisme avec des délais aléatoires.

---

## 🎯 Objectifs pédagogiques

À la fin de ce projet, vous serez capable de :

- Utiliser les mots-clés `async` et `await` en Python ;
- Exécuter un programme asynchrone avec `asyncio.run()` ;
- Lancer plusieurs coroutines simultanément ;
- Créer des `asyncio.Task` pour des exécutions non bloquantes ;
- Utiliser le module `random` pour générer des délais aléatoires.

---

## 📁 Structure des fichiers

- `0-basic_async_syntax.py`  
  Coroutine `wait_random` qui attend un délai aléatoire entre 0 et `max_delay`.

- `1-concurrent_coroutines.py`  
  Coroutine `wait_n` qui exécute `n` fois `wait_random` en parallèle.

- `2-measure_runtime.py`  
  Fonction `measure_time` qui mesure le temps moyen d'exécution de `wait_n`.

- `3-tasks.py`  
  Fonction `task_wait_random` qui retourne une `asyncio.Task` à partir de `wait_random`.

- `4-tasks.py`  
  Fonction `task_wait_n` semblable à `wait_n` mais en utilisant `task_wait_random`.

- `main.py` (fichiers de test fournis par Holberton)  
  Fichiers de test pour valider le comportement des fonctions.

---

## 🔧 Technologies utilisées

- Python 3.9+
- asyncio
- random
- time

---

## ✅ Prérequis

- Ubuntu 20.04 LTS
- Conformité `pycodestyle` (version 2.5.x)
- Tous les fichiers doivent être exécutables et contenir la ligne shebang :  
  `#!/usr/bin/env python3`

---

## 🧪 Exécution

Exemples de commandes pour tester les fichiers :

```bash
chmod +x 0-main.py
./0-main.py

chmod +x 1-main.py
./1-main.py
