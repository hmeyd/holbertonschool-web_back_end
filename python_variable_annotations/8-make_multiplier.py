#!/usr/bin/env python3
"""
Module for variable annotations"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ Creates a multiplier function.
    """
    def multiply(x: float) -> float:
        """ Multiplies a float by the multiplier.
        """
        return x * multiplier
    return multiply
