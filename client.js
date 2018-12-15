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
    this.annualSalary = annualSalary;
    }
}; // end Employee class 

let employeeInfo = []; 
// fuction for button click actions
function click(){
    console.log('Submit click');
    inputVals();
    console.log(firstName, lastName,idNumber, jobTitle, annualSalary);
}; // end button click

//get values from input and push to array and class
function inputVals(){
firstName = $('#firstNameIn').val();
lastName = $('#lastNameIn').val();
idNumber = $('#idNumberIn').val();
jobTitle = $('#jobTitleIn').val();
annualSalary = $('#annualSalaryIn').val(); 
let employ = new Employee( firstName, lastName, idNumber, jobTitle, annualSalary);
employeeInfo.push( employ );
return employ;
}; // end inputVals 


//function to add anualSalary to got monthly costs
// function monthltCost(){
//     employeeInfo.forEach(function(e) {
//         if (userinputid == e.id) alert(e.price);
//       });
// }


