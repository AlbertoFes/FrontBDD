document.getElementById('searchButton').addEventListener('click', function() {
    // Obtener los valores de los campos de búsqueda
    var author = document.getElementById('author').value;
    var year = document.getElementById('year').value;
    var genre = document.getElementById('genre').value;
    var duration = document.getElementById('duration').value;
    var rating = document.getElementById('rating').value;

    // Enviar los datos utilizando AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'backend.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Manejar la respuesta del backend
            var resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ""; // Limpiar resultados anteriores
            
            var response = xhr.responseText;
            if (response === "No se encontraron resultados.") {
                resultsDiv.innerHTML = "<p>No se encontraron resultados.</p>";
            } else {
                // Crear elementos para cada resultado y agregarlos
                var results = JSON.parse(response); //el backend devuelve datos en formato JSON
                results.forEach(function(result) {
                    var resultElement = document.createElement('div');
                    resultElement.innerHTML = "<p>Título: " + result.titulo + "</p>"; // Suponiendo que el resultado tiene un campo "titulo"
                    
                    resultsDiv.appendChild(resultElement);
                });
            }
        }
    };
    xhr.send('author=' + author + '&year=' + year + '&genre=' + genre + '&duration=' + duration + '&rating=' + rating);
});
