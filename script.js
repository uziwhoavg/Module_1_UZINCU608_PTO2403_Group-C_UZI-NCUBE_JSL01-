function validateSyntax() {
    
    
    let input = document.getElementById('petInput').value.trim();

    let petStart = "pet_";

    let validParameter = new RegExp('^'.concat(petStart, '[0-9]{4}[a-zA-Z]+$'));

    // Validation logic goes here

    let result = ''; // Placeholder for validation result


   if (validParameter.test(input)) {
    result = 'Valid Syntax';
    document.getElementById('indicator').style.backgroundColor = '#00FF00';
} else {
    result = 'Invalid Syntax';
    document.getElementById('indicator').style.backgroundColor = '#FF0000';
}

    

    document.getElementById('result').innerText = result;
}


