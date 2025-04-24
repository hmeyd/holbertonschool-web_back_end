#!/usr/bin/env python3
"""Module for variable annotations"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Converts a string and a number into a tuple.
    The number is squared in the process.
    """
    return (k, v ** 2)
