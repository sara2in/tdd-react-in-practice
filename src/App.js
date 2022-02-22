import React from 'react';

class App extends React.Component {

  state = {
    isAddRecipeFormDisplayed: false,
    recipes: [],
    newRecipeName: "",
    newRecipeInstructions: ""
  }
  
  // handleRecipeInstructionsChange = (event) => {
  //   const value = event.target.value;
  
  //   this.setState({newRecipeInstructions: value});
  // }

  // handleRecipeNameChange = (event) => {
  //   const value = event.target.value;
  
  //   this.setState({newRecipeName: value});
  // }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
  
    this.setState({[name]: target.value});
  }

  toggleAddRecipeForm = () => {
    this.setState({isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed})
  }

  submitRecipe = (event) => {
    event.preventDefault()
    this.setState({recipes: [
        ...this.state.recipes,
        {
          name: this.state.newRecipeName,
          instructions :this.state.newRecipeInstructions
        }
      ]
    })
    this.setState( {    newRecipeName: "",
    newRecipeInstructions: ""} )
    this.toggleAddRecipeForm()
  }

  render(){
  const addNewRecipeForm = (
      <form id="recipe-form" onSubmit={this.submitRecipe} >
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text"
          id="newRecipeName"
          name="newRecipeName"
          onChange={this.handleChange}
          value={this.state.newRecipeName} />
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea id="newRecipeInstructions"
          name="newRecipeInstructions"
          placeholder="write recipe instructions here..."
          onChange={this.handleChange}
          value={this.state.newRecipeInstructions} />
        <input type="submit" />
      </form>
    )
    const recipeList = this.state.recipes.map(recipe => {
      return <li>{recipe.name}</li>
    })
    return (
      <div className="App">
      <h1 className="App-header">My Recipes</h1>
      {
        this.state.isAddRecipeFormDisplayed
        ? addNewRecipeForm
        : <button id="add-recipe" onClick={this.toggleAddRecipeForm}>Add Recipe</button>
      }
      {
        this.state.recipes.length > 0 ?
        <ul>
          { recipeList }
        </ul> :
        <p>There are no recipes to list.</p>
      }
    </div>
    )
  }
}

export default App;