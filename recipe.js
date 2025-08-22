function getRecipeDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  axios.get(`https://dummyjson.com/recipes/${id}`)
    .then((res) => {
      const recipe = res.data;
      document.querySelector("#recipeDetail").innerHTML = `
        <div class="card shadow mx-auto" style="width: 22rem;">
          <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
          <div class="card-body">
            <h5 class="card-title">${recipe.name}</h5>
            <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
          </div>
        </div>
      `;
    })
    .catch((err) => {
      console.log(err);
    });
}

getRecipeDetails();
