#import elasticsearch
from elasticsearch import Elasticsearch
#create connection
es = Elasticsearch()
#function to generate a query for a ingredient allergy or time specification
def generateQuery(ingredients=[], allergies=[], time=[]):
    #Header Generater
    query = '{"size": 10,"query": {"bool": {"must":['
    #Ingredients Generater
    for i in range(len(ingredients)):
        query += '{"term":{"ingredients":"'+ingredients[i]+'"}}'
        if(i<len(ingredients)-1):
            query += ','
            
    #Time Generator
    if(len(time)>0):
        if(len(ingredients)!=0):
            query += ","
        query += '{"range":{"total_time":{"gte":0,"lte":'+time[0]+'}}}'
    
    query += ']'
    #Allergy Generator
    if(len(allergies)>0):
        query += ',"must_not":['
        for a in range(len(allergies)):
            query += '{"term":{"ingredients":"'+allergies[a]+'"}}'
            if(a<len(allergies)-1):
                query += ','
        query += ']'   
    query += '}}}'
    #this line searches database for the built query
    res = es.search(index="recipe", body=query)
    return getSource(res)

#function to search for a title          
def generateQueryTitle(title):
    query = '{"size": 50,"query": {"simple_query_string": {"fields": ["title"],"query":"'+title+'","lenient": "true","default_operator": "AND"}}}'
    res = es.search(index="recipe", body=query)
    return getSource(res)

#fucntion to extract the repicpe data we want from output and compile into list of json objs
def getSource(res):
    reps = []
    for e in res['hits']['hits']:
        reps.append(e['_source'])
    return reps

reps = generateQueryTitle(title="chicken tacos")
print(reps)




