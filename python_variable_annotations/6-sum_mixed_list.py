#!/usr/bin/env python3
"""Module for variable annotations"""


from typing import List
def sum_mixed_list(mxd_lst: List[float]) -> float:
    """
    Returns the sum of a mixed list of integers and floats.

    Args:
        mxd_lst (list[float]): A list containing integers and floats to be summed.

    Returns:
        float: The sum of the list.
    """
    return sum(mxd_lst)