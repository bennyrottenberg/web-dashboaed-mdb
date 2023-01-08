FROM python:3.8
WORKDIR /root/mongo/
ADD InsertDocumentToMBD.py data.json config.json /root/mongo/
RUN pip install ssh-pymongo 
CMD ["python", "/root/mongo/InsertDocumentToMBD.py"]
