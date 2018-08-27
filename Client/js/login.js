const userLogin = () => {
    fetch('https://more-recipes-25.herokuapp.com/api/v1/users/signin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                username: '',
                password: ''
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

        })
        .catch((error) => {
            console.log(error);
        })
}

userLogin();