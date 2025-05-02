#!/usr/bin/env python3
"""Insert a new document in a MongoDB collection"""
from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a collection based on kwargs.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
