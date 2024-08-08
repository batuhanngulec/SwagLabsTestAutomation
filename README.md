# Swag Labs Cypress Test Automation 

This project is an automated testing framework created using Cypress for e-commerce sites. It tests various functionalities and user interactions on both mobile and desktop browsers.

## Project Overview

This project includes four main testing categories:

- **Login Action Tests:**: Validates successful and unsuccessful login attempts on both mobile and desktop views.
- **Product UI Tests:**: Checks the product listing UI, sorting functionality, and product details.
- **Cart Action Tests:**: Verifies adding products to the cart, viewing cart details, and checking product information in the cart on both mobile and desktop views.
- **Purchase Tests:**: Tests the complete purchase process, including checkout and verification of the order details.

### Helper Functions

`helper.js` provides reusable functions:
- `login(username, password)`: Logs in with provided credentials.
- `homePageCartUiTest()`: Checks UI elements on the homepage.
- `productDetailUiTest(productName)`: Checks product details on the product page.
- `checkoutStepOne(username, surname, zipcode)`: Fills out the first step of the checkout process.

### Configuration

- **Service Workers:** Service workers are unregistered before each test to ensure a clean test environment.
- URL: `https://www.saucedemo.com`
For browser testing, this project utilizes:

- Mobile Viewport: `cy.viewport('iphone-x')`
- Desktop Viewport: `cy.viewport('macbook-15')`


## Test Case Examples

Each test file includes a variety of test cases:
- **`tc-01-login.cy.js`**:
  - Success and failure login scenarios for both mobile and desktop views.
- **`tc-02-product-ui.cy.js`**:
  - Product UI checks, including sorting by price (low to high and high to low).
- **`tc-03-add-to-cart.cy.js`**:
  - Adding products to the cart and verifying cart details on both mobile and desktop views.
- **`tc-04-make-purchase.cy.js`**:
  - Completing a purchase process and verifying order details.

## Getting Started

### Requirements
- Node.js
- Cypress
- Cypress XPath Plugin

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/batuhanngulec/SwagLabsTestAutomation.git
    ```
2. Navigate to the project directory:
    ```bash
    cd MobileUiTest
    ```
3. Install the project dependencies:
    ```bash
    npm install
    ```

    If Cypress is not already listed in your `package.json`, add it by running:
    ```bash
    npm install cypress --save-dev
    ```
4. **Install Cypress XPath Plugin**:
    To use XPath selectors, you need to install the Cypress XPath plugin:
    ```bash
    npm install cypress-xpath --save-dev
    ```

5. **Add XPath Support**:
    To enable XPath support, add the following line to your Cypress `support/index.js` file:
    ```javascript
    require('cypress-xpath');
    ```

### Running the Tests
To run the Cypress tests, use the following command:
```bash
npx cypress open