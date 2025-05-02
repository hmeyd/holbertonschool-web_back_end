#!/usr/bin/env python3
"""List all documents in a MongoDB collection"""
from pymongo import MongoClient


def list_all(mongo_collection):
    """
    Lists all documents in a collection.
    """
    return list(mongo_collection.find())
