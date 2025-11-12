async function displayRecipes() {
      try {
        const response = await fetch('https://dummyjson.com/recipes?limit=100');
        const data = await response.json();
        console.log(data); // Pour vérifier la structure

        const ul = document.getElementById('recipe-list');

        // Vérifie si le tableau existe
        if (data.recipes && data.recipes.length > 0) {
          data.recipes.forEach(recipe => {
            const li = document.createElement('li');
            li.innerHTML = `
              <strong>${recipe.name}</strong><br>
              Ingrédients: ${recipe.ingredients.join(", ")}<br>
              Instructions: ${recipe.instructions}
            `;
            ul.appendChild(li);
          });
        } else {
          ul.textContent = "No recipe found.";
        }

      } catch (error) {
        console.error("Error :", error);
      }
    }

displayRecipes();