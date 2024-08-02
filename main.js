document.addEventListener('DOMContentLoaded', () => {
    const newUserButton = document.getElementById('newUser');
    const userContainer = document.getElementById('user-container');

    function fetchRandomUser() {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                const userCard = document.createElement('div');
                userCard.className = 'user-card';
                userCard.innerHTML = `
                    <img src="${user.picture.large}" alt="User Image">
                    <h2>${user.name.first} ${user.name.last}</h2>
                    <p>${user.email}</p>
                    <p>${user.location.city}, ${user.location.country}</p>
                `;
                userContainer.appendChild(userCard);
            })
            .catch(error => console.error('Error fetching user:', error));
    }

    newUserButton.addEventListener('click', fetchRandomUser);

    // Optionally, fetch a user when the page loads
    // fetchRandomUser();
});
