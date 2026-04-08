function submitFeedback() {
    // 1. Capturamos los valores DENTRO de la función para obtener lo que el usuario escribió
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // 2. Asignamos los valores a los elementos de visualización
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // 3. Mostramos el contenedor de información
    document.getElementById('userInfo').style.display = 'block';

    // 4. El alert debe ir aquí para que ocurra al hacer clic
    alert('Thank you for your valuable feedback');
}

// Configuración de los eventos
const submitButton = document.getElementById('submitBtn');

// Es mejor usar addEventListener que .onclick
submitButton.addEventListener('click', submitFeedback);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});