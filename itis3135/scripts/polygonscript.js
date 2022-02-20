function userPrompt()
{
    var sideCount = prompt("The Jade Panther requests you enter a number between 3-12 and the name of the polygon will be presented!");
    sideCount = parseFloat(sideCount);
    validateEntry(sideCount);
}

function validateEntry(_sideCount)
{
    while(isNaN(_sideCount) || Math.abs(Math.round(_sideCount)) > 12 || Math.abs(Math.round(_sideCount)) < 3)
    {
        _sideCount = prompt("VERY WRONG! Enter a number between 3-12! Try Again!");
    }

    // var count = Math.abs(Math.round(_sideCount));
    getShape(Math.abs(Math.round(_sideCount)));
}

function getShape(_count)
{
    var polygons = [
                    "Triangle",
                    "Quadrilateral",
                    "Pentagon",
                    "Hexagon",
                    "Heptagon",
                    "Octagon",
                    "Enneagon",
                    "Decagon",
                    "Hendecagon",
                    "Dodecagon",
                   ]

    document.getElementById("polygon-output").innerHTML = "A polygon with " + _count + " sides is called a " + polygons[_count - 3] +".";
}