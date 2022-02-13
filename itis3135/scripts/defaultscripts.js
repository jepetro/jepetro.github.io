function getResponse()
{
    let name = document.getElementById('name').value;
    let feeling = document.getElementById('feeling').value;
    document.getElementById("output").innerHTML = "The Jade Panther welcomes you, " + name + "! We're glad you are doing " + feeling +"!";
}

var today = new Date();
document.getElementById("timeanddate").innerHTML = "It is " + today.toLocaleTimeString() + " on " + today.toDateString();

function starWarsMadLib()
{
    var adjective = prompt("Enter an Adjective");
    var pluralNoun = prompt("Enter a Plural Noun");
    var noun = prompt("Enter a Noun");
    var adjective2 =  prompt("Enter an Adjective");
    var partOfTheBody = prompt("Enter a Part of the Body");
    var adjective3 = prompt("Enter an Adjective");
    var pluralNoun2 = prompt("Enter a Plural Noun");
    var partOfTheBody2 = prompt("Enter a Part of the Body");
    var adjective4 = prompt("Enter an Adjective");
    var adverb = prompt("Enter an Adverb");
    var noun2 = prompt("Enter a Noun");
    var partOfTheBodyPlural = prompt("Enter a Part of the Body(Plural)");
    var adverb2 = prompt("Enter an Adverb");

    document.getElementById("result").innerHTML = "The Force is a mystical, <strong>" + adjective + "</strong> power. As Jedi Master Obi-Wan Kenobi once said, \“The Force is an energy field, created by all living <strong>" + pluralNoun + "</strong>, that surrounds us, penetrates us, and binds the <strong>" + noun + "</strong> together.\” Using the power of the Force, a Jedi can do many <strong>" + adjective2 + "</strong> things, like using the Force to exercise <strong>" + partOfTheBody + "</strong> control over <strong>" + adjective3 + "</strong>-minded <strong>" + pluralNoun2 + "</strong>. A Jedi can also use the Force to move objects with his or her <strong>" + partOfTheBody2 + "</strong>. It doesn’t matter how <strong>" + adjective4 + "</strong> these objects are; it only matters how <strong>" + adverb + "</strong> the Jedi believes in the Force. Most importantly, the Force teaches a Jedi to rely on his or her feelings. As Obi-Wan Kenobi told his student, Luke <strong>" + noun2 + "</strong>-walker: \“Your <strong>" + partOfTheBodyPlural + "</strong> can deceive you. Don\’t trust them.\” Instead a Jedi should <strong>" + adverb2 + "</strong> trust in the Force.";
}

function weightOfPanther()
{
    var pantherWeightLbs = prompt("Enter the Panther's Weight in Lbs")
    pantherWeightLbs = parseFloat(pantherWeightLbs);
    var weightInKg = pantherWeightLbs/2.205;

    document.getElementById("result").innerHTML = "The Panther's weight in Kg is " + Math.round(weightInKg) + "Kg"; 
}

function randomPantherFact()
{
    var randomNumber = Math.round(Math.random() * (9-0) + 0);
    var facts = new Array("A panther is actually a jaguar or a leopard.","Panthers are extremely rare in nature.","Panthers have a Life Span of 12 to 15 years.","Panthers scientific names are Panthera pardus and Panthera onca.","Panthers can be found in Asia, America, and Africa.","Typical habitats for panthers are forests, swamplands, and grasslands.","Black jaguars can have either black or spotted cubs while normal jaguars can only have spotted cubs.","Panthers are only pregnant for 3 months resulting in a litter of 2 to 4 cubs.","A panther's markings are still visble through their black coat and are often called \"ghost striping\".","In ancient mythology the panther was multi-colored.");
    
    document.getElementById("result").innerHTML = facts[randomNumber];
}

function squareFootageCalc()
{
    var length = prompt("What is the length?");
    length = parseFloat(length);
    var width = prompt("What is the width?");
    width = parseFloat(width);
    var combined = length * width;
    
    document.getElementById("result").innerHTML = "The Square footage of the Enclosure: " + combined + "ft<sup>2</sup>";
}

function randomJadeFact()
{
    var randomNumber = Math.round(Math.random() * (9-0) + 0);
    var facts = new Array("There are two types of jade stones one being jadeite which is more valuable, the other being nephrite","Nephrite was regarded as the most precious stone in ancient China","Both Jade stone types can be white or colorless but can also be red, green, violet, and gray depending on the presence of other minerals.","Jade is cool to the touch and is hard to warm.","Jade can be between 141 to 570 million years old.","The largest jade boulder in the world is located in Myanmar weighing 3000 metric tons.","To confirm jade authenticity it is often struck with a hammer and if it rebounds then it is real.","The jade word is derived from the spanish piedra de ijada meaning \"stone of colic, pain in the side\".","Jade was thought to help reduce pain.","Jadeite has a hardness between 6.0 - 7.0 while nephrite has a hardness of 6.0 - 6.5.");
    
    document.getElementById("result").innerHTML = facts[randomNumber];
}