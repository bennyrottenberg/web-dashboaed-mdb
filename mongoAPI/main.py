from flask import Flask, jsonify

import connectToMongoDB
from flask import Response
from flask import request
from flask_cors import CORS,cross_origin

app = Flask('helloworld')

# Decorator defines a route
# http://localhost:5000/
@app.route('/helloWorld')
def index():
    return jsonify({ 'text': 'Hello World!' })


@app.route('/api/mdrm-build-all/get_data_json')
def getDatasJson():
    response = Response(connectToMongoDB.getDatas() ,mimetype='application/json')
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/api/mdrm-build-all/get_data_json_latests_ottguard')
def getLatestDataOTTGUARD():
    rowNum = int(request.args.get('rowNum'))
    response = Response(connectToMongoDB.getLatestDataOTTGUARD(rowNum) ,mimetype='application/json')
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route('/api/mdrm-build-all/get_data_json_latests_mdrm')
def getLatestDataMDRM():
    rowNum = int(request.args.get('rowNum'))
    response = Response(connectToMongoDB.getLatestDataMDRM(rowNum) ,mimetype='application/json')
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response    


@app.route('/api/mdrm-build-all/get_data_json_mdrm')
def getDatasJsonMDRM():
    response = Response(connectToMongoDB.getDatasMDRM() ,mimetype='application/json')
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response    


@app.route('/api/education/get_all_apps_data')
def getLatestDataED():
    rowNum = int(request.args.get('rowNum'))
    response = Response(connectToMongoDB.getLatestDataED(rowNum) ,mimetype='application/json')
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response   

@app.route('/api/education/update_app/<id>' , methods=["PATCH"])
def update_app(id):
   
    response = Response(connectToMongoDB.update_app(id) ,mimetype='application/json')
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route('/api/education/insert_app/<mydict>' , methods=["POST"])
def insert_app(mydict):
    
    print ("insert_app function started")
   
    response = Response(connectToMongoDB.insert_app(mydict) ,mimetype='application/json')
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    #response.headers.add('Access-Control-Allow-Credentials', true)
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH')
    return response    


if __name__ == '__main__':
    app.run(host="0.0.0.0")
