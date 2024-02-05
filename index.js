function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(response => response.json())
        .then(data => {
            // Assuming there's an element with id 'userId' in the DOM
            document.getElementById('userId').textContent = data.id;
        })
        .catch(error => {
            // Assuming there's an element with id 'errorDisplay' in the DOM
            document.getElementById('errorDisplay').textContent = error.message;
        });
}
