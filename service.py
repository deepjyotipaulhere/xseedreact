from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import pymysql

app=Flask(__name__)
CORS(app)

@app.route("/getrestaurants")
def getrestaurants():
    con=pymysql.connect(host='localhost',user='root',passwd='1234',db='xseed')
    cur=con.cursor(pymysql.cursors.DictCursor)
    cur.execute("SELECT * FROM restaurants r,restaurants_address ra where r.`Restaurant ID`=ra.`Restaurant ID`")
    rows=cur.fetchall()
    con.close()
    return jsonify(rows)

@app.route("/getrestaurantsbyid/<id>")
def getrestaurantsbyid(id):
    con=pymysql.connect(host='localhost',user='root',passwd='1234',db='xseed')
    cur=con.cursor(pymysql.cursors.DictCursor)
    cur.execute("SELECT * FROM restaurants where `Restaurant ID`="+id)
    rows=cur.fetchall()
    con.close()
    return jsonify(rows[0])

@app.route("/getrestaurantlocation/<id>")
def getrestaurantlocation(id):
    con=pymysql.connect(host='localhost',user='root',passwd='1234',db='xseed')
    cur=con.cursor(pymysql.cursors.DictCursor)
    cur.execute("SELECT * FROM restaurants_address where `Restaurant ID`="+id)
    rows=cur.fetchall()
    con.close()
    return jsonify(rows[0])

if __name__=='__main__':
    app.run(debug=True,host='0.0.0.0')