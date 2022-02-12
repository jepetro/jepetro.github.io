function getResponse()
{
    let name = document.getElementById('name').value;
    let feeling = document.getElementById('feeling').value;
    document.getElementById("output").innerHTML = "The Jade Panther welcomes you, " + name + "! We're glad you are doing " + feeling +"!";
}

var today = new Date();

var date = "It is " + today.getHours() + ":" + today.getMinutes() + " on " + today.toDateString();

document.getElementById("timeanddate").innerHTML = date;

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

    alert("The Force is a mystical, " + adjective + "power. As Jedi Master Obi-Wan Kenobi once said, \“The Force is an energy field, created by all living" + pluralNoun + ", that surrounds us, penetrates us, and binds the " + noun + "together.\” Using the power of the Force, a Jedi can do many" + adjective2 + "things, like using the Force to exercise " + partOfTheBody + "control over " + adjective3 + "-minded " + pluralNoun + ". A Jedi can also use the Force to move objects with his or her " + partOfTheBody2 + ". It doesn’t matter how " + adjective4 + "these objects are; it only matters how " + adverb + "the Jedi believes in the Force. Most importantly, the Force teaches a Jedi to rely on his or her feelings. As Obi-Wan Kenobi told his student, Luke " + noun2 + "-walker: \“Your " + partOfTheBodyPlural + "can deceive you. Don’t trust them.\” Instead a Jedi should " + adverb2 + "trust in the Force.");
}

function weightOfPanthers()
{
    var pantherWeightLbs = prompt("Enter the Panther's Weight in Lbs")
    pantherWeightLbs = parseFloat(pantherWeightLbs);
     
}