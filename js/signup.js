function signup(event) {
  event.preventDefault();
  fetch('https://more-recipes-25.herokuapp.com/api/v1/users/signup', {
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
    renderAlert('displayNotification', 'none', '');
    if(response.status === 409) {
      renderAlert('displayNotification', 'block', 'email is already in use', 'red');
      setTimeout(() => renderAlert('displayNotification', 'none', ''), 5000);
      return response.json();
    }
    if(response.status === 400) {
      renderAlert('displayNotification', 'block', 'invalid credentials', 'red' )
      setTimeout(() => renderAlert('displayNotfication', 'none', ''), 5000);
      return response.json();
    }
    
  })
  .then((data) =>{
    console.log(data);
    if(data.data.status === 'Success') {
      renderAlert('displayNotification', 'block', 'You are signed in', 'white');
     window.location.href = 'recipes.html';
    }
    renderAlert('displayNotification', 'block', `${data.message}`,'white');
    
  })
  .catch((err) => {
    console.log(err);
    renderDiv('displayNotification', 'block');
  } );
}