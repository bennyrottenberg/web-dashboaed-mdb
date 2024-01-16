

from pymongo import MongoClient
from bson import json_util
from bson.objectid import ObjectId
import json
from flask import Response
from flask import request



def get_db_collection(conf_file):
    f = open('config/'+conf_file)
    configFile = json.load(f)
    MONGODB_HOST = configFile['MONGODB_HOST']
    MONGODB_PORT = configFile['MONGODB_PORT']
    DB_NAME_ED= configFile['DB_NAME']
    COLLECTION_NAME_ED = configFile['COLLECTION_NAME']
    f.close()

    if(conf_file == 'configEDIISWebApps.json'):
        connection = MongoClient(MONGODB_HOST, MONGODB_PORT,username='root', 
                         password='pass',
                        authSource="admin")
    else:
        connection = MongoClient(MONGODB_HOST, MONGODB_PORT)


     
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
    

    collection = get_db_collection('configOTTSGLocal.json')
    projects = collection[1].find().sort([('$natural', -1)]).limit(rowNum)
    json_projects = editResult(projects,'reverse')
    collection[0].close()
    return json_projects  

def getLatestDataMDRM(rowNum):
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = get_db_collection()
    projects = collection.find().sort([('$natural', -1)]).limit(rowNum)
    json_projects = editResult(projects,'reverse')
    connection.close()
    return json_projects 



def getLatestDataED(rowNum):
    collection = get_db_collection('configEDIISWebAppsLocal.json')
    projects = collection[1].find().sort([('$natural', -1)]).limit(rowNum)
    json_projects = editResult(projects,'reverse')
    #connection.close()
    collection[0].close
    return json_projects 

def insert_app(_mydict):
    print("insert_app start, mydict is:")
    collection = get_db_collection('configEDIISWebAppsLocal.json')
    mydict = json.loads(_mydict)
    x = collection[1].insert_one(mydict)
    collection[0].close

    print("insert_app finish",x)


def edit_document(mydict):
    print("edit_document start ...")
    print("mydict:",mydict)
    collection = get_db_collection('configEDIISWebAppsLocal.json')
    print(collection)
    print(collection)
    data = json.loads(mydict)

    
    
    appName = data["appName"]
    print(appName,id)

    dbResponse = collection[1].update_one(
       {"_id": ObjectId(data["_id"])},
        {"$set":{"appName":data["appName"]}},
        #{"$set":{"servers":data["servers"]}},
        #{"$set":{"developer":data["developer"]}}
        #{"$set":{"manager":data["manager"]}},
        #{"$set":{"Enviroment":data["Enviroment"]}}
        
        )



 

    collection[0].close
    return {}    



def update_app(id):
    collection = get_db_collection('configEDIISWebAppsLocal.json')
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
    collection = get_db_collection('configEDIISWebAppsLocal.json')
    print("mydict:",mydict)
    print(collection)
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

    





