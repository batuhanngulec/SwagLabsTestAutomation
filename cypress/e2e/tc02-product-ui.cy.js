/// <reference types="cypress" />
import Helper from "./helper";
import { mobile, desktop, url, unregisterServiceWorkers } from './helper';

describe('Product Ui Tests', () => {
    beforeEach(() => {     
        // Unregister service workers
        unregisterServiceWorkers();
    });
    const helper = new Helper();

    it('Desktop Ui Tests', () => {
        cy.viewport(desktop); 
        cy.visit(url);
        cy.xpath("//div[@class='login_logo']").should('be.visible'); // Check Header
        helper.login("standard_user","secret_sauce");
        helper.homePageCartUiTest();
    });

    it('Mobile Ui Tests', () => {
        cy.viewport(mobile); 
        cy.visit(url);
        cy.xpath("//div[@class='login_logo']").should('be.visible'); // Check Header
        helper.login("standard_user","secret_sauce");
        helper.homePageCartUiTest();
    });

    it('Sorts products by price low to high', () => {
        cy.viewport(desktop); 
        cy.visit(url);
        helper.login("standard_user","secret_sauce");

        // Select "Price (low to high)" 
        cy.get('.product_sort_container').select('Price (low to high)');

        // Get Product Prices and Create Array
        cy.get('.inventory_item_price').then($prices => {
            const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')));

            // Check Price list 
            const sortedPrices = [...prices].sort((a, b) => a - b);
            expect(prices).to.deep.equal(sortedPrices);
        }); 
    });

    it('Sorts products by price high to low', () => {
        cy.viewport(desktop); 
        cy.visit(url);
        helper.login("standard_user","secret_sauce");

        // Select "Price (high to low)"
        cy.get('.product_sort_container').select('Price (high to low)');

        // Get Product Prices and Create Array
        cy.get('.inventory_item_price').then($prices => {
            const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')));

            // Check Price list 
            const sortedPrices = [...prices].sort((a, b) => b - a);
            expect(prices).to.deep.equal(sortedPrices);
        });
    });

});