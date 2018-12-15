console.log( 'JS' );

$(readyNow); 

function readyNow(){
    console.log( 'jQuery' );
    submitClick() ;
};

// function for button click 
function submitClick(){
    $('#submitButtonIn').on('click', click);
};

class Employee{
    constructor( firstName, lastName, idNumber, jobTitle, annualSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annulSalary = annualSalary;
    }
}; // end Employee class 

let employeeInfo = []; 
// fuction for button click actions
function click(){
    console.log('Submit click');
    inputVals();
    console.log(firstName, lastName,idNumber, jobTitle, annualSalary);
};

//get values from input 
function inputVals(){
firstName = $('#firstNameIn').val();
lastName = $('#lastNameIn').val();
idNumber = $('#idNumberIn').val();
jobTitle = $('#jobTitleIn').val();
annualSalary = $('#annualSalaryIn').val(); 
};

//function to add anualSalary to got monthly costs
function monthltCost(){
    
}


