#!/usr/bin/env python3
"""Find schools by topic in MongoDB"""
from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of schools having a specific topic.

    Args:
        mongo_collection: pymongo collection object.
        topic (str): the topic to search for.

    Returns:
        List of documents (schools) that contain the given topic.
    """
    return list(mongo_collection.find({"topics": topic}))
