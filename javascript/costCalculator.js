//Calculate button
let submitButton = document.querySelector('#calculateBtn');
//Clear button
let clearButton = document.querySelector('#clearBtn');
//Getting all checkboxes
let checkBoxes = document.querySelectorAll('form .location input[type="checkbox"]');

//Getting main details section
let mainDetails = [
    document.querySelector('#person'),
    document.querySelector('#day'),
];

submitButton.addEventListener('click',  () => {

    //Hide result section if it is already displayed
    displayResult(false);

    //Calculating cost if form is valid
    const isFormValid = validateForm();
    if(isFormValid){
       calculateCost();
    }
});

clearButton.addEventListener('click', () => {
    clearForm();
});

//Validating form
const validateForm = () =>{

    //Clear all previous errors
    let allPreviousErrors = document.querySelectorAll(".error-message");
    allPreviousErrors.forEach(element => {
        element.innerHTML = "";
    })

    let userInputs = 0;
    //Validating checkboxes
    for(let i = 0; i < checkBoxes.length; i++){
        if(checkBoxes[i].checked){
            userInputs += 1;
            break;
        }
    }
    if(userInputs === 0){
        let checkBoxError = document.querySelector('form .location');
        displayErrorMessage(checkBoxError, 'ⓘ Please select at least one location');
    }

    //Validating main details section	
    mainDetails.map((element, index) => {
        if(mainDetails[index].value === ''){
            displayErrorMessage(element.parentNode, 'ⓘ Please fill this field');
        }else{
            userInputs += 1;
        }
    });

    //Checking if all inputs are filled
    if(userInputs === mainDetails.length + 1){
        const errorList = document.querySelectorAll('.error-message');
        errorList.forEach((element) => {
            element.innerHTML = '';
        });
        return true;
    }
};

const displayErrorMessage = (element, message) => {
    let errorElement = element.querySelector('.error-message');
    errorElement.innerHTML = message;
};

const calculateCost = () => {

    //Checking number of checked checkboxes
    let locationCount = 0;
    for(let i = 0; i < checkBoxes.length; i++){
        if(checkBoxes[i].checked){
            locationCount += 1;
        }
    }
    const personCount = parseInt(mainDetails[0].value);
    const daysStay = parseInt(mainDetails[1].value);
    //Getting data from select tag
    const slectHotelType = document.querySelector('form #hotelType');
    let selectedOption = slectHotelType.options[slectHotelType.selectedIndex];
    const hotelType = selectedOption.value;

    //Maximum cost per person for a day
    const personCost = 90;
    //Maximum cost per day for a location
    const locationCost = 80;
    //Maximum cost per day for a hotel
    let hotelCost = 0;
    if(hotelType === '5star'){
        hotelCost = 100;
    }else if(hotelType === '4star'){
        hotelCost = 80;
    }else if(hotelType === '3star'){
        hotelCost = 50;
    }

    const total_cost = (locationCount * locationCost * daysStay) +
                            (personCount * personCost * daysStay)+ (hotelCost * personCount * daysStay);

    //Displaying result                        
    let resultCost = document.querySelector('.result-cost #cost');
    resultCost.innerHTML = `\$ ${total_cost.toFixed(2)}`;
    displayResult(true);
    scrollTo(0, (window.scrollY + 300));
};

const clearForm = () => {
    //Clearing all checkboxes
   checkBoxes.forEach((element) => {
        element.checked = false;
   });
    //Clearing all inputs
    mainDetails.map((element) => {
        element.value = '';
    });
    //Clearing result section
    displayResult(false);
};

const displayResult = (answer) => {
    let displayValue = 'none';
    //Checking answer
    answer && (displayValue = 'block');
    //Displaying or hiding result section based on answer
    let resultCost = document.querySelector('.result-cost');
    resultCost.style.display = displayValue;
};