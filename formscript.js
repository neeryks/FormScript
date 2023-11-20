document.getElementById('sampleForm44').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(this);

    // Replace 'your-secret-key' with your actual secret key
    const secretKey = 'API-KEY';

    // Construct the URL with the secret key
    const apiUrl = `API`;

    // Send the POST request
    fetch(apiUrl, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the successful response from the server here
        console.log(data);

        // Display a success message to the user
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Query Submitted';
        document.body.appendChild(successMessage);

        // Add an alert message
        // alert('Form submitted successfully!');

        setTimeout(() => {
            location.reload();
        }, 100); // Refresh the page
    })
    .catch(error => {
        // Handle errors that occur during the fetch
        console.error('Error:', error);

        // Display an error message to the user
        const errorMessage = document.createElement('p');
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'An error occurred while submitting the form. Please try again later.';
        this.appendChild(errorMessage);
    });
});
