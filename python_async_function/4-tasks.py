#!/usr/bin/env python3
"""
4-tasks.py

Ce module contient une fonction asynchrone qui exécute plusieurs tâches asyncio
en parallèle en utilisant task_wait_random, et retourne les délais triés.
"""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Exécute task_wait_random n fois de façon concurrente.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []
    for completed in asyncio.as_completed(tasks):
        delay = await completed
        delays.append(delay)
    return delays
