#!/usr/bin/env python3

"""
0-basic_async_syntax.py
This module contains a function that takes an integer max_delay
and returns a random float between 0 and max_delay after a random delay."""
import asyncio
import random


async def wait_n(max_delay, n) -> float:
    """Returns a list of n random floats between 0 and max_delay after a random delay."""
    delays = []
    for _ in range(n):
        delay = random.uniform(0, max_delay)
        await asyncio.sleep(delay)
        delays.append(delay)
    return delays