console.log( 'JS' );
$(readyNow); 

function readyNow(){
    console.log( 'jQuery' );
    submitClick() ;
};

class Employee{
    constructor( firstName, lastName, idNumber, jobTitle, annualSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
    }
}; // end Employee class 

// function for button click 
function submitClick(){
    $('#submitButtonIn').on('click', click);
};

let employeeInfo = []; 
let annualCost = 0;

// fuction for button click actions
function click(){
    console.log('Submit click');
    inputVals();
    emptyInputIn();
    monthlyCost();
}; // end button click

//get values from input and push to array and class
function inputVals(){
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idNumberIn').val();
    let jobTitle = $('#jobTitleIn').val();
    let annualSalary = parseFloat($('#annualSalaryIn').val()); 
    let employ = new Employee( firstName, lastName, idNumber, jobTitle, annualSalary);
    employeeInfo.push( employ );
    annualCost += annualSalary;
    return employ;
}; // end inputVals 

//function to add annual salaries
function monthlyCost(){
    let monthCost = annualCost / 12;
    console.log( monthCost );
}


//function to add employeeInfo to Table on DOM
// function newEEToTable() {
//     $('.bodyEETable').empty();
//     for (employee of staff){
//         $('.bodyEETable').append('<tr class="emp"><td>' + employee.firstName + '</td><td>' + employee.lastName + '</td><td>' + employee.empID + '</td><td>' + employee.empTitle + '</td><td>$' + employee.empSalary + '</td></tr>')
//     };
// }




  function emptyInputIn(){
      // clear the inputs 
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
  };