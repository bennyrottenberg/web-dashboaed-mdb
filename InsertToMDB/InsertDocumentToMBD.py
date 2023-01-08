from ssh_pymongo import MongoSession
import json
f = open('config.json',)
configFile = json.load(f)



DB_NAME = configFile['DB_NAME']
COLLECTION_NAME = configFile['COLLECTION_NAME']



session = MongoSession(
    '10.10.230.14',
    port=22,
    user='heb',
    password='PASS_WORD',
    uri='mongodb://127.0.0.1:27017')
db = session.connection[DB_NAME]
mycol = db[COLLECTION_NAME]

with open('data.json') as json_file:
    data = json.load(json_file)

#print("Type:", type(data))
#print(data)
x = mycol.insert_one(data)
#print(db.collection_names())
#x = mycol.insert_many(data)
#mydict = { "name": "Rachel", "address": "haayalot 27" }

session.stop()
