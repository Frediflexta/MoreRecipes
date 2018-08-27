const getSpecificReceipie = (id) =>{
    const url = 'http://more-recipes-25.herokuapp.com/api/v1/recipes/' + id;

    fetch(url)
        .then((response) =>{
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

getSpecificReceipie(1);