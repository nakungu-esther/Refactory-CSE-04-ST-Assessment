function validateForm() {
    let isValid = true;

    // Full Name
    const fullName = document.getElementById("fullName").value;
    if (fullName === "") {
        document.getElementById("nameError").innerText = " invalid field.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Gender
    const gender = document.getElementById("gender").value;
    if (gender === "") {
        document.getElementById("genderError").innerText = "invalid field.";
        isValid = false;
    } else {
        document.getElementById("genderError").innerText = "";
    }

    // Date of Birth
    const dob = document.getElementById("dob").value;
    if (dob === "") {
        document.getElementById("dobError").innerText = "invalid field.";
        isValid = false;
    } else {
        document.getElementById("dobError").innerText = "";
    }

    // Nationality
    const nationality = document.getElementById("nationality").value;
    if (nationality === "") {
        document.getElementById("nationalityError").innerText = "invalid field.";
        isValid = false;
    } else {
        document.getElementById("nationalityError").innerText = "";
    }

    // Phone Number
    const phone = document.getElementById("phone").value;
    if (phone === "") {
        document.getElementById("phoneError").innerText = "Invalid field.";
        isValid = false;
    } else {
        document.getElementById("phoneError").innerText = "";
    }

    // Email Address
    const email = document.getElementById("email").value;
    if (email === "") {
        document.getElementById("emailError").innerText = "Invalid field.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Emergency Phone
    const emergencyPhone = document.getElementById("emergencyPhone").value;
    if (emergencyPhone === "") {
        document.getElementById("emergencyPhoneError").innerText = "Invalid field.";
        isValid = false;
    } else {
        document.getElementById("emergencyPhoneError").innerText = "";
    }

    // Passport Number
    const passport = document.getElementById("passport").value;
    if (passport === "") {
        document.getElementById("passportError").innerText = "Invalid field.";
        isValid = false;
    } else {
        document.getElementById("passportError").innerText = "";
    }

    // Visa Document
    const visa = document.getElementById("visa").value;
    if (visa === "") {
        document.getElementById("visaError").innerText = "Invalid field.";
        isValid = false;
    } else {
        document.getElementById("visaError").innerText = "";
    }

    //  departure
    const departure = document.getElementById("departure").value;
    if (departure === "") {
        document.getElementById("departureError").innerText = "Invalid field.";
        isValid = false;
    } else {
        document.getElementById("departureError").innerText = "";
    }

    //  destination
    const destination = document.getElementById("destination").value;
    if (destination === "") {
        document.getElementById("destinationError").innerText = "Invalid field.";
        isValid = false;
    } else {
        document.getElementById("destinationError").innerText = "";
    }



    if (isValid) {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("successMessage").innerText = "Form submitted successfully!";
    }

    return isValid; // Prevent form submission if invalid
}
