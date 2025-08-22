function loadRecipes() {
  const cardContainer = document.querySelector("#recipeCards");

  axios.get("https://dummyjson.com/recipes?limit=3")
    .then((res) => {
      const recipes = res.data.recipes;

      recipes.forEach((recipe) => {
        const card = document.createElement("div");
        card.className = "card shadow";

        card.innerHTML = `
          <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
          <div class="card-body text-center">
            <h5 class="card-title">${recipe.name}</h5>
            <button class="btn btn-primary view-btn" data-id="${recipe.id}">View Recipe</button>
          </div>
        `;

        cardContainer.appendChild(card);
      });

      // Callback for View Recipe buttons
      document.querySelectorAll(".view-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          const id = this.getAttribute("data-id");
          viewRecipe(id);
        });
      });

    })
    .catch((err) => {
      console.log(err);
    });
}

function viewRecipe(id) {
  window.location.href = `recipe.html?id=${id}`;
}

// Reviews Section
const reviewForm = document.querySelector("#reviewForm");
const reviewName = document.querySelector("#reviewName");
const reviewText = document.querySelector("#reviewText");
const reviewsList = document.querySelector("#reviewsList");

reviewForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = reviewName.value.trim();
  const review = reviewText.value.trim();
  if (name && review) {
    const reviewDiv = document.createElement("div");
    reviewDiv.className = "review-item";
    reviewDiv.innerHTML = `<strong>${name}</strong><p>${review}</p>`;
    reviewsList.appendChild(reviewDiv);
    reviewName.value = "";
    reviewText.value = "";
  }
});

loadRecipes();
