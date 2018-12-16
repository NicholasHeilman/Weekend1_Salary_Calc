class Employee{
    constructor( firstName, lastName, idNumber, jobTitle, annualSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
    }
}; // end Employee class 

console.log( 'JS' );
$(readyNow); 

function readyNow(){
    console.log( 'jQuery' );
    submitClick() ;
};

// function for button click 
function submitClick(){
    $('#submitButtonIn').on('click', click);
}; // end submitClick

let employeeInfo = []; 
let annualCost = 0;
var monthCost = 0;

// fuction for button click actions
function click(){
    console.log('Submit click');
    inputVals();
    employTable();
    monthlyCost();
    emptyInputIn();
}; // end button click

//get values from input and push to array and class
function inputVals(){
    firstName = $('#firstNameIn').val();
    lastName = $('#lastNameIn').val();
    idNumber = $('#idNumberIn').val();
    jobTitle = $('#jobTitleIn').val();
    annualSalary = parseFloat($('#annualSalaryIn').val()); 
    let employee = new Employee( firstName, lastName, idNumber, jobTitle, annualSalary);
    employeeInfo.push( employee );
    annualCost += annualSalary;
    return employeeInfo;
}; // end inputVals 

//function to caculate monthly cost and display on DOM
function monthlyCost(){
    let monthCost = annualCost / 12;
    $('#totalCost').html('<p>Monthly Expenses : $' + monthCost + '</p>');
    if (monthCost >= 20000){
        $('#totalCost').css("color", "red");
    } else {
        $('#totalCost').css("color", "black");
    };
    console.log( monthCost );
    
}; // end monthktCost


// function to add employeeInfo to Table on DOM
function employTable() {
    for ( employee of employeeInfo )
    $('#employeeTable').empty();
    $('#employTable').append('<tr class="tableBody"><td>' + firstName + '</td><td>' + lastName + '</td><td>' + idNumber + '</td>4<td>' + jobTitle + '</td><td>$' + annualSalary + '</td></tr>');
}; //end employTable
// function employTable(firstName, lastName, employeeId, jobTitle, annualSalary) {
//     let row = '<tr>';
//     row += `<td>${employeeInfo.firstName}</td>`;
//     row += `<td>${lastName}</td>`;
//     row += `<td>${employeeId}</td>`;
//     row += `<td>${jobTitle}</td>`;
//     row += `<td>${annualSalary}</td>`;
//     // row += '<td><button class="delete-button">Delete</button></td>';
//     row += '</tr>'
//     $('#employTable').append(row);
// };


// clear inputs
function emptyInputIn(){
      // clear the inputs 
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
  }; // end clear inputs

  // When a 'Delete' button is pressed. Delete an employee's row (tr) from the 
// employee table.
// function deleteEmployee() {
//     $(this).parent().parent().remove();
// }