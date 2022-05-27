import json
import csv
from time import sleep
import requests
from recipe_scrapers import scrape_me
from elasticsearch import Elasticsearch
es = Elasticsearch()

def parse(u):
    title = u.title()
    total_time = u.total_time()
    # yields = u.yields()
    ingredients = []
    for ingredient in u.ingredients():
        ingredients.append(ingredient)
    instructions = u.instructions()
    host = u.host()
    # nutrition_info = u.nutrients()
    rec = {'title': title, 'total_time' : total_time, 'ingredients' : ingredients, 'instructions' : instructions, 'host' : host}
    return json.dumps(rec)

# def writeFile(title, info):
#     with open(title + '.json', 'w') as f:
#         f.write(info)
#         f.write(info)

def cycleLinks(fileName):
    #ID 4387,5296 broken!!!!
    i = 1
    with open(fileName, newline = '') as inputFile:
        fileReader = csv.reader(inputFile, delimiter = ',')
        next(fileReader) #skip header
        for row in fileReader:
            try:
                recScraper = scrape_me(row[1])
                jsonData = parse(recScraper)
                #print(jsonData)
                #TODO (for Aidan): use jsonData to import into elasticsearch
                es.index(index="recipe", id=i, document=jsonData)
                #print(es.get(index="recipe", id=i)['_source'])
            except:
                continue
            i = i + 1
            if(i%100==0):
                print(i)

if __name__ == '__main__':
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
        'Pragma': 'no-cache'
    }
    url = 'https://www.allrecipes.com/recipe/266830/instant-pot-barbacoa/'
    # recScraper = scrape_me(url)
    cycleLinks('allrecipes_urls.csv')
    #writeFile(scraper.title(), parse(scraper))