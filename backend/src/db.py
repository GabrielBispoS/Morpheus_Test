import sqlite3

connection = sqlite3.connect("company.sqlite3", check_same_thread=False)

cursor = connection.cursor()
