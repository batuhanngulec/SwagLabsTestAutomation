/// <reference types="cypress" />
import Helper from "./helper";
import { mobile, desktop, url, unregisterServiceWorkers } from './helper';

describe('Cart Action Tests', () => {
    beforeEach(() => {     
        // Unregister service workers
        unregisterServiceWorkers();
        cy.visit(url);
    });
    const helper = new Helper();
    const productName = 'Sauce Labs Backpack';
    
    it('Desktop - Product Detail Ui Tests', () => {
        cy.viewport(desktop); 
        cy.xpath("//div[@class='login_logo']").should('be.visible'); // Check Header
        helper.login("standard_user","secret_sauce");
        helper.homePageCartUiTest();
        helper.productDetailUiTest(productName);
    });

    it('Mobile - Product Detail Ui Tests', () => {
        cy.viewport(mobile); 
        cy.xpath("//div[@class='login_logo']").should('be.visible'); // Check Header
        helper.login("standard_user","secret_sauce");
        helper.homePageCartUiTest();
        helper.productDetailUiTest(productName);
    });

    it('Desktop - Add To Cart', () => {
        cy.viewport(desktop); 
        helper.login("standard_user","secret_sauce");
        helper.productDetailUiTest(productName);
        cy.xpath("//button[@id='add-to-cart']").click();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.url().should('include', url + '/cart.html'); // check url 
        cy.xpath("//div[@class='inventory_item_name']").should('be.visible'); // check product name 
        cy.xpath("//div[@class='inventory_item_price']").should('be.visible'); // check product price 
        cy.xpath("//button[@id='remove-sauce-labs-backpack']").should('be.visible'); // check remove item button 
        
        cy.xpath("//button[@id='checkout']") // for checkout
            .should('be.visible');
    });

    it('Mobile - Add To Cart', () => {
        cy.viewport(mobile); 
        helper.login("standard_user","secret_sauce");
        helper.productDetailUiTest(productName);
        cy.xpath("//button[@id='add-to-cart']").click();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.url().should('include', url + '/cart.html'); // check url 
        cy.xpath("//div[@class='inventory_item_name']").should('be.visible'); // check product name 
        cy.xpath("//div[@class='inventory_item_price']").should('be.visible'); // check product price 
        cy.xpath("//button[@id='remove-sauce-labs-backpack']").should('be.visible'); // check remove item button 
        
        cy.xpath("//button[@id='checkout']") // for checkout
            .should('be.visible');
    });
});