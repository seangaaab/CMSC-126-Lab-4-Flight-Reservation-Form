// Javascript File for html: Flight Reservation


// Function for showing/hiding forms
function next(a) {
    // if next is inserted with a specific integer, it will hide a specific form and show another one
    if (a == 1) {
        document.getElementById("form1").style.display = "none";
        document.getElementById("form2").style.display = "block";
    }
    if (a == 2) {
        document.getElementById("myModal").style.display = "flex";
    }
    if (a == 3) {
        document.getElementById("form2").style.display = "none";
        document.getElementById("myModal").style.display = "none";
        document.getElementById("form3").style.display = "block";
    }
}

// Same goes for the back function
function back(a) {
    if (a == 1) {
        document.getElementById("form1").style.display = "block";
        document.getElementById("form2").style.display = "none";
        document.getElementById("form3").style.display = "none";
    }
}

// gets the input from all textboxes and displays it
function reserve() {
    // get input
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let bday = getBday();
    let gender = document.getElementById("gender").value;
    let street = document.getElementById("street").value;
    let city = document.getElementById("city").value;
    let province = document.getElementById("province").value;
    let postal = document.getElementById("postal").value;
    let country = document.getElementById("country").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let fare = document.getElementById("fare").value;
    let ticket_class = document.getElementById("ticket_class").value;
    let depart_from = document.getElementById("city_from").value;
    let destination = document.getElementById("city_destination").value;
    let depart_date = getDepDay();
    let return_date = getRetDay();
    let airlines = document.getElementById("airlines").value;

    // if inputs are null or not filled up
    if (fname == null || fname == "", lname == null || lname == "", bday == null || bday == "", gender == null || gender == "", street == null || street == "", city == null || city == "", province == null || province == "", postal == null || postal == "", country == null || country == "", (email == null || email == "") || (validateEmail(email) == false), contact == null || contact == "", fare == null || fare == "", ticket_class == null || ticket_class == "", depart_from == null || depart_from == "", depart_date == null || depart_date == "", destination == null || destination == "", return_date == null || return_date == "", airlines == null || airlines == "") {
        alert("Please fill-up all fields.");
        return false;
        // if email is filled up but not valid
    } else if ((email !== null || email !== "") && (validateEmail(email)) == false) {
        alert("Please enter a valid email address");
        return false;
        // if depart date is filled up but not valid
    } else if ((depart_date !== null || depart_date !== "") && (checkdate() == false)) {
        alert("Depart date must be later than the current time.\nReturn date must also be sooner than depart date.")
        return false;
        // if inputed cities is filled up but not valid
    } else if ((depart_from !== null || depart_from !== "") && (destination !== null || destination !== "") && (checkCity() == false)) {
        alert("Please input available cities only.\nCity of departure and destination must not be the same.");
        document.getElementById("city_from").value = "";
        document.getElementById("city_destination").value = "";
        return false;
        // if airline is filled up but not valid
    } else if ((airlines !== null || airlines !== "") && (checkAir() == false)) {
        alert("Please input available airlines only.");
        document.getElementById("airlines").value = "";
        return false;
    } else {
        next(2);
    }
    // full name and address is formatted 
    let fullname = fname + " " + lname;
    let address = street + ", " + city + ", " + province + " " + postal + ", " + country;

    // outputs all input
    document.getElementById("out_name").innerText = fullname;
    document.getElementById("out_bday").innerText = bday;
    document.getElementById("out_gender").innerText = gender;
    document.getElementById("out_address").innerText = address;
    document.getElementById("out_email").innerText = email;
    document.getElementById("out_number").innerText = contact;
    document.getElementById("out_fare").innerText = fare;
    document.getElementById("out_class").innerText = ticket_class;
    document.getElementById("out_depart").innerText = depart_from;
    document.getElementById("out_destination").innerText = destination;
    document.getElementById("out_dep-date").innerText = depart_date;
    document.getElementById("out_ret-date").innerText = return_date;
    document.getElementById("out_airline").innerText = airlines;
}

// When modal "x" button is pressed, it will hide the modal, and empty the value for the scanned input values and also empty the output labels
function modal_close() {
    document.getElementById("myModal").style.display = "none";
    fname = "";
    lname = "";
    bday = "";
    gender = "";
    street = "";
    city = "";
    province = "";
    postal = "";
    country = "";
    email = "";
    contact = "";
    fare = "";
    ticket_class = "";
    depart_from = "";
    destination = "";
    depart_date = "";
    return_date = "";
    airlines = "";
    fullname = "";
    address = "";

    document.getElementById("out_name").innerText = "";
    document.getElementById("out_bday").innerText = "";
    document.getElementById("out_gender").innerText = "";
    document.getElementById("out_address").innerText = "";
    document.getElementById("out_email").innerText = "";
    document.getElementById("out_number").innerText = "";
    document.getElementById("out_fare").innerText = "";
    document.getElementById("out_class").innerText = "";
    document.getElementById("out_depart").innerText = "";
    document.getElementById("out_destination").innerText = "";
    document.getElementById("out_dep-date").innerText = "";
    document.getElementById("out_ret-date").innerText = "";
    document.getElementById("out_airline").innerText = "";
}

// same as modal_close() function but also empties the input textboxes in the forms
function empty() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("bday").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("street").value = "";
    document.getElementById("city").value = "";
    document.getElementById("province").value = "";
    document.getElementById("postal").value = "";
    document.getElementById("country").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("fare").value = "";
    document.getElementById("ticket_class").value = "";
    document.getElementById("city_from").value = "";
    document.getElementById("city_destination").value = "";
    document.getElementById("depart_date").value = "";
    document.getElementById("return_date").value = "";
    document.getElementById("airlines").value = "";
    fname = "";
    lname = "";
    bday = "";
    gender = "";
    street = "";
    city = "";
    province = "";
    postal = "";
    country = "";
    email = "";
    contact = "";
    fare = "";
    ticket_class = "";
    depart_from = "";
    destination = "";
    depart_date = "";
    return_date = "";
    airlines = "";
    fullname = "";
    address = "";
    document.getElementById("return_date").style.visibility = "hidden";
    document.getElementById("return_label").style.visibility = "hidden";
    document.getElementById("out_name").innerText = "";
    document.getElementById("out_bday").innerText = "";
    document.getElementById("out_gender").innerText = "";
    document.getElementById("out_address").innerText = "";
    document.getElementById("out_email").innerText = "";
    document.getElementById("out_number").innerText = "";
    document.getElementById("out_fare").innerText = "";
    document.getElementById("out_class").innerText = "";
    document.getElementById("out_depart").innerText = "";
    document.getElementById("out_destination").innerText = "";
    document.getElementById("out_dep-date").innerText = "";
    document.getElementById("out_ret-date").innerText = "";
    document.getElementById("out_airline").innerText = "";
}

// detects if the fare is changed. if the fare is round trip, it will unhide the return date and time input box
function change_fare() {

    if (document.getElementById("fare").value == "Round-Trip") {
        document.getElementById("return_date").style.visibility = "visible";
        document.getElementById("return_label").style.visibility = "visible";
        document.getElementById("return_date_label").style.visibility = "visible";
        document.getElementById("out_ret-date").style.visibility = "visible";
    } else {
        document.getElementById("return_date").style.visibility = "hidden";
        document.getElementById("return_label").style.visibility = "hidden";
        document.getElementById("return_date_label").style.visibility = "hidden";
        document.getElementById("out_ret-date").style.visibility = "hidden";
        document.getElementById("return_date").value = "";
    }
}

// checks the date if it is valid
function checkdate() {
    let now = new Date();
    let dep = new Date(document.getElementById("depart_date").value);
    let ret = new Date(document.getElementById("return_date").value);
    // if fare is one-way and departure date is later than current time, it will re turn true
    if ((dep > now) && (ret == "Invalid Date" || ret == "") && (document.getElementById("fare").value == "One-Way")) {
        return true;
        // if fare is Round Trip and both return and departure date is later than current time and return date is later than departure date, it returns true
    } else if ((ret > now) && (dep > now) && (dep < ret)) {
        return true;
    } else {
        return false;
    }
}

// checks if inputed email is a valid email using a given pattern
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


// checks if selected cities are valid or available from the choices
function checkCity() {
    let c1 = document.getElementById("city_from").value;
    let c2 = document.getElementById("city_destination").value;
    if ((c1 == "Davao" || c1 == "Cebu" || c1 == "Manila" || c1 == "Palawan" || c1 == "Cagayan de Oro") && (c2 == "Davao" || c2 == "Cebu" || c2 == "Manila" || c2 == "Palawan" || c2 == "Cagayan de Oro") && (c1 !== c2)) {
        return true;
    } else {
        return false;
    }
}

// checks if selected airline is valid and available in choices
function checkAir() {
    let airline = document.getElementById("airlines").value;
    if (airline == "DavAir" || airline == "Cebu Pacific" || airline == "Manila Express" || airline == "Philippine Airlines" || airline == "SpaceX") {
        return true;
    } else {
        return false;
    }
}


// gets the input from id="fare"
function getFare() {
    if (document.getElementById("fare").value = "rt") {
        return "Round-Trip";
    }
    if (document.getElementById("fare").value = "ow") {
        return "One-Way";
    }
}


// gets birthdate  and returns it in formatted form
function getBday() {
    myBday = new Date(document.getElementById("bday").value);
    let dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    let bday = myBday.toLocaleDateString('en-PH', dateOptions).split("/").reverse().join(" ");
    return bday;
}

// gets departure date and returns it in formatted form
function getDepDay() {
    let dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    depDate = new Date(document.getElementById("depart_date").value);
    let depday = depDate.toLocaleDateString('en-PH', dateOptions).split("/").reverse().join(" ");
    let deptime = depDate.toLocaleTimeString([], { timeStyle: 'short' });
    dep = depday + " — " + deptime + " " + "PHT";
    return dep;
}

// gets return date and returns it in formatted form
function getRetDay() {
    let dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    retDate = new Date(document.getElementById("return_date").value);
    let retday = retDate.toLocaleDateString('en-PH', dateOptions).split("/").reverse().join(" ");
    let rettime = retDate.toLocaleTimeString([], { timeStyle: 'short' });
    ret = retday + " — " + rettime + " " + "PHT";
    return ret;
}

// Restricts input to only numbers
function onlyNumberKey(evt) {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        alert("Only numbers are allowed!");
        return false;
    }
    return true;
}

// Restricts input to only numbers
function allLetter(evt) {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && ASCIICode < 65 && ASCIICode != 32) {
        alert("Only letters are allowed!");
        return false;
    }
    return true;
}