/// <reference types="cypress" />
import { homePageElements } from '../pages/home'

const home_elements = new homePageElements()
Cypress.on('uncaught:exception', (err, runnable) => { return false })

describe('hirshlanden', () => {
    it('searches for covid | home header', () => {

      cy.visit('/')
      cy.get('#onetrust-accept-btn-handler').click()
      home_elements.searchBox()
      //cy.get('.topStage #search').type('covid')
      cy.get('.topStage #search').type('{enter}')
      cy.get('section.search-results').should('be.visible')
      
    })
  })