function student_alert() {
    alert("Hello! I am an alert box!");
}


function mainimage1() {
    const mainimg = document.getElementById("main_img").src = "images/New Project (1).png";
}

function mainimage2() {
    const mainimg1 = document.getElementById("main_img").src = "images/New Project (2).png";
}

function mainimage3() {
    const mainimg2 = document.getElementById("main_img").src = "images/New Project (3).png";
}

function mainimage4() {
    const mainimg3 = document.getElementById("main_img").src = "images/New Project.jpg";
}

function mainimage5() {
    const mainimg3 = document.getElementById("main_img").src = "images/New Project.png";
}

function mainimage6() {
    const mainimg3 = document.getElementById("main_img").src = "images/New Project1.png";
}
//event end
//dark mode
function dark_mode() {

    // const darkMode = document.getElementsByClassName('night').body.style.backgroundColor = 'red';
    document.body.style.backgroundColor = '#212529';

    // document.body.style.display = '#212529';
    const sun = document.getElementById("sun_light").style.display = 'block';
    const moons = document.getElementById("night_light").style.display = 'none';
    const moon1 = document.getElementById("card1").style.backgroundColor = "#2c313680";
    const moon2 = document.getElementById("card2").style.backgroundColor = "#2c313680";
    const moon3 = document.getElementById("card3").style.backgroundColor = "#2c313680";
    const moon9 = document.getElementById("total_students").style.backgroundColor = "#2c313680";
    const moon8 = document.getElementById("all_class").style.backgroundColor = "#212529";
    const moon7 = document.getElementById("student_class").style.backgroundColor = "#2c313680";
    const moon4 = document.getElementById("card1").style.color = " #6c757d";
    const moon5 = document.getElementById("card2").style.color = " #6c757d";
    const moon6 = document.getElementById("card3").style.color = " #6c757d";
    const moon10 = document.getElementById("address").style.color = " #6c757d";
    // const moon5 = document.getElementById("card2").style.backgroundColor = "#212529f2";
    // const moon56 = document.getElementById("card3").style.backgroundColor = " #212529f2";
    // document.getElementById("sun_light").innerHTML = "fas fa-sun";
    // const mainimg = document.getElementById("sun").style.display = 'none';
    // const mainimg1 = document.getElementById("night").style.display = 'none';
}
//day mode
function day_mode() {

    // const darkMode = document.getElementsByClassName('night').body.style.backgroundColor = 'red';
    document.body.style.backgroundColor = '';
    // const moon = document.getElementById("night_light").style.display = 'none';
    const sun = document.getElementById("sun_light").style.display = 'none';
    const sun2 = document.getElementById("night_light").style.display = 'block';
    // const sun = document.getElementById("night_light").style.display = 'block';
    const moon1 = document.getElementById("card1").style.backgroundColor = "";
    const moon2 = document.getElementById("card2").style.backgroundColor = "";
    const moon3 = document.getElementById("card3").style.backgroundColor = "";
    const moon9 = document.getElementById("total_students").style.backgroundColor = "";
    const moon8 = document.getElementById("all_class").style.backgroundColor = "";
    const moon7 = document.getElementById("student_class").style.backgroundColor = "";
    const moon4 = document.getElementById("card1").style.color = " ";
    const moon5 = document.getElementById("card2").style.color = " ";
    const moon6 = document.getElementById("card3").style.color = " ";
    const moon10 = document.getElementById("address").style.color = " ";

    // document.body.style.display = '#212529';
    // const mainimg = document.getElementById("sun").style.display = 'block';
    // const mainimg = document.getElementById("sun").style.display = 'none';
    // const mainimg1 = document.getElementById("night").style.display = 'none';
}