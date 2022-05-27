from datetime import datetime
from elasticsearch import Elasticsearch
es = Elasticsearch()

#TEST DOC
doc = {
    'author': 'kimchy',
    'text': 'Elasticsearch: cool. bonsai cool.',
    'timestamp': datetime.now(),
}

#PUTS DOCUMENT INTO ELASTICSEARCH
res = es.index(index="test-index", id=1, document=doc)
print(res['result'])

#GET ITEM FROM DATABASE
res = es.get(index="test-index", id=1)
print(res['_source'])

es.indices.refresh(index="test-index")

#SEARCH FOR ITEM IN DATABASE
res = es.search(index="test-index", query={"match_all": {}})
print("Got %d Hits:" % res['hits']['total']['value'])
for hit in res['hits']['hits']:
    print("%(timestamp)s %(author)s: %(text)s" % hit["_source"])