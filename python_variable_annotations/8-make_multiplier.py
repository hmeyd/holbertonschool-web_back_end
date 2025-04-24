#!/usr/bin/env python3
from typing import Callable
"""
Module for variable annotations"""



def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ Creates a multiplier function.
    Args:
        multiplier (float): The multiplier to be used.
    Returns:
        Callable[[float], float]: A function that takes a float and returns a float.
    """
    def multiply(x: float) -> float:
        """ Multiplies a float by the multiplier.
        Args:
            x (float): The float to be multiplied.
        Returns:
            float: The result of the multiplication.
        """
        return x * multiplier
    return multiply
