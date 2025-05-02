#!/usr/bin/env python3
"""Script to generate stats from Nginx logs stored in MongoDB"""

from pymongo import MongoClient

def nginx_log_stats():
    """Print stats about Nginx logs from the 'logs' database in MongoDB"""
    # Connect to MongoDB
    client = MongoClient()
    db = client.logs  # Connect to the 'logs' database
    collection = db.nginx  # Connect to the 'nginx' collection

    # Total number of logs
    total_logs = collection.count_documents({})

    # Methods count
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    methods_count = {}
    for method in methods:
        methods_count[method] = collection.count_documents({"method": method})

    # Count the number of GET requests for the /status path
    get_status_count = collection.count_documents({"method": "GET", "path": "/status"})

    # Output the results in the desired format
    print(f"{total_logs} logs")
    print("Methods:")
    for method in methods:
        print(f"\t{methods_count[method]} {method}")
    print(f"\t{get_status_count} GET /status")

if __name__ == "__main__":
    nginx_log_stats()
