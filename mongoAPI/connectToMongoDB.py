

from pymongo import MongoClient
from bson import json_util
from bson.objectid import ObjectId
import json
from flask import Response
from flask import request



def get_db_collection():
    f = open('config/configEDIISWebApps.json',)
    configFile = json.load(f)
    MONGODB_HOST = configFile['MONGODB_HOST']
    MONGODB_PORT = configFile['MONGODB_PORT']
    DB_NAME_ED= configFile['DB_NAME']
    COLLECTION_NAME_ED = configFile['COLLECTION_NAME']
    f.close()

    connection = MongoClient(MONGODB_HOST, MONGODB_PORT ,username='root', 
                         password='pass',
                        authSource="admin")
    collection = connection[DB_NAME_ED][COLLECTION_NAME_ED]
    return [connection,collection]

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
    collection = get_db_collection()
    projects = collection[1].find().sort([('$natural', -1)]).limit(rowNum)
    json_projects = editResult(projects,'reverse')
    #connection.close()
    collection[0].close
    return json_projects 

def insert_app(_mydict):
    print("insert_app start, mydict is:")
    collection = get_db_collection()
    mydict = json.loads(_mydict)
    x = collection[1].insert_one(mydict)
    collection[0].close

    print("insert_app finish",x)


def update_app(id):
    collection = get_db_collection()
    try:
        dbResponse = collection[1].update_one(
        {"_id": ObjectId(id)},
        {"$set":{"appName":request.form["appName"]}}
        )
        collection[0].close
    
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
    collection = get_db_collection()
    data = json.loads(mydict)

    id = data["_id"]
    dateVar =data["date"]
    comment = data["Comment"]

    dbResponse = collection[1].update_one(
        {"_id": ObjectId(id)},
        {"$push":{"comments":{
            "date" : dateVar,
            "comment" : comment
            
            }}}
        )

    collection[0].close    

    





