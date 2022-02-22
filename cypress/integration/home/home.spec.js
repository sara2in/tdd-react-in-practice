describe("Home page", () => {
    beforeEach(() => {
        cy.visit('/')
      })
  it("header contains recipe heading with a message that there are no recipes", () => {
      cy.findByRole('heading').should('contain', 'My Recipes')
      cy.get('p')
        .findByText('There are no recipes to list.')
        .should('exist')
    })

  it("contains an add recipe button that when clicked opens a form", () => {
    cy.findByRole('button').click();
  
    cy.get('form')
      .findByRole('button')
      .should('exist')
  })

  it("contains a form with fields 'Recipe Name' and 'Recipe Instructions' after clicking the 'Add Recipe' button", () => {
    cy.findByRole('button').click();
    expect(cy.findByRole('textbox', {name: /Recipe name/i})).toExist()
    cy.findByRole('textbox', {name: /instructions/i}).should('exist')
  })

  it("displays a recipe name under the 'My Recipes' heading after it has been added through the 'Add Recipe' form", () => {
    const recipeName = 'Tofu Scramble Tacos';
    cy.findByRole('button').click()
    cy.findByRole('textbox', {name: /Recipe name/i}).type(recipeName)
    cy.findByRole('textbox', {name: /instructions/i}).type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")
  
    return cy.findByRole('button').click()
      .then(() => {
      expect(cy.findByRole('listitem', /tofu scramble tacos/i)).toExist();
      })   
  })

  it("adds multiple recipes", () => {
    const recipeName1 = 'Lean Pockets';
    cy.findByRole('button').click()
    cy.findByRole('textbox', {name: /Recipe name/i}).type(recipeName1)
    cy.findByRole('textbox', {name: /instructions/i}).type("place in toaster oven on 350 for 45 minutes")

    cy.findByRole('button').click()

    const recipeName2 = 'Ramen Noodles';
    cy.findByRole('button').click()
    cy.findByRole('textbox', {name: /Recipe name/i}).type(recipeName2)
    cy.findByRole('textbox', {name: /instructions/i}).type("Pour hot water in cup and let sit for 3 minutes.")
  
    return cy.findByRole('button').click()
      .then(() => {
      expect(cy.findByRole('list')).toHaveLength(2);
      //expect(cy.findByRole('listitem', /Lean Pockets/i)).toExist();
      })   
  })
})