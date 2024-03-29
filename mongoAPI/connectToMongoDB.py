from pymongo import MongoClient
from bson import json_util
import json
f = open('config/configOTTSG.json',)
configFile = json.load(f)
MONGODB_HOST = configFile['MONGODB_HOST']
MONGODB_PORT = configFile['MONGODB_PORT']
DB_NAME = configFile['DB_NAME']
COLLECTION_NAME = configFile['COLLECTION_NAME']
f.close()

f = open('config/configMDRM.json',)
configFile = json.load(f)
DB_NAME_MDRM = configFile['DB_NAME']
COLLECTION_NAME_MDRM_ALENTE = configFile['COLLECTION_NAME']
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
