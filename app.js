

// This will listen for the 'submit' event when the user submits the form
document.getElementById('personalForm').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create an object to store the form data
    // Retrieve values from input fields with specific IDs
    const personalData = {
        name: document.getElementById('name').value, // Get the value of the input field with ID 'name'
        age: document.getElementById('age').value,   // Get the value of the input field with ID 'age'
        degree: document.getElementById('degree').value, // Get the value of the input field with ID 'degree'
        department: document.getElementById('department').value, // Get the value of the input field with ID 'department'
        college: document.getElementById('college').value, // Get the value of the input field with ID 'college'
    }

    // Convert the object to a JSON string for storage
    localStorage.setItem('personalData', JSON.stringify(personalData));

    // Show an alert to notify the user that their details have been saved
    alert('Personal details saved successfully');
});

// This will listen for the 'click' event when the user clicks the button
document.getElementById('printBtn').addEventListener('click', () => {
    // Convert the JSON string back into an object
    const personalData = JSON.parse(localStorage.getItem('personalData'));

    // Check if personalData exists in localStorage
    if (personalData) {
        const print = window.open('', '_blank');

        // Add HTML content to display the stored details
        print.document.write(`NAME: ${personalData.name}<br>`);
        print.document.write(`AGE: ${personalData.age}<br>`);
        print.document.write(`DEGREE: ${personalData.degree}<br>`);
        print.document.write(`DEPARTMENT :${personalData.department}<br>`);
        print.document.write(`COLLEGE: ${personalData.college}<br>`);

        // Close the document stream to finalize the content
        print.document.close();
    } else {
        // Optional: Show an alert if no personal data is found
        alert('No personal data found');
    }
});
