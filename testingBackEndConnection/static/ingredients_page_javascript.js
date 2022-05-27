window.onload = function() {populateTable()};


function readTxtFileAsArray(file){
    s = "Olive oil\nAll purpose flour\nButter\nChicken\nSugar\nSalt\nEgg\nRice\nVegetable oil\n Pork\nBeef\nCheese\nGarlic\nOrange\nTurkey\nOnion\nCorn\nWhole milk\nMayonnaise\nChiles\nAlmonds\nBacon\nMushrooms\nCoconut\nBeets\nStrawberries\nFennel\nLamb\nApple\nShrimp\nAlmonds\nBacon\nMushrooms\nCoconut\nBeets\nStrawberries\nFennel\nLamb\nApple\nShrimp"
    const array = s.split("\n")
    return array;
}

function populateTable() {

    file = "food_ingredient_list.txt"
    const ingredientArray = readTxtFileAsArray(file)


    let k = 0
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 4; j++){
            if(k==30)
            {
                break
            }
            var row = document.getElementById("imgTable").rows[i]
            var td = row.insertCell(-1);

            var divContainer = document.createElement("div");
            var buttonContainer = document.createElement('button')
            buttonContainer.className = "buttonContainer"
            buttonID = "button" + k
            buttonContainer.id = buttonID

            //buttonContainer.onclick = ingredientButtonClick()

            divContainer.className = "imgTableTDcontainer"

            td.className = "imgTableTD"

            k = k + 1
            var figure = document.createElement("figure")
            var img = new Image();
            img.src = "static/Assets/Food_Ingredient_Pictures/"+k+".jpg"
            // img.src = "{{ url_for('static', filename='Assets/logo_greyscale.png') }}"

            img.className = 'ingredientImg'


            var figureText = document.createElement("figurecaption")
            //divText.className = "tdCenter"
            const ingredientName = ingredientArray[k-1]
            //figureText.innerHTML = ingredientName//"testText"
            buttonContainer.innerHTML = ingredientName

            buttonContainer.onclick = function (event) {
                ingredientButtonClick(this.id, ingredientName);
            };

            //buttonContainer.appendChild(divText)
            figure.appendChild(img)
            figure.appendChild(figureText)
            buttonContainer.appendChild(figure)
            divContainer.appendChild(buttonContainer);
            //buttonContainer.appendChild(figureText)
            td.appendChild(divContainer)
        }
    }
}

const ingredientSet = new Set();
const allergenSet = new Set();
const timerSet = new Set();
const timerButtonID_set = [15, 30, 45, 60, 75]

function ingredientButtonClick(buttonID, ingredientName){
    //a = ingredientSet.size
    if(ingredientSet.has(ingredientName)) {
        ingredientSet.delete(ingredientName);
        document.getElementById(buttonID).style.backgroundColor = "transparent"
    }
    else {
        ingredientSet.add(ingredientName)
        document.getElementById(buttonID).style.backgroundColor = "#b4edb4"
    }
    console.log(ingredientSet)
}

function allergenClick(allergenName){
    if(allergenSet.has(allergenName)){
        allergenSet.delete(allergenName);
    }
    else{
        allergenSet.add(allergenName);
    }
    console.log(allergenSet);
}

function timerClick(buttonID, timerVal){
    if(timerSet.size > 0){
        timerSet.clear();

        for(let i = 0; i < timerButtonID_set.length; i++){
            temp_buttonID = "timerButton" + timerButtonID_set[i]
            document.getElementById(temp_buttonID).style.backgroundColor = "transparent"
        }
    }

    document.getElementById(buttonID).style.backgroundColor = "#b4edb4"

    if (timerVal == 75){
        timerSet.add(Number.MAX_SAFE_INTEGER);
    }
    else{
        timerSet.add(timerVal)
    }
    console.log(timerSet);
}

function submitButtonClick(){
    fetch('http://localhost:5000/delete_ingredients?')
    .then((response) => {
        return response.json();
    })

    const ingredients = ingredientSet.values();
    for (i = 0; i < ingredientSet.size; i++){
        fetch('http://localhost:5000/get_ingredients?ingredient='+ingredients.next().value)
        .then((response) => {
            return response.json();
        })
    }

    const allergies = allergenSet.values();
    for (i = 0; i < allergenSet.size; i++){
        fetch('http://localhost:5000/get_allergens?allergen='+allergies.next().value)
        .then((response => {
            return response.json();
        }))
    }

    const timers = timerSet.values();
    for (i = 0; i < timerSet.size; i++){
        fetch('http://localhost:5000/get_timers?time='+timers.next().value)
        .then((response => {
            return response.json();
        }))
    }

    fetch('http://localhost:5000/query_database?')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        //Just a check to make sure it works, this doesnt need to be here
        var ex = JSON.stringify(myJson.result)
        console.log("Current recipes: " + ex);

        // Use myJson.result for display purposes
    })

    window.location.href = "http://localhost:5000/recipe_page";
}