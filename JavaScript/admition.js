function validition() {
    const gmail = document.getElementById("gmail");
    const gmail2 = document.getElementById("professions");
    const gmail3 = document.getElementById("comments");
    if (gmail.value == "") {
        const eiir = document.getElementById('alert_email').style.display = 'block';

    }
    if (gmail2.value == "") {
        const eiirs = document.getElementById('alert_profession').style.display = 'block';
    }
    if (gmail3.value == "") {
        const eiirss = document.getElementById('alert_comment').style.display = 'block';
    }
}

function contact_link_validition() {
    const nav = document.getElementById('contact_click').style.display = 'block';
}

function student_link_validition() {
    const nav = document.getElementById('student_click').style.display = 'block';
}

function staff_link_validition() {
    const nav = document.getElementById('staff_click').style.display = 'block';
}




function submit_btn() {
    const aa1 = document.getElementById("a1");
    const aa2 = document.getElementById("a2");
    const aa3 = document.getElementById("a3");
    const aa4 = document.getElementById("a4");
    const aa5 = document.getElementById("a5");
    const aa6 = document.getElementById("a6");
    const aa7 = document.getElementById("a7");
    const aa8 = document.getElementById("a8");
    const aa9 = document.getElementById("a9");
    const aa10 = document.getElementById("a10");
    const aa11 = document.getElementById("a11");

    if (aa1.value == "" || aa2.value == "" || aa3.value == "" || aa4.value == "" || aa5.value == "" || aa6.value == "" || aa7.value == "" || aa8.value == "" || aa9.value == "" || aa10.value == "" || aa11.value == "") {
        document.getElementById('alert_fulladdmisston').style.display = 'block';
        console.log('fad');
    }

}
/* || aa3.value=="" || aa4.value=="" || aa5.value=="" || aa6.value=="" || aa7.value=="" || aa8.value=="" || aa9.value=="" || aa10.value=="" || aa11.value==""      else(aa2.value==""){

	
console.log("f");
}*/