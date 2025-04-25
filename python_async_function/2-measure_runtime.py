#!/usr/bin/env python3
"""
2-measure_runtime.py

Ce module mesure le temps moyen d'exécution de la coroutine wait_n.
"""

import time
import asyncio
from typing import Callable
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Mesure le temps moyen (en secondes) que prend une exécution de wait_n.

    Args:
        n (int): nombre d'appels à wait_random via wait_n.
        max_delay (int): délai maximal pour chaque appel.

    Returns:
        float: temps moyen d'exécution d'une coroutine.
    """
    start = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    total_time = time.perf_counter() - start
    return total_time / n
