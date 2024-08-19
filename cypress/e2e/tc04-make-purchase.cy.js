/// <reference types="cypress" />
import Helper from "./helper";
import { mobile, desktop, url, unregisterServiceWorkers } from './helper';

describe('Make Purchase Tests', () => {
    beforeEach(() => {     
        // Unregister service workers
        unregisterServiceWorkers();
        cy.visit(url);
    });
    const helper = new Helper();
    const productName = 'Sauce Labs Backpack';
    const username = "Batuhan";
    const surname = "Gulec";
    const zipcode = "0707";

    it('Desktop - Make Purchase', () => {
        cy.viewport(desktop); 
        helper.login("standard_user","secret_sauce");
        helper.productDetailUiTest(productName);
        cy.xpath("//button[@id='add-to-cart']").click();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.xpath("//button[@id='checkout']") // for checkout
            .should('be.visible')
            .click();
        helper.checkoutStepOne(username,surname,zipcode);
        cy.xpath("//input[@id='continue']").should('be.visible').click();
        cy.xpath("//span[@class='title']").should('be.visible'); // Check Checkout 
        cy.xpath("//div[@class='inventory_item_name']").should('be.visible'); // Check Checkout Products 
        cy.xpath("//div[@class='summary_total_label']").should('be.visible'); // Check Checkout Product Price
    });

    it('Mobile - Make Purchase', () => {
        cy.viewport(mobile); 
        helper.login("standard_user","secret_sauce");
        helper.productDetailUiTest(productName);
        cy.xpath("//button[@id='add-to-cart']").click();
        cy.xpath("//a[@class='shopping_cart_link']").click();
        cy.xpath("//button[@id='checkout']") // for checkout
            .should('be.visible')
            .click();
        helper.checkoutStepOne(username,surname,zipcode);
        cy.xpath("//input[@id='continue']").should('be.visible').click();
        cy.xpath("//span[@class='title']").should('be.visible'); // Check Checkout 
        cy.xpath("//div[@class='inventory_item_name']").should('be.visible'); // Check Checkout Products 
        cy.xpath("//div[@class='summary_total_label']").should('be.visible'); // Check Checkout Product Price
    });
});