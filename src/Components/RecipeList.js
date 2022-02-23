export default function RecipeList (props) {
    const recipeList = props.recipes.map(recipe => {       
        return (
          <li onClick={props.toggleRecipeInstruction}>
            {recipe.name}
            {
                props.isRecipeInstructionsDisplayed
                ?<p>{recipe.instructions}</p> : <></>
            }
            
          </li>
        )
      })
    
    return <ul>{recipeList}</ul>
}