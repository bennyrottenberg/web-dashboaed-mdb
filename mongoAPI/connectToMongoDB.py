

from pymongo import MongoClient
from bson import json_util
from bson.objectid import ObjectId
import json
from flask import Response
from flask import request

f = open('config/configOTTSGLocal.json',)
configFile = json.load(f)
MONGODB_HOST = configFile['MONGODB_HOST']
MONGODB_PORT = configFile['MONGODB_PORT']
DB_NAME = configFile['DB_NAME']
COLLECTION_NAME = configFile['COLLECTION_NAME']
f.close()

f = open('config/configMDRMLocal.json',)
configFile = json.load(f)
DB_NAME_MDRM = configFile['DB_NAME']
COLLECTION_NAME_MDRM_ALENTE = configFile['COLLECTION_NAME']
f.close()


f = open('config/configEDIISWebApps.json',)
configFile = json.load(f)
DB_NAME_ED= configFile['DB_NAME']
COLLECTION_NAME_ED = configFile['COLLECTION_NAME']
f.close()

def editResult(_projects,option='reverse'):
    _json_projects = []
    for project in _projects:
        _json_projects.append(project)

    if(option=='reverse'):
        _json_projects.reverse()
        
    _json_projects = json_util.dumps(_json_projects, default=json_util.default)
    print("_json_projects: "+_json_projects)
    return _json_projects

def getDatas():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DB_NAME][COLLECTION_NAME]
    projects = collection.find()
    json_projects = editResult(projects,"None")
    connection.close()
    return json_projects

def getDatasMDRM():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DB_NAME_MDRM][COLLECTION_NAME_MDRM_ALENTE]
    projects = collection.find()
    json_projects = editResult(projects,"None")
    connection.close()
    return json_projects    

def getLatestDataOTTGUARD(rowNum):
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    print(f"MONGODB_HOST: {MONGODB_HOST}")
    print(f"MONGODB_PORT: {MONGODB_PORT}")
    print(f"DB_NAME: {DB_NAME}")
    print(f"COLLECTION_NAME: {COLLECTION_NAME}")

    collection = connection[DB_NAME][COLLECTION_NAME]
    projects = collection.find().sort([('$natural', -1)]).limit(rowNum)
    json_projects = editResult(projects,'reverse')
    connection.close()
    return json_projects  

def getLatestDataMDRM(rowNum):
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DB_NAME_MDRM][COLLECTION_NAME_MDRM_ALENTE]
    projects = collection.find().sort([('$natural', -1)]).limit(rowNum)
    json_projects = editResult(projects,'reverse')
    connection.close()
    return json_projects 



def getLatestDataED(rowNum):
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DB_NAME_ED][COLLECTION_NAME_ED]
    projects = collection.find().sort([('$natural', -1)]).limit(rowNum)
    json_projects = editResult(projects,'reverse')
    connection.close()
    return json_projects 

def insert_app(_mydict):
    print("insert_app start, mydict is:")
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DB_NAME_ED][COLLECTION_NAME_ED]
    mydict = json.loads(_mydict)
    x = collection.insert_one(mydict)

    print("insert_app finish",x)


def update_app(id):
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DB_NAME_ED][COLLECTION_NAME_ED]
    try:
        dbResponse = collection.update_one(
        {"_id": ObjectId(id)},
        {"$set":{"appName":request.form["appName"]}}
        )
       
        #for attr in dir(dbResponse):
        #    print (f"*******{attr}*******")

    except Exception as ex:
        print("*******************************************")
        print(ex)
        print("*******************************************")
        return Response(
            response = json.dumps(
                {"message":"error"}
            ),
            status=500,
            mimetype = "application.json"
        )

def add_comment(mydict):
    print("add_comment started")
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DB_NAME_ED][COLLECTION_NAME_ED]
    data = json.loads(mydict)

    id = data["_id"]
    dateVar =data["date"]
    comment = data["Comment"]

    dbResponse = collection.update_one(
        {"_id": ObjectId(id)},
        {"$set":{"comment":{dateVar : comment}}}
        )

    





