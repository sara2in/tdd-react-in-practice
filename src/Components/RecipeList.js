export default function RecipeList (props) {
    const recipeList = props.recipes.map((recipe, index) => {       
        return (
          <li key={index} onClick={e => {props.toggleRecipeInstruction(index)}}>
            {recipe.name}
            {
                (index === props.selectedRecipe)
                ?<p>{recipe.instructions}</p> : null
            }          
          </li>
        )
      })
    
    return <ul>{recipeList}</ul>
}

//