function next(a) {
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

function back(a) {
    if (a == 1) {
        document.getElementById("form1").style.display = "block";
        document.getElementById("form2").style.display = "none";
        document.getElementById("form3").style.display = "none";
    }
}

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

function reserve() {
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
    let fare = getFare();
    let ticket_class = document.getElementById("ticket_class").value;
    let depart_from = document.getElementById("city_from").value;
    let destination = document.getElementById("city_destination").value;
    let depart_date = getDepDay();
    let return_date = getRetDay();
    let airlines = document.getElementById("airlines").value;

    let fullname = fname + " " + lname;
    let address = street + ", " + city + postal + ", " + province + ", " + country;

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
    console.log(fare);
    console.log(document.getElementById("return_date").style.visibility);
    console.log(document.getElementById("return_label").style.visibility);
}

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

function change_fare() {
    if (document.getElementById("fare").value == "rt") {
        document.getElementById("return_date").style.visibility = "visible";
        document.getElementById("return_label").style.visibility = "visible";
    } else {
        document.getElementById("return_date").style.visibility = "hidden";
        document.getElementById("return_label").style.visibility = "hidden";
    }
}

function getFare() {
    if (document.getElementById("fare").value = "rt") {
        return "Round-Trip";
    }
    if (document.getElementById("fare").value = "ow") {
        return "One-Way";
    }
}

function getBday() {
    myBday = new Date(document.getElementById("bday").value);
    let dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    let bday = myBday.toLocaleDateString('en-PH', dateOptions).split("/").reverse().join(" ");
    return bday;
}

function getDepDay() {
    let dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    depDate = new Date(document.getElementById("depart_date").value);
    let depday = depDate.toLocaleDateString('en-PH', dateOptions).split("/").reverse().join(" ");
    let deptime = depDate.toLocaleTimeString([], { timeStyle: 'short' });
    dep = depday + " — " + deptime + " " + "PHT";
    return dep;
}

function getRetDay() {
    let dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    retDate = new Date(document.getElementById("return_date").value);
    let retday = retDate.toLocaleDateString('en-PH', dateOptions).split("/").reverse().join(" ");
    let rettime = retDate.toLocaleTimeString([], { timeStyle: 'short' });
    ret = retday + " — " + rettime + " " + "PHT";
    return ret;
}

function month_word(a) {
    if (a == 1) {
        return "Jan";
    }
    if (a == 2) {
        return "Feb";
    }
    if (a == 3) {
        return "Mar";
    }
    if (a == 4) {
        return "Apr";
    }
    if (a == 5) {
        return "May";
    }
    if (a == 6) {
        return "Jun";
    }
    if (a == 7) {
        return "Jul";
    }
    if (a == 8) {
        return "Aug";
    }
    if (a == 9) {
        return "Sep";
    }
    if (a == 10) {
        return "Oct";
    }
    if (a == 11) {
        return "Nov";
    }
    if (a == 12) {
        return "Dec";
    }
}

function onlyNumberKey(evt) {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        alert("Only numbers are allowed!");
        return false;
    }
    return true;
}

function allLetter(evt) {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && ASCIICode < 65 && ASCIICode != 32) {
        alert("Only letters are allowed!");
        return false;
    }
    return true;
}

function check_null() {
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
}