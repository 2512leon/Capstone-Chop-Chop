from flask import Flask, render_template, request
from flask import jsonify
import json

# Import elastisearch results
import generateQuery as query
# import testWebScrape as scraper

app = Flask(__name__, template_folder='./templates', static_folder='./static')

ingredient_set = []
allergies = []
times = []
queryResult = []

# Load pages
@app.route("/ingredients_page")
def ingredients_page():
    return render_template('Ingredients_Page.html')

@app.route("/index")
def index():
    return render_template('index.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/contact_us")
def contact_us():
    return render_template('contact_us.html')

@app.route("/recipe_page")
def recipe_page():
    return render_template('recipes.html')

# Get info
@app.route("/get_ingredients")
def get_ingredients():
    ingredient = request.args.get('ingredient')
    if ingredient not in ingredient_set:
        ingredient_set.append(ingredient)
    for index in range(len(ingredient_set)):
        upper = ingredient_set[index]
        lower = upper.lower()
        ingredient_set[index] = lower
    print(ingredient_set)

    return jsonify({})

@app.route("/get_allergens")
def get_allergens():
    allergen = request.args.get('allergen')
    if allergen not in allergies:
        allergies.append(allergen)
    print(allergies)

    return jsonify({})

@app.route("/get_timers")
def get_timers():
    timer = request.args.get('time')
    if timer not in times:
        times.append(timer)
    print(times)

    return jsonify({})

@app.route("/query_database")
def query_database():
    global queryResult

    if (len(queryResult) > 0):
        queryResult.clear()
    # from here, call the elastisearch functions
    # TODO: Implement calls to elastisearch
    queryResult = query.generateQuery(ingredient_set, allergies, times)

    # TESTING WITH ONE SAMPLE
    # testList = []
    # testList.append(scraper.testUserDefinedFunc())
    # testList.append(scraper.testUserDefinedFunc())
    # print(testList)

    return json.dumps({"result": queryResult})  

@app.route("/delete_ingredients")
def delete_ingredients():
    ingredient_set.clear()
    allergies.clear()
    times.clear()
    return jsonify({})

@app.route("/search_recipes")
def search_recipes():
    global queryResult

    if (len(queryResult) > 0):
        queryResult.clear()

    recipe = request.args.get('recipe')
    queryResult = query.generateQueryTitle(recipe)

    return json.dumps({"result": queryResult})

@app.route("/get_query_results")
def get_query_results():
    global queryResult

    return json.dumps({"result": queryResult})

# Default 
@app.route("/")
def start():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()

# After this point if you run this script then 
# go to localhost:5000 you should see whatever
# you returned in the def() function

# sending stuff to html https://stackoverflow.com/questions/59975596/connect-javascript-to-python-script-with-flask