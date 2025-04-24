#!/usr/bin/env python3
def floor(x: float) -> int:
    """
    Return the largest integer less than or equal to x.
    
    Args:
        x (float): The number to be floored.
    
    Returns:
        int: The largest integer less than or equal to x.
    """
    return int(x) if x >= 0 else int(x) - 1