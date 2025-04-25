#!/usr/bin/env python3
"""
1-concurrent_coroutines.py

Ce module contient une coroutine qui exécute plusieurs coroutines
wait_random en parallèle et retourne la liste des délais obtenus,
triée de manière ascendante.
"""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Exécute n coroutines wait_random de manière concurrente.
    """
    delays = await asyncio.gather(*(wait_random(max_delay) for _ in range(n)))
    return sorted(delays)
