const receipeImage = document.getElementById('receipeImage');
const cardTitle = document.getElementById('card-title');
const ingredentDescription = document.getElementById('card-description');
const views = document.getElementById('views');
const upVotes = document.getElementById('upvotes');
const downVotes = document.getElementById('downvotes');
let obj;
const getSpecificReceipie = (id) =>{
    const url = 'http://more-recipes-25.herokuapp.com/api/v1/recipes/' + id;

    fetch(url)
        .then((response) =>{
            return response.json();
        })
        .then((data) => {
            console.log(data.data.recipe)
            const description = data.data.recipe.description
            const recipeTitle = data.data.recipe.title;
            const img = data.data.recipe.recipeImage;
            const viewsData = data.data.recipe.views;
            const upVotesData = data.data.recipe.upvotes;
            const downVotesData = data.data.recipe.downvotes;
            receipeImage.src = img;
            cardTitle.innerHTML = recipeTitle;
            ingredentDescription.innerHTML = description
            views.innerHTML = 'views ' + viewsData;
            upVotes.innerHTML = ' upvotes ' + upVotesData;
            downVotes.innerHTML = ' downvotes ' + downVotesData;

        })
        .catch((error) => {
            console.log(error);
        });
}

getSpecificReceipie(2);