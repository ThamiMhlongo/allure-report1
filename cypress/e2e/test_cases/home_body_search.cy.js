/// <reference types="cypress" />
import { homePageElements } from '../pages/home'

const home_elements = new homePageElements()

describe('hirshlanden', () => {
    it('searches for covid | home body', () => {

      cy.visit('/')
      cy.get('#onetrust-accept-btn-handler').click()
      home_elements.searchBox()
      //cy.get('.topStage #search').type('covid')
      cy.get('.topStage #search').type('{enter}')
      cy.get('section.search-results').should('be.visible')
      
    })
  })