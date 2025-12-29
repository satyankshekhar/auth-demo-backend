document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    fetch("http://localhost:3000/submit", {
        method: "POST",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        alert('Login successful');
    })
    .catch(err => {
        console.error(err);
        alert('Server error');
    });
});
