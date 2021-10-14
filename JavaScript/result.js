function contact_link_validition() {
    const nav = document.getElementById('result_click').style.display = 'block';
}

function student_link_validition() {
    const nav = document.getElementById('student_click').style.display = 'block';
}

function staff_link_validition() {
    const nav = document.getElementById('staff_click').style.display = 'block';
}

function validition() {
    const gmail5 = document.getElementById("your_id");
    const gmail2 = document.getElementById("classes");
    const gmail3 = document.getElementById("comments");
    if (gmail5.value == "") {
        const eiir = document.getElementById('alert_id').style.display = 'block';
	

    } 
	
	else if (gmail2.value == "") {
        const eiirs = document.getElementById('alert_class').style.display = 'block';
		console.log(eiir);
    } else if (gmail3.value == "") {
        const eiirss = document.getElementById('alert_comment').style.display = 'block';
    } else {}
}