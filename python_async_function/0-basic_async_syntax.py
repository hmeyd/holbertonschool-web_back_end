#!/usr/bin/env python3

"""
0-basic_async_syntax.py
This module contains a function that takes an integer max_delay
and returns a random float between 0 and max_delay after a random delay."""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Returns a random float between 0 and max_delay after a random delay."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
