// JavaScript source code
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');

}

function getAge(dateString) {
    var birthdate = new Date().getTime();
    if (typeof dateString === 'undefined' || dateString === null || (String(dateString) === 'NaN')) {
        // variable is undefined or null value
        birthdate = new Date().getTime();
    }
    birthdate = new Date(dateString).getTime();
    var now = new Date().getTime();
    // now find the difference between now and the birthdate
    var n = (now - birthdate) / 1000;
    if (n < 604800) { // less than a week
        var day_n = Math.floor(n / 86400);
        if (typeof day_n === 'undefined' || day_n === null || (String(day_n) === 'NaN')) {
            // variable is undefined or null
            return '';
        } else {
            return day_n + ' day' + (day_n > 1 ? 's' : '') + ' old';
        }
    } else if (n < 2629743) { // less than a month
        var week_n = Math.floor(n / 604800);
        if (typeof week_n === 'undefined' || week_n === null || (String(week_n) === 'NaN')) {
            return '';
        } else {
            return week_n + ' week' + (week_n > 1 ? 's' : '') + ' old';
        }
    } else if (n < 31562417) { // less than 24 months
        var month_n = Math.floor(n / 2629743);
        if (typeof month_n === 'undefined' || month_n === null || (String(month_n) === 'NaN')) {
            return '';
        } else {
            return month_n + ' month' + (month_n > 1 ? 's' : '') + ' old';
        }
    } else {
        var year_n = Math.floor(n / 31556926);
        if (typeof year_n === 'undefined' || year_n === null || (String(year_n) === 'NaN')) {
            return year_n = '';
        } else {
            return year_n + ' year' + (year_n > 1 ? 's' : '') + ' old';
        }
    }
}

function getAgeVal(pid) {
    var birthdate = formatDate(document.getElementById("txtdob").value);
    var count = document.getElementById("txtdob").value.length;
    if (count == '10') {
        var age = getAge(birthdate);
        var str = age;
        var res = str.substring(0, 1);
        if (res == '-' || res == '0') {
            document.getElementById("txtdob").value = "";
            document.getElementById("txtage").value = "";
            $('#txtdob').focus();
            return false;
        } else {
            document.getElementById("txtage").value = age;
        }
    } else {
        document.getElementById("txtage").value = "";
        return false;
    }
}


function check() {
    alert("hi");
    var val = document.getElementById("country").value;
    var num = document.getElementById("output").value;
    if (val === "US") {
        var regus = /[0-9]{3}\-[0-9]{3}\-[0-9]{4}/;
        if (regus.test(num) == false) {
            alert("wrong number");
        }
        else {
            alert("it's ok");
        }
    }
    
    else if (val === "India") {
        regus1 = /^[6-9]\d{8}\d$/;
        if (regus1.test(num) == false) {
            alert("wrong number");
        }
        else {
            alert("it's ok");
        }
    }
    
}


function code() {
    var val = document.getElementById("country").value;
    var num = document.getElementById("output").value;
    if (val === "Select Country") {
        document.getElementById("output").value = "";
        
    }
    else if (val === "US") {
        document.getElementById("output").value = "+1";
        
    }
    else if (val === "India") {
        document.getElementById("output").value = "+91";
    }

}
var Email = [];
var Pass = [];
function form() {
    var fn = document.getElementById("fname").value;
    const pattern = /^[a-zA-Z ]*$/;
    var ln = document.getElementById("lname").value;
    var mn = document.getElementById("mname").value;
    var num = document.getElementById("output").value;
    var pass = document.getElementById("myInput").value;
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    var c4 = document.getElementById("c4");
    var email = document.getElementById("email").value;
    var res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var val = document.getElementById("country").value;
    var regus = /[0-9]{3}\-[0-9]{3}\-[0-9]{4}/;
    var email = document.getElementById("email").value;
    Email.push(email);
    var pass = document.getElementById("myInput").value;
    Pass.push(pass);
    document.getElementById("para").innerHTML = Email;
    document.getElementById("para1").innerHTML = Pass;

    if (fn.length < 4 || pattern.test(fn) == false) {
        document.getElementById("fname").style.borderColor = "red";
        document.getElementById("valid").style.visibility = "visible";
        return false;
    }
    else if (pattern.test(mn) == false) {
        document.getElementById("mname").style.borderColor = "red";
        document.getElementById("valid1").style.visibility = "visible";
        return false;
    }
    else if (ln.length < 4 || pattern.test(ln) == false) {
        document.getElementById("lname").style.borderColor = "red";
        document.getElementById("valid2").style.visibility = "visible";
        return false;
    }
    else if (pass.length < 6) {
        document.getElementById("myInput").style.borderColor = "red";
        return false;
    }
    else if (res.test(email) == false) {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("valid3").style.visibility = "visible";
        return false;
    }
    else if (c1.checked == false && c2.checked == false && c3.checked == false && c4.checked == false) {
        return false;
    }
    
    
    var val = document.getElementById("country").value;
    var num = document.getElementById("output").value;
    if (val === "US") {
        var regus = /[0-9]{3}\-[0-9]{3}\-[0-9]{4}/;
        if (regus.test(num) == false) {
            alert("wrong number");
        }
        else {
            alert("it's ok");
        }
    }

    else if (val === "India") {
        regus1 = /^[6-9]\d{8}\d$/;
        if (regus1.test(num) == false) {
            alert("wrong number");
        }
        else {
            alert("it's ok");
        }
    }



    const fi = document.getElementById('file');
    if (fi.files.length > 0) {
        for (const i = 0; i <= fi.files.length - 1; i++) {

            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize / 1024));
            if (file >= 50) {
                alert(
                    "File too Big, please select a file less than 50kb");
                return false;
            }
            else {
                document.getElementById('size').innerHTML = '<b>'
                    + file + '</b> KB';
            }
        }
    }


    else {
        console.log(fn + " " + mn + " " + ln);
        return true;

    }

   



}

function login() {
    alert("hii");
    var test1 = document.getElementById("email1").value;
    var test2 = document.getElementById("pass1").value;
    document.getElementById("para2").innerHTML = Email;
    document.getElementById("para3").innerHTML = Pass;
    for (i = 0; i < Email.length; i++) {
        if (test1 == Email[i] && test2 == Pass[i]) {
            alert("login succesful");
        }
        else {
            alert("Login fail");
        }
    }
}






function fun() {
    confirm("Did you want to reset the details?");
    document.getElementById("myForm").reset();
}
function myFunction() {

    var x = document.getElementById("myInput");

    if (x.type === "password") {

        x.type = "text";

    } else {

        x.type = "password";

    }

    var x = document.getElementById("myInputs");

    if (x.style.display === "none") {

        x.style.display = "block";

    } else {

        x.style.display = "none";

    }



    var x = document.getElementById("myInputss");

    if (x.style.display === "block") {

        x.style.display = "none";

    } else {

        x.style.display = "block";

    }

}