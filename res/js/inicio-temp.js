function form(event) {
    let pass = document.getElementById("username").value;
    let form = document.getElementById("form").value;
    if (pass == "profe1") {
        alert('su respuesta es correcta')
        event.preventDefault()
        document.location="teacher.view.html"
    }else{
        alert('su respuesta es incorrecta')
    }
}