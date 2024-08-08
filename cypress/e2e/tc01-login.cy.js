/// <reference types="cypress" />
import Helper from "./helper";
import { mobile, desktop, url, unregisterServiceWorkers } from './helper';

describe('Login Action Tests', () => {
    beforeEach(() => {     
        // Unregister service workers
        unregisterServiceWorkers();
    });
    const helper = new Helper();

    it('Success Mobile View Login', () => {
        cy.viewport(mobile); // For show mobile device
        cy.visit(url);
        cy.xpath("//div[@class='login_logo']").should('be.visible'); // Check Header
        helper.login("standard_user","secret_sauce");
        cy.xpath("//span[@class='title']").should('be.visible');
    });

    it('Success Desktop View Login', () => {
        cy.viewport(desktop); // For show desktop device
        cy.visit(url);
        cy.xpath("//div[@class='login_logo']").should('be.visible'); // Check Header
        helper.login("standard_user","secret_sauce");
        cy.xpath("//span[@class='title']").should('be.visible');
    });

    it('UnSuccess Desktop View Login', () => {
        cy.viewport(desktop);
        cy.visit(url);
        cy.xpath("//div[@class='login_logo']").should('be.visible'); // Check Header
        
        helper.login("standard_user","secret_sauce1"); // wrong password
        cy.xpath("//h3[@data-test='error']").should('have.text','Epic sadface: Username and password do not match any user in this service');
        cy.wait(1000)
        
        cy.xpath("//input[@id='user-name']").clear();
        cy.xpath("//input[@id='password']").clear();
        helper.login("standard_user1","secret_sauce"); // wrong username
        cy.xpath("//h3[@data-test='error']").should('have.text','Epic sadface: Username and password do not match any user in this service');

        cy.xpath("//input[@id='user-name']").clear();
        cy.xpath("//input[@id='password']").clear();

        cy.xpath("//input[@id='user-name']").type("standard_user");
        cy.xpath("//input[@id='login-button']").click();
        cy.xpath("//h3[@data-test='error']").should('have.text','Epic sadface: Password is required');
    });
});