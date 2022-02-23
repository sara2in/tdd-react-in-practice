import React from 'react';
import RecipeList from './Components/RecipeList'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isAddRecipeFormDisplayed: false,
      selectedRecipe: null,
      recipes: [],
      newRecipeName: "",
      newRecipeInstructions: ""
    }
    this.toggleRecipeInstruction = this.toggleRecipeInstruction.bind(this);
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

  toggleRecipeInstruction = (index) => {
    this.setState({selectedRecipe: index})
    console.log(this.state.isRecipeInstructionsDisplayed)
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
        <RecipeList 
        toggleRecipeInstruction={this.toggleRecipeInstruction} 
        recipes={this.state.recipes} 
        selectedRecipe={this.state.selectedRecipe}
        />:
        <p>There are no recipes to list.</p>
      }
    </div>
    )
  }
}

export default App;