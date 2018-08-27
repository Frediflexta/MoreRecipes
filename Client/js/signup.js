const signup = (event) => {
  event.preventDefault();
  fetch('http://more-recipes-25.herokuapp.com/api/v1/users/signup', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email: emailField.value,
      username: userNameField.value,
      password: passwordField.value,
      firstName: firstNameField.value,
      lastName: lastNameField.value
    })
  })
  .then((response) => {
    return response.json();
  })
  .then((data) =>{
    
  })
  .catch((err) => console.log(err));
}