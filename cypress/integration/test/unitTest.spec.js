/// <reference types="cypress" />

describe('Units tests', ()=>{


    it('Should be Possible to filter and go to an unit using one argument', ()=>{
        cy.intercept('POST', ' https://www.fleury.com.br/cdn-cgi/rum?req_id=*').as('setReq')
        cy.intercept('POST', 'https://search-grp-fry-pub-y7cql2malisjawhtcy5dep5e5u.us-west-2.es.amazonaws.com/fleury*/_search')
        .as('setSearch')
        Cypress.on('uncaught:exception', (err, runnable) => {

            return false
          })
        cy.goToHomePage()
        cy.get(':nth-child(6) > .framecomponentstyle__FrameStyled-qydu6h-0 > #button-vertical-title-quick-access > .buttoncomponentstyle__ButtonContentStyled-sc-11us3l0-3 > .animationcomponentstyle__ForcedFade-sc-7lsrx1-1 > #test-vertical-icon-title').
        should('be.visible').click()
        cy.wait('@setReq')
        
        cy.get('.checkbox-selectcomponentstyle__CheckboxSelectPlaceholderStyled-sc-7ktrvg-2').click()
        cy.contains('Vacinação').click()
        cy.get('#checkoox-select-facilities > .svg-inline--fa').click()
        cy.get('#unit-cell-alphaville').should('be.visible')
        cy.get('#anchor-unit-cell-alphaville > :nth-child(1) > .sc-htpNat > .boxcomponentstyle__HboxStyled-sc-43ermp-0 > .kVNSgu > .typographycomponentstyle__H3-sc-1oox73n-3').click()
        cy.wait('@setReq')
        cy.get('.typographycomponentstyle__H1-sc-1oox73n-1').should('be.visible').should('have.text', 'Alphaville')
        
    }),

    it('Should be Possible to filter and go to an unit using two arguments',()=>{
        cy.intercept('POST', ' https://www.fleury.com.br/cdn-cgi/rum?req_id=*').as('setReq')
        cy.intercept('POST', 'https://search-grp-fry-pub-y7cql2malisjawhtcy5dep5e5u.us-west-2.es.amazonaws.com/fleury*/_search')
        .as('setSearch')
        Cypress.on('uncaught:exception', (err, runnable) => {

            return false
          })
        cy.goToHomePage()
        cy.get(':nth-child(6) > .framecomponentstyle__FrameStyled-qydu6h-0 > #button-vertical-title-quick-access > .buttoncomponentstyle__ButtonContentStyled-sc-11us3l0-3 > .animationcomponentstyle__ForcedFade-sc-7lsrx1-1 > #test-vertical-icon-title').
        should('be.visible').click()
        cy.wait('@setReq')
        
        cy.get('.checkbox-selectcomponentstyle__CheckboxSelectPlaceholderStyled-sc-7ktrvg-2').click()
        cy.contains('Vacinação').click()
        cy.contains('Próximo ao metrô').click()
        cy.get('#checkoox-select-facilities > .svg-inline--fa').click()
        cy.get('#unit-cell-paraiso').should('be.visible')
        cy.get('#anchor-unit-cell-paraiso > :nth-child(1) > .sc-htpNat > .boxcomponentstyle__HboxStyled-sc-43ermp-0 > .kVNSgu > .typographycomponentstyle__H3-sc-1oox73n-3').click()
        cy.wait('@setReq')
        cy.get('.typographycomponentstyle__H1-sc-1oox73n-1').should('be.visible').should('have.text', 'Paraíso')
        
    }),
    it('Should be Possible to filter and go to an unit using tree arguments',()=>{
      cy.intercept('POST', ' https://www.fleury.com.br/cdn-cgi/rum?req_id=*').as('setReq')
        cy.intercept('POST', 'https://search-grp-fry-pub-y7cql2malisjawhtcy5dep5e5u.us-west-2.es.amazonaws.com/fleury*/_search')
        .as('setSearch')
        Cypress.on('uncaught:exception', (err, runnable) => {

            return false
          })
        cy.goToHomePage()
        cy.get(':nth-child(6) > .framecomponentstyle__FrameStyled-qydu6h-0 > #button-vertical-title-quick-access > .buttoncomponentstyle__ButtonContentStyled-sc-11us3l0-3 > .animationcomponentstyle__ForcedFade-sc-7lsrx1-1 > #test-vertical-icon-title').
        should('be.visible').click()
        cy.wait('@setReq')
        
        cy.get('.checkbox-selectcomponentstyle__CheckboxSelectPlaceholderStyled-sc-7ktrvg-2').click()
        cy.contains('Vacinação').click()
        cy.contains('Próximo ao metrô').click()
        cy.contains('Atendimento aos domingos').click()
        cy.get('#checkoox-select-facilities > .svg-inline--fa').click()
        cy.get('#unit-cell-paraiso').should('be.visible')
        cy.get('#anchor-unit-cell-paraiso > :nth-child(1) > .sc-htpNat > .boxcomponentstyle__HboxStyled-sc-43ermp-0 > .kVNSgu > .typographycomponentstyle__H3-sc-1oox73n-3').click()
        cy.wait('@setReq')
        cy.get('.typographycomponentstyle__H1-sc-1oox73n-1').should('be.visible').should('have.text', 'Paraíso')
    })
})