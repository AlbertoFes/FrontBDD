function enviarResena() {
    // Obtener datos del formulario
    var title = document.getElementById('title').value;
    var review = document.getElementById('review').value;
    var rating = document.querySelector('input[name="rating"]:checked').value;

    // Objeto con los datos a enviar al servidor
    var datos = {
        title: title,
        review: review,
        rating: rating
    };

    // Enviar los datos al servidor usando AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "procesar_resena.php", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Manejar la respuesta del servidor
            console.log(xhr.responseText);
            
        }
    };
    xhr.send(JSON.stringify(datos));
}
