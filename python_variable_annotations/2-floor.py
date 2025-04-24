#!/usr/bin/env python3
"""Module for variable annotations"""
import math


def floor(x: float) -> int:
    """
    Return the largest integer less than or equal to x.
    
    Args:
        x (float): The number to be floored.
    
    Returns:
        int: The largest integer less than or equal to x.
    """
    return math.floor(x)
