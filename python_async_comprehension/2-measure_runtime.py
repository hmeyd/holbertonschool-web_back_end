#!/usr/bin/env python3
"""Module for measuring the runtime of four
parallel async_comprehension calls."""

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measure the total time taken to run async_comprehension
    four times in parallel."""
    start_time = time.time()
    await asyncio.gather(*[async_comprehension() for _ in range(4)])
    end_time = time.time()
    return end_time - start_time
