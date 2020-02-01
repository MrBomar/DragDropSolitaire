let testFunction = () => {
    return false;
}

let cards = ["crap"];

let test = cards.find(crd => crd == "face");

if(test){
    console.log ("True");
} else {
    console.log("False");
}