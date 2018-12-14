console.log( 'JS' );

$(readyNow); 

class Employee{
    constructor( firstName, lastName, idNumber, jobTitle, annualSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annulSalary = annualSalary;
    }
}; // end Employee class 


function readyNow(){
    console.log( 'jQuery' );
    submitClick() ;
};

// function for button click 
function submitClick(){
    $('#submitButton').on('click', click);
};

// fuction for button click actions
function click(){
    console.log('Submit click');
};

