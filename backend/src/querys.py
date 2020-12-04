CREATE = """
    CREATE TABLE IF NOT EXISTS employee  (  
    fname VARCHAR(20), 
    lname VARCHAR(30), 
    gender CHAR(1), 
    created_at DATE DEFAULT CURRENT_TIMESTAMP);"""

DROP = '''DROP TABLE employee;'''


SELECT = """SELECT * FROM employee """ 
#SELECT = """SELECT * FROM employee WHERE fname LIKE 'G%'"""  // Select para o filter
   