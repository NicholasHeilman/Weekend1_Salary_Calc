class Employee {
    constructor(firstName, lastName, idNumber, jobTitle, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    }
}; // end Employee class 

console.log('JS');
$(readyNow);

function readyNow() {
    console.log('jQuery');
    $('#submitButtonIn').on('click', click);
    // $('#employeeTable').on('click', '#deleteRowBt', deleteEmployee());
};

let employeeInfo = [];
let annualCost = 0;
var monthCost = 0;

// fuction for button click actions
function click() {
    console.log('Submit click');
    inputVals();
    employTable();
    monthlyCost();
    emptyInputIn();
}; // end button click

//get values from input and push to array and class
function inputVals() {
    firstName = $('#firstNameIn').val();
    lastName = $('#lastNameIn').val();
    idNumber = $('#idNumberIn').val();
    jobTitle = $('#jobTitleIn').val();
    annualSalary = parseFloat($('#annualSalaryIn').val());
    let employee = new Employee(firstName, lastName, idNumber, jobTitle, annualSalary);
    employeeInfo.push(employee);
    annualCost += annualSalary;
    $('#employTable').on('click', '#deleteRowBt', deleteButton);
    return employeeInfo;
}; // end inputVals 

//function to caculate monthly cost and display on DOM
function monthlyCost() {
    let monthCost = annualCost / 12;
    $('#totalCost').html('<h3>Monthly Expenses : $' + monthCost.toLocaleString() + '</h3>');
    if (monthCost >= 20000) {
        $('#totalCost').css("color", "red");
    } else {
        $('#totalCost').css("color", "black");
    };
    console.log(monthCost);
}; // end monthlyCost

// function to add employeeInfo to Table on DOM   
function employTable() {
    for (employee of employeeInfo)
        $('#employTable').empty();
// let employeeInfo = [];
    $('#employTable').append(`<tr class="tableBody">   
                                                <td>${firstName}</td> 
                                                <td>${lastName }</td> 
                                                <td>${idNumber}</td>
                                                <td>${jobTitle }</td> 
                                                <td>${annualSalary}</td> 
                                                <td><button id=deleteRowBt class=deleteRow> "Delete Row" </button></tr>`);
    // // there has to be a cleaner way to do this but it works
}; //end employTable

// delete employee row from employee table
function deleteButton() {
    // console.log(this);
    $(this).parent().parent().remove();
};// end delete

// clear inputs
function emptyInputIn() {
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}; // end clear inputs

