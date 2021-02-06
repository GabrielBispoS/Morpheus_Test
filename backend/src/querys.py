CREATE = """
    CREATE TABLE IF NOT EXISTS employee  (  
    fname VARCHAR(20), 
    lname VARCHAR(30), 
    email VARCHAR(40), 
    created_at DATE DEFAULT CURRENT_TIMESTAMP);"""


SELECT = """SELECT * FROM employee """ 
#SELECT = """SELECT * FROM employee WHERE fname LIKE 'G%'"""  // Select para o filter
   