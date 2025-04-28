#!/usr/bin/env python3
"""Module for async_generator coroutine."""

import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """Yield a random float between 0 and 10, 10 times, with a 1 second wait each time."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
