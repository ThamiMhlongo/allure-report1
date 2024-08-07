export class homePageElements {

    //searchBox = () => cy.get('#search_query_top')
    searchBox(){
        cy.get('.topStage #search').type('covid')
    }

}