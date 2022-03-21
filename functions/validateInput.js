
function validateInput({ name, email, phone, age, state }) {
    isValid = false;

    // Validate name, email, phone, age and state.
    if (!(name && email && phone && age && state))
        return ({ isValid, msg: "Provide name, email, phone, age and state" })
    
    // Validate Email
    if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        return ({ isValid, msg: "Enter a valid email address" })

    // Validate Phone
    if (!(phone.length === 10 && /^\d{10}$/.test(phone)))
        return ({ isValid, msg: "Enter a valid Mobile Number" })

    // If everything is valid then 
    isValid = true;
    return { isValid, msg: "Success" }

}



// Exporting Both Functions Here
module.exports = { validateInput };