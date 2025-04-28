
# 📚 Python - Async Comprehension

## Description

Ce projet explore les concepts avancés de la programmation asynchrone en Python.  
L'objectif est de comprendre et d'utiliser :
- Les **générateurs asynchrones** (`async_generator`)
- Les **comprehensions asynchrones** (`async for`, `async comprehension`)
- L'**exécution parallèle** de plusieurs coroutines avec `asyncio.gather`
- La **mesure du temps d'exécution** de tâches asynchrones

---

## 📖 Concepts étudiés

- Syntaxe `async` et `await`
- Générateurs asynchrones
- Async comprehensions (list/set/dict)
- Concurrence avec `asyncio.gather`
- Typage des coroutines avec Python (type hints)

---

## 🛠️ Fichiers

| Fichier | Description |
|:---|:---|
| `0-async_generator.py` | Coroutine qui génère 10 nombres aléatoires (entre 0 et 10) en attendant 1 seconde entre chaque génération. |
| `1-async_comprehension.py` | Coroutine qui utilise une **async comprehension** pour récupérer les 10 nombres générés. |
| `2-measure_runtime.py` | Coroutine qui exécute 4 fois `async_comprehension` en parallèle et mesure le temps total d'exécution. |

---

## 🧩 Instructions

- Tous les fichiers sont compatibles **Python 3.9**.
- Chaque module et chaque fonction est **documentée**.
- Tous les fichiers suivent la norme **pycodestyle** (PEP8).
- Exécution sur **Ubuntu 20.04 LTS**.

---

## 📈 Résultats attendus

- Le générateur asynchrone génère 10 nombres différents avec un délai de 1 seconde chacun.
- L'async comprehension récupère rapidement ces 10 nombres.
- Lorsqu'on exécute 4 compréhensions en **parallèle**, le temps total est d'environ **10 secondes** (et non 40 secondes) grâce à l'exécution concurrente.

---

## 🚀 Comment exécuter

```bash
chmod +x 0-async_generator.py
chmod +x 1-async_comprehension.py
chmod +x 2-measure_runtime.py

python3 0-main.py
python3 1-main.py
python3 2-main.py
```

---

## 👨‍💻 Auteur

Projet réalisé par **Emmanuel Turlay**, Staff Software Engineer chez Cruise.  
Adapté pour **Holberton School - Web Back-End Track**.

---