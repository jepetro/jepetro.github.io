window.onload = function()
{
    document.getElementById("add-salary").onclick = addSalary;
    document.getElementById("display-results").onclick = displayResults;
    document.getElementById("display-salary").onclick = displaySalary;
    document.getElementById("employee").focus();
}

let people = [];
let salaries = []; 

function addSalary()
{
    let enteredSalary = parseFloat(document.getElementById("salary").value);
    let enteredName = document.getElementById("employee").value;

    if(enteredSalary === "")
    {
        alert("Please enter a valid salary");
        enteredSalary = "";
        document.getElementById("employee").focus();
    }
    else
    {
        enteredSalary = parseFloat(enteredSalary);
        people.push(enteredName);
        salaries.push(enteredSalary);
        document.getElementById("salary").value = "";
        document.getElementById("employee").focus();
    }
}

function displayResults()
{
    let average = 0;
    let sum = 0;

    let highestSalary = "";
    let maxNumber = 0;

    for(i = 0; i < salaries.length; i++)
    {
        sum += salaries[i];
    }
    average = sum/salaries.length;

    for(i = 0; i < salaries.length; i++)
    {
        if(salaries[i] > maxNumber)
        {
            maxNumber = salaries[i];
            highestSalary = people[i]
        }
    }

    document.getElementById("salary-results").innerHTML = "The average salary is $" + average.toFixed(2) + " and the highest salary is " + highestSalary + "'s, at $" + maxNumber.toFixed(2);
}

function displaySalary()
{
    let table = "<tr><th>Employee</th><th>Salary</th></tr>";

    for(i = 0; i < salaries.length; i++)
    {
        table += "<tr><td>" + people[i] + "</td><td>" + salaries[i] + "</td></tr>"; 
    }

    document.getElementById("results_table").innerHTML = table;
}