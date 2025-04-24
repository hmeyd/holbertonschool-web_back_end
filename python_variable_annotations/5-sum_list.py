#!/usr/bin/env python3
"""Module for variable annotations"""


from typing import List
def sum_list(input_list: List[float]) -> float:
    """
    Returns the sum of a list of floats.

    Args:
        input_list (list[float]): A list of floats to be summed.

    Returns:
        float: The sum of the list.
    """
    return sum(input_list)
