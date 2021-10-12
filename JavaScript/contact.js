function validition() {
    const gmail = document.getElementById("gmail").value;
    const gmail2 = document.getElementById("professions").value;
    const gmail3 = document.getElementById("comments").value;
    if (gmail == "") {
        const eiir = document.getElementById('alert_email').style.display = 'block';

    } else if (gmail2 == "") {
        const eiirs = document.getElementById('alert_profession').style.display = 'block';
    } else if (gmail3 == "") {
        const eiirss = document.getElementById('alert_comment').style.display = 'block';
    } else {}
}