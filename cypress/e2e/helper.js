export const mobile = 'iphone-x';
export const desktop = 'macbook-15';
export const url = 'https://www.saucedemo.com';
export const unregisterServiceWorkers = () => {
    if (window.navigator && navigator.serviceWorker) {
        const cypressPromise = new Cypress.Promise((resolve, reject) => {
            navigator.serviceWorker.getRegistrations().then((registrations) => {
                if (!registrations.length) resolve();
                Promise.all(registrations.map(reg => reg.unregister())).then(() => {
                    resolve();
                });
            });
        });
        cy.wrap('Unregister service workers').then(() => cypressPromise);
    }
};

class Helper{
    login(username,password){
        cy.xpath("//input[@id='user-name']").type(username);
        cy.xpath("//input[@id='password']").type(password);
        cy.xpath("//input[@id='login-button']").click();
        return this;
    }

    homePageCartUiTest(){
        cy.get(".inventory_item").should('be.visible');
        cy.xpath("//div[normalize-space()='Sauce Labs Backpack']").should('be.visible'); // Check First Product Name
        cy.xpath("//div[normalize-space()='carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.']")
            .should('be.visible'); // Check First Product Description
        cy.get(".inventory_item_price").first().should('be.visible'); // Check First Product Price
        cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").should('be.visible'); // Check First Product Add to cart button
        cy.xpath("//img[@alt='Sauce Labs Backpack']").should('be.visible'); // Check First Product Img
        return this;
    }
    productDetailUiTest(productName){
        cy.xpath(`//div[normalize-space(text())='${productName}']`).click(); // Show First Product
        cy.xpath(`//img[@alt='${productName}']`).should('be.visible'); // Product detail check images
        cy.xpath("//div[@class='inventory_details_name large_size']").should('be.visible'); // Product detail check name
        cy.xpath("//div[@class='inventory_details_price']").should('be.visible'); // Product detail check price
        return this;
    }
    checkoutStepOne(username,surname,zipcode){
        cy.xpath("//input[@id='first-name']").type(username);
        cy.xpath("//input[@id='last-name']").type(surname);
        cy.xpath("//input[@id='postal-code']").type(zipcode);
        return this;
    }
}
export default Helper;