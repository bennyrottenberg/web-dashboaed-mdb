#!/bin/bash
ps | grep -i /Library/Frameworks/Python
x=$(ps | grep -i /Library/Frameworks/Python | awk '{print $1}')
arrIN=(${x//\n/ })

for i in "${arrIN[@]}"; do
    echo "try to kill prosess $i " 
    kill -9 $i
  done



$(./start-flask.sh)
echo "finish"
