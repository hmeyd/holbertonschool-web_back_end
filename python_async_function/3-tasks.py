#!/usr/bin/env python3
"""
3-tasks.py

Ce module contient une fonction qui retourne une tâche asyncio
pour exécuter la coroutine wait_random.
"""

import asyncio
from typing import Any
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Crée et retourne une tâche asyncio pour exécuter wait_random(max_delay).

    Args:
        max_delay (int): le délai maximum à attendre.

    Returns:
        asyncio.Task: la tâche asyncio créée.
    """
    return asyncio.create_task(wait_random(max_delay))
