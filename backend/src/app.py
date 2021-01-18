from flask import Flask, request
from .db import cursor, connection
from .querys import CREATE, SELECT
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
cursor.execute(CREATE)


def __u(user):
    return {
"fname" : user[0] ,
"lname" : user[1] ,
"gender" : user[2] ,
"created_at" : user[3] }



@app.route("/create_user", methods=["POST"])
def create_user():
    
    data = request.get_json()

    fname = data['fname']
    lname = data['lname']
    gender = data['gender']

    query = f"""INSERT INTO employee (fname, lname, gender) VALUES ('{fname}', '{lname}', '{gender}')"""

    cursor.execute(query)
    connection.commit()

    return "Usuário criado com sucesso", 201



#@app.route("/users/<name_filter:name_filter>", methods=["GET"])


@app.route("/users", methods=["GET"])
def users(name_filter=None):
    print(name_filter)
    #name_filter = request.params
    #result = cursor.execute(f"SELECT * FROM employee where fname like {name_filter}").fetchall()
    result = cursor.execute(SELECT).fetchall()

    _users = [__u(user) for user in result]
    #sleep(1)
    
    return {"users" : _users}, 200
