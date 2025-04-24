#!/usr/bin/env python3
"""Module for variable annotations"""



from typing import Union, Tuple

def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Converts a string and a number into a tuple.
    The number is squared in the process.
    Args:
        k (str): The string to be converted.
        v (Union[int, float]): The number to be squared.
    Returns:
        Tuple[str, float]: A tuple containing the string and the squared number.
    """
    return (k, float(v ** 2))
