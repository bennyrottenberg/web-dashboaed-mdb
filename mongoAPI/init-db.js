db = db.getSiblingDB("ED_Apps");
db.IIS_Application.drop();

db.IIS_Application.insertMany([
    {
        
        "appName": "Nrs",
        "servers": "iprod20121 ,iprod20122 ,10.10.10.41",
        "developer": "אסתר מיטלמן",
        "manager": "benny",
        "comments": [
          {
            "date": "26.9.2023 10:43:32",
            "comment": "created"
          },
          {
            "date": "26.9.2023 10:44:30",
            "comment": "קק"
          },
          {
            "date": "26.9.2023 10:44:44",
            "comment": "הוספתי אפליקיישן פול"
          },
          {
            "date": "26.9.2023 10:45:8",
            "comment": "השרת לא עבד הוספתי אפליקיישן פול נפרד"
          }
        ]
      },
      {
        
        "appName": "NrsWs",
        "servers": "iprod20121 ,iprod20122 ,10.10.10.41",
        "developer": "אסתר מיטלמן",
        "manager": "benny",
        "comments": [
          {
            "date": "26.9.2023 10:43:32",
            "comment": "created"
          },
          {
            "date": "26.9.2023 10:44:30",
            "comment": "קק"
          },
          {
            "date": "26.9.2023 10:44:44",
            "comment": "הוספתי אפליקיישן פול"
          },
          {
            "date": "26.9.2023 10:45:8",
            "comment": "השרת לא עבד הוספתי אפליקיישן פול נפרד"
          }
        ]
      }
]);