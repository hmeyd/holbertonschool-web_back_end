#!/usr/bin/env python3
"""Module for async_comprehension coroutine."""

import asyncio
from typing import List
from 0-async_generator import async_generator # Assuming this is in the same directory

async def async_comprehension() -> List[float]:
    """Collect 10 random floats from async_generator and return them in a list."""
    return [i async for i in async_generator()]
