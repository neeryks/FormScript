# Form Submission with Fetch API

This JavaScript script is designed to handle the submission of a form with the id `sampleForm44` using the Fetch API. The script prevents the default form submission behavior, collects form data, and sends a POST request to a specified API endpoint. It includes handling for successful responses and errors, displaying appropriate messages to the user.

## Usage

1. **Integrate the Script:**
   - Include this script in your HTML file, preferably just before the closing `</body>` tag.
   - Replace `'API-KEY'` with your actual secret key.
   - Modify the `API` variable in `const apiUrl = 'API';` to the actual API endpoint.

    ```html
    <script>
        // Paste the provided JavaScript code here
    </script>
    </body>
    ```

2. **Customize Success Message:**
   - Update the success message content as needed in the following section:

    ```javascript
    // Handle the successful response from the server here
    console.log(data);

    // Display a success message to the user
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Query Submitted';
    document.body.appendChild(successMessage);
    ```

3. **Optional: Customize Error Handling:**
   - Customize the error handling section to suit your application's requirements.

    ```javascript
    .catch(error => {
        // Handle errors that occur during the fetch
        console.error('Error:', error);

        // Display an error message to the user
        const errorMessage = document.createElement('p');
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'An error occurred while submitting the form. Please try again later.';
        this.appendChild(errorMessage);
    });
    ```

4. **Optional: Uncomment Alert Message:**
   - If you want to show an alert message upon successful form submission, uncomment the following line:

    ```javascript
    // alert('Form submitted successfully!');
    ```

5. **Test the Form:**
   - Ensure that the form with the id `sampleForm44` exists in your HTML.
   - Trigger the form submission and observe the console for log messages.

## Notes

- This script assumes that your server API expects form data for processing.
- Make sure the API endpoint (`API` variable) is accurate and corresponds to your server.
- Customize success and error messages to provide a user-friendly experience.
- Consider securing your secret key and API endpoint in a more robust way, depending on your application's security requirements.

Feel free to adapt the script to your specific needs and integrate it with your existing project.
