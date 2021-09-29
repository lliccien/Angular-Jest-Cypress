import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que estoy en la pagina principal del sitio', function () {
  cy.visit('/')
})

Then('se debe mostrar un titulo que contenga {string}', function (string) {
  cy.contains(string)
})
