import { DecisionTree } from "./libraries/decisiontree.js"

function loadSavedModel() {
    fetch("./model.json")
        .then((response) => response.json())
        .then((model) => modelLoaded(model))
}


function modelLoaded(model) {
    let decisionTree = new DecisionTree(model)
    let capshape = document.getElementById('Capshape')
    let capsurface = document.getElementById('Capsurface')
    let capcolor = document.getElementById('Capcolor')
    let odor = document.getElementById('Odor')
    let gillattachment = document.getElementById('Gillattachment')
    let gillspacing = document.getElementById('Gillspacing')

    // test om te zien of het werkt
    let mushroom = { Capshape: capshape, Capsurface: capsurface, Capcolor: capcolor, Odor: odor, Gillattachment: gillattachment, Gillspacing: gillspacing}
    let prediction = decisionTree.predict(mushroom)
    console.log("predicted " + prediction)
    if (prediction == "p") {
    document.getElementById("prediction").innerHTML = "This mushroom is poisonous."
    } else if (prediction == "e") {
    document.getElementById("prediction").innerHTML = "This mushroom is edible."
    }
}

loadSavedModel();