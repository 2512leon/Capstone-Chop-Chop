window.onload = function() {populateTable()};

// Get the button that opens the modal
//var buttonVar = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks on the button, open the modal 
// buttonVar.onclick = function() {
//  modalVar.style.display = "block";
// }

function EnableModal(modalId){
  //console.log("modal" + modalId);
  var modalVar = document.getElementById("modal" + modalId);
  modalVar.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
function SpanFuction(){
  for(let i=0; i<100; i++){
    var modalVar = document.getElementById("modal" + i);
    modalVar.style.display = "none";
  }
}

// span.onclick = function() {
//   for(let i=0; i<100; i++){
//     var modalVar = document.getElementById("modal" + i);
//     modalVar.style.display = "none";
//   }
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  for(let i=0; i<100; i++){
    var modalVar = document.getElementById("modal" + i);
    if(event.target == modalVar){
      modalVar.style.display = "none";
    }
  }
}

// function readTxtFileAsArray(){
//   const array = [];
  
//   array.push({'title': '"Skinny" Chicken Tacos', 'total_time': 35, 'ingredients': ['1 pound thinly sliced chicken breasts, cut into thin strips', '3 limes, juiced, divided', '2 teaspoons ground cumin, divided', '2 teaspoons garlic powder, divided', '2 teaspoons ground chipotle pepper, divided', '2 red bell peppers, cut into thin strips', '1 red onion, thinly sliced', '2 jalapeno peppers - stemmed, seeded, and thinly sliced', '4 multi-grain tortillas, or more to taste', '1 bunch cilantro, chopped'], 'instructions': 'Combine chicken, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a bowl; allow to marinate for 10 minutes.\nSaute red bell peppers, onion, jalapeno peppers, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a large non-stick skillet over medium-high heat until vegetables are tender yet crisp, about 5 minutes.\nTransfer chicken mixture to a separate non-stick skillet over medium-high heat; saute until chicken is no longer pink in the center, 5 to 10 minutes.\nLayer tortillas between paper towels on a microwave-safe plate; heat in microwave until warmed, 10 to 20 seconds.\nSpoon vegetables and chicken onto tortillas; top with cilantro and lime juice.', 'host': 'allrecipes.com'})
//   array.push({'title': 'Buffalo Chicken Tacos from Mission', 'total_time': 76, 'ingredients': ['8 Mission� Soft Taco Flour Tortillas', '1 cup Mission� Guacamole Flavored Dip', '1 pound skinless boneless chicken breasts', '3 tablespoons cayenne pepper hot sauce', 'Non-stick cooking spray to coat', '1 green bell pepper, cut into thin strips', '� red onion, cut into thin strips', '� cup cilantro leaves', '12 baby carrots, rinsed', '12 celery sticks', '1 cup prepared blue cheese dressing'], 'instructions': 'Pre-heat charcoal or indoor grill to medium-high heat.\nPlace cleaned chicken breasts into a gallon-size zipper storage bag, add hot sauce and toss; close and refrigerate for 30 minutes.\nAfter 30 minutes remove chicken from refrigerator. Spray each side of the marinated chicken with non-stick cooking spray; place on pre-heated grill and cook for 8 minutes per side or until cooked through. Place cooked chicken onto your work surface and allow to cool for a few minutes. Slice each chicken breast into thin strips cutting across the breast.\nWarm Mission� Tortillas. Evenly spread 1 tablespoon of Mission� Guacamole Flavored Dip edge to edge.\nLay 5-6 slices of chicken across the middle of each tortilla, top chicken with 5 strips of green bell pepper, red onion and a tablespoon of cilantro leaves.\nStarting at the bottom roll tortilla forward to form a cylinder, repeat process for remaining tortillas.\nServe a portion of tacos (two tacos) with 3 baby carrots, 3 celery sticks and a 1/4 cup of blue cheese dressing in a small ramekin.', 'host': 'allrecipes.com'})
//   array.push({'title': '"Skinny" Chicken Tacos', 'total_time': 40, 'ingredients': ['1 pound thinly sliced chicken breasts, cut into thin strips', '3 limes, juiced, divided', '2 teaspoons ground cumin, divided', '2 teaspoons garlic powder, divided', '2 teaspoons ground chipotle pepper, divided', '2 red bell peppers, cut into thin strips', '1 red onion, thinly sliced', '2 jalapeno peppers - stemmed, seeded, and thinly sliced', '4 multi-grain tortillas, or more to taste', '1 bunch cilantro, chopped'], 'instructions': 'Combine chicken, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a bowl; allow to marinate for 10 minutes.\nSaute red bell peppers, onion, jalapeno peppers, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a large non-stick skillet over medium-high heat until vegetables are tender yet crisp, about 5 minutes.\nTransfer chicken mixture to a separate non-stick skillet over medium-high heat; saute until chicken is no longer pink in the center, 5 to 10 minutes.\nLayer tortillas between paper towels on a microwave-safe plate; heat in microwave until warmed, 10 to 20 seconds.\nSpoon vegetables and chicken onto tortillas; top with cilantro and lime juice.', 'host': 'allrecipes.com'})
//   array.push({'title': '"Skinny" Chicken Tacos', 'total_time': 45, 'ingredients': ['1 pound thinly sliced chicken breasts, cut into thin strips', '3 limes, juiced, divided', '2 teaspoons ground cumin, divided', '2 teaspoons garlic powder, divided', '2 teaspoons ground chipotle pepper, divided', '2 red bell peppers, cut into thin strips', '1 red onion, thinly sliced', '2 jalapeno peppers - stemmed, seeded, and thinly sliced', '4 multi-grain tortillas, or more to taste', '1 bunch cilantro, chopped'], 'instructions': 'Combine chicken, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a bowl; allow to marinate for 10 minutes.\nSaute red bell peppers, onion, jalapeno peppers, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a large non-stick skillet over medium-high heat until vegetables are tender yet crisp, about 5 minutes.\nTransfer chicken mixture to a separate non-stick skillet over medium-high heat; saute until chicken is no longer pink in the center, 5 to 10 minutes.\nLayer tortillas between paper towels on a microwave-safe plate; heat in microwave until warmed, 10 to 20 seconds.\nSpoon vegetables and chicken onto tortillas; top with cilantro and lime juice.', 'host': 'allrecipes.com'})
//   array.push({'title': '"Skinny" Chicken Tacos', 'total_time': 50, 'ingredients': ['1 pound thinly sliced chicken breasts, cut into thin strips', '3 limes, juiced, divided', '2 teaspoons ground cumin, divided', '2 teaspoons garlic powder, divided', '2 teaspoons ground chipotle pepper, divided', '2 red bell peppers, cut into thin strips', '1 red onion, thinly sliced', '2 jalapeno peppers - stemmed, seeded, and thinly sliced', '4 multi-grain tortillas, or more to taste', '1 bunch cilantro, chopped'], 'instructions': 'Combine chicken, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a bowl; allow to marinate for 10 minutes.\nSaute red bell peppers, onion, jalapeno peppers, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a large non-stick skillet over medium-high heat until vegetables are tender yet crisp, about 5 minutes.\nTransfer chicken mixture to a separate non-stick skillet over medium-high heat; saute until chicken is no longer pink in the center, 5 to 10 minutes.\nLayer tortillas between paper towels on a microwave-safe plate; heat in microwave until warmed, 10 to 20 seconds.\nSpoon vegetables and chicken onto tortillas; top with cilantro and lime juice.', 'host': 'allrecipes.com'})
//   array.push({'title': '"Skinny" Chicken Tacos', 'total_time': 55, 'ingredients': ['1 pound thinly sliced chicken breasts, cut into thin strips', '3 limes, juiced, divided', '2 teaspoons ground cumin, divided', '2 teaspoons garlic powder, divided', '2 teaspoons ground chipotle pepper, divided', '2 red bell peppers, cut into thin strips', '1 red onion, thinly sliced', '2 jalapeno peppers - stemmed, seeded, and thinly sliced', '4 multi-grain tortillas, or more to taste', '1 bunch cilantro, chopped'], 'instructions': 'Combine chicken, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a bowl; allow to marinate for 10 minutes.\nSaute red bell peppers, onion, jalapeno peppers, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a large non-stick skillet over medium-high heat until vegetables are tender yet crisp, about 5 minutes.\nTransfer chicken mixture to a separate non-stick skillet over medium-high heat; saute until chicken is no longer pink in the center, 5 to 10 minutes.\nLayer tortillas between paper towels on a microwave-safe plate; heat in microwave until warmed, 10 to 20 seconds.\nSpoon vegetables and chicken onto tortillas; top with cilantro and lime juice.', 'host': 'allrecipes.com'})
//   array.push({'title': '"Skinny" Chicken Tacos', 'total_time': 35, 'ingredients': ['1 pound thinly sliced chicken breasts, cut into thin strips', '3 limes, juiced, divided', '2 teaspoons ground cumin, divided', '2 teaspoons garlic powder, divided', '2 teaspoons ground chipotle pepper, divided', '2 red bell peppers, cut into thin strips', '1 red onion, thinly sliced', '2 jalapeno peppers - stemmed, seeded, and thinly sliced', '4 multi-grain tortillas, or more to taste', '1 bunch cilantro, chopped'], 'instructions': 'Combine chicken, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a bowl; allow to marinate for 10 minutes.\nSaute red bell peppers, onion, jalapeno peppers, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a large non-stick skillet over medium-high heat until vegetables are tender yet crisp, about 5 minutes.\nTransfer chicken mixture to a separate non-stick skillet over medium-high heat; saute until chicken is no longer pink in the center, 5 to 10 minutes.\nLayer tortillas between paper towels on a microwave-safe plate; heat in microwave until warmed, 10 to 20 seconds.\nSpoon vegetables and chicken onto tortillas; top with cilantro and lime juice.', 'host': 'allrecipes.com'})
//   array.push({'title': '"Skinny" Chicken Tacos', 'total_time': 35, 'ingredients': ['1 pound thinly sliced chicken breasts, cut into thin strips', '3 limes, juiced, divided', '2 teaspoons ground cumin, divided', '2 teaspoons garlic powder, divided', '2 teaspoons ground chipotle pepper, divided', '2 red bell peppers, cut into thin strips', '1 red onion, thinly sliced', '2 jalapeno peppers - stemmed, seeded, and thinly sliced', '4 multi-grain tortillas, or more to taste', '1 bunch cilantro, chopped'], 'instructions': 'Combine chicken, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a bowl; allow to marinate for 10 minutes.\nSaute red bell peppers, onion, jalapeno peppers, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a large non-stick skillet over medium-high heat until vegetables are tender yet crisp, about 5 minutes.\nTransfer chicken mixture to a separate non-stick skillet over medium-high heat; saute until chicken is no longer pink in the center, 5 to 10 minutes.\nLayer tortillas between paper towels on a microwave-safe plate; heat in microwave until warmed, 10 to 20 seconds.\nSpoon vegetables and chicken onto tortillas; top with cilantro and lime juice.', 'host': 'allrecipes.com'})
//   array.push({'title': '"Skinny" Chicken Tacos', 'total_time': 35, 'ingredients': ['1 pound thinly sliced chicken breasts, cut into thin strips', '3 limes, juiced, divided', '2 teaspoons ground cumin, divided', '2 teaspoons garlic powder, divided', '2 teaspoons ground chipotle pepper, divided', '2 red bell peppers, cut into thin strips', '1 red onion, thinly sliced', '2 jalapeno peppers - stemmed, seeded, and thinly sliced', '4 multi-grain tortillas, or more to taste', '1 bunch cilantro, chopped'], 'instructions': 'Combine chicken, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a bowl; allow to marinate for 10 minutes.\nSaute red bell peppers, onion, jalapeno peppers, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a large non-stick skillet over medium-high heat until vegetables are tender yet crisp, about 5 minutes.\nTransfer chicken mixture to a separate non-stick skillet over medium-high heat; saute until chicken is no longer pink in the center, 5 to 10 minutes.\nLayer tortillas between paper towels on a microwave-safe plate; heat in microwave until warmed, 10 to 20 seconds.\nSpoon vegetables and chicken onto tortillas; top with cilantro and lime juice.', 'host': 'allrecipes.com'})
//   array.push({'title': '"Skinny" Chicken Tacos', 'total_time': 35, 'ingredients': ['1 pound thinly sliced chicken breasts, cut into thin strips', '3 limes, juiced, divided', '2 teaspoons ground cumin, divided', '2 teaspoons garlic powder, divided', '2 teaspoons ground chipotle pepper, divided', '2 red bell peppers, cut into thin strips', '1 red onion, thinly sliced', '2 jalapeno peppers - stemmed, seeded, and thinly sliced', '4 multi-grain tortillas, or more to taste', '1 bunch cilantro, chopped'], 'instructions': 'Combine chicken, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a bowl; allow to marinate for 10 minutes.\nSaute red bell peppers, onion, jalapeno peppers, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a large non-stick skillet over medium-high heat until vegetables are tender yet crisp, about 5 minutes.\nTransfer chicken mixture to a separate non-stick skillet over medium-high heat; saute until chicken is no longer pink in the center, 5 to 10 minutes.\nLayer tortillas between paper towels on a microwave-safe plate; heat in microwave until warmed, 10 to 20 seconds.\nSpoon vegetables and chicken onto tortillas; top with cilantro and lime juice.', 'host': 'allrecipes.com'})
//   array.push({'title': '"Skinny" Chicken Tacos', 'total_time': 35, 'ingredients': ['1 pound thinly sliced chicken breasts, cut into thin strips', '3 limes, juiced, divided', '2 teaspoons ground cumin, divided', '2 teaspoons garlic powder, divided', '2 teaspoons ground chipotle pepper, divided', '2 red bell peppers, cut into thin strips', '1 red onion, thinly sliced', '2 jalapeno peppers - stemmed, seeded, and thinly sliced', '4 multi-grain tortillas, or more to taste', '1 bunch cilantro, chopped'], 'instructions': 'Combine chicken, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a bowl; allow to marinate for 10 minutes.\nSaute red bell peppers, onion, jalapeno peppers, juice of 1 lime, 1 teaspoon cumin, 1 teaspoon garlic powder, and 1 teaspoon chipotle pepper in a large non-stick skillet over medium-high heat until vegetables are tender yet crisp, about 5 minutes.\nTransfer chicken mixture to a separate non-stick skillet over medium-high heat; saute until chicken is no longer pink in the center, 5 to 10 minutes.\nLayer tortillas between paper towels on a microwave-safe plate; heat in microwave until warmed, 10 to 20 seconds.\nSpoon vegetables and chicken onto tortillas; top with cilantro and lime juice.', 'host': 'allrecipes.com'})
  
//   return array;
// }

function populateTable() {
  recipeArray = []
  fetch('http://localhost:5000/get_query_results?')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    var test = myJson.result;
    recipeArray = test;

    console.log(recipeArray);
    lengthOfReturnedItems = recipeArray.length;
    console.log(lengthOfReturnedItems)
    let k = 0
    // for(let i = 0; i < 13; i++){
    //   for(let j = 0; j < 8; j++){
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 4; j++){
        if(k==lengthOfReturnedItems)
        {
            break;
        }
  
        const jsonobj = JSON.parse(JSON.stringify(recipeArray[k]))
        console.log(jsonobj)
        var row = document.getElementById("recipesTable").rows[i]
        var td = row.insertCell(-1);

        var recipesGalleryDiv = document.createElement("div");
        var recipeItemDiv = document.createElement("div");
        recipesGalleryDiv.className = "recipesGallery"
        recipeItemDiv.className = "recipeItem"

        var recipeNameheader = document.createElement("h3");
        recipeNameheader.className = "recipeName"
        recipeNameheader.innerHTML = jsonobj.title

        var buttonName = document.createElement("button");
        buttonName.className = "recipeButton"
        buttonName.innerHTML = "Read More"

        const modalName = k
        
        buttonName.onclick = function (event) {
          EnableModal(modalName);
        };

        var modalDiv = document.createElement("div");
        var modalContentDiv = document.createElement("div");
        modalDiv.className = "modal"
        modalContentDiv.className = "modalContent"
        modalDiv.id = "modal" + k

        var spanCloseVar = document.createElement("span");
        spanCloseVar.id = "close"
        spanCloseVar.innerHTML = "&times;"

        spanCloseVar.onclick = function (event) {
          SpanFuction();
        }

        var recipeHeaderModalVar = document.createElement("h1");
        recipeHeaderModalVar.className = "recipeHeaderModal"
        recipeHeaderModalVar.innerHTML = jsonobj.title

        var breakA = document.createElement("br");
        var breakB = document.createElement("br");
        var breakC = document.createElement("br");

        var recipeBodyModalVar = document.createElement("p");
        recipeBodyModalVar.className = "recipeBodyModal"
        recipeBodyModalVar.innerHTML = "<b>Time to Cook: </b>" + jsonobj.total_time + "mins"

        const tempJsonobj = JSON.stringify(jsonobj.ingredients)
        array = tempJsonobj.split(",")
        
        strIngredients = "<br>"
        for(let a = 0; a<array.length; a++){
          strIngredients = strIngredients + array[a]
        }

        strIngredients = strIngredients.replaceAll("[", "")
        strIngredients = strIngredients.replaceAll("]", "")
        strIngredients = strIngredients.replaceAll('"', "<br>")
        strIngredients = strIngredients.replaceAll("'", "<br>")
        strIngredients = strIngredients.replaceAll('�', " ")  

        var recipeBodyModalAVar = document.createElement("p");
        recipeBodyModalAVar.className = "recipeBodyModalA"
        recipeBodyModalAVar.innerHTML = "<b>Ingredients: </b>" + strIngredients

        const tempJsonobjA = JSON.stringify(jsonobj.instructions)
        const arrayA = tempJsonobjA.split(",")
        
        strInstructions = "<br><br>"
        for(let a = 0; a<array.length; a++){
          strInstructions += arrayA[a]
        }

        strInstructions = strInstructions.replaceAll("[", "")
        strInstructions = strInstructions.replaceAll("]", "")
        strInstructions = strInstructions.replaceAll('"', "")
        strInstructions = strInstructions.replaceAll("'", "")
        strInstructions = strInstructions.replaceAll('�', " ")
        strInstructions = strInstructions.replaceAll(';', "")    
        strInstructions = strInstructions.replaceAll('.', "<br><br>");

        var recipeBodyModalBVar = document.createElement("p");
        recipeBodyModalBVar.className = "recipeBodyModalB"
        recipeBodyModalBVar.innerHTML = "<b>Instructions: </b>" + strInstructions

        modalDiv.append(modalContentDiv)
        modalContentDiv.append(spanCloseVar)
        
        modalContentDiv.append(recipeHeaderModalVar)
        modalContentDiv.append(breakC)
        modalContentDiv.append(recipeBodyModalVar)
        modalContentDiv.append(breakA)
        modalContentDiv.append(recipeBodyModalAVar)
        modalContentDiv.append(breakB)
        modalContentDiv.append(recipeBodyModalBVar)
    
        recipesGalleryDiv.append(modalDiv)
        recipeItemDiv.append(recipeNameheader)
        recipeItemDiv.append(buttonName)
        recipesGalleryDiv.append(recipeItemDiv)
        td.append(recipesGalleryDiv)

        k++;
        }
      }
  })
}

/* <div class="recipesGallery">
                    <div class="recipeItem">
                        <h3 class="recipeName">Lorem</h3>
                        <button id="btn" onclick = "EnableModal(0)">Read More</button>
                    </div>
                    </div>
                    <div class="modal" id="modal0">
                        <div class="modalContent">
                            <span id="close">&times;</span>
                            <h1 class="recipeHeaderModal">Lorem</h1> <!--Recipe Name-->
                            <img src="./ColorTransition.png" class="recipeImageModal"/>
                            <p class="recipeBodyModal">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta, itaque nam quasi ex, libero similique delectus aspernatur veritatis alias, necessitatibus sunt est! At doloremque ratione saepe obcaecati illo in.
                            </p>
                        </div>
                        
                    </div> */