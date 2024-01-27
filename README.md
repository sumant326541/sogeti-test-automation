<img width="100" alt="Screenshot 2021-06-29 at 8 12 27 AM" src="https://user-images.githubusercontent.com/39675511/123728969-d2a87b00-d8b1-11eb-9ece-558d4021f816.png">

# sogeti-test-automation using Cypress for UI and API

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Reports](#reports)
- [CI with GitHub Action](#ci-with-github-action)
- [Screenshots](#screenshots)
- [Videos Recording](#videos-recording)


## Prerequisites

- Ensure Node.js and npm are installed on your machine.
- Use a code editor (Visual Studio Code is preferred).

## Installation

Clone the repository:

```sh
git clone https://github.com/sumant326541/sogeti-test-automation.git
```
install dependencies mentioned in package.json

```sh
npm install
```

## Running Tests
- Running-All-Tests
 : Execute tests in the Electron browser (headless) by default.

    ```js
    npm run test
    ```
- Running-UI-Tests

    ```js
    npm run uitest
    ```
    Execute UI tests in Chrome browser in headed mode.

    ```js
    npm run chrome
    ```
- Running-API-Tests

    ```js
    npm run apitest
    ```    

## Reports
- Intigrated with mocha awesome report
- An HTML report will be generated in the report folder. 
- Run the following command if the HTML report is not generated:

 ```js
npm run report
``` 
## Screenshots

Screenshots of failed steps can be found in the Cypress/screenshots folder.

## Videos Recording

Test execution screen recordings are saved in the Cypress/video folder.

## CI with GitHub Action
- The workflow is defined in .github/workflows/push.yml.
- On each push, all tests will be executed.
- Check all workflow reports  [here](https://github.com/sumant326541/sogeti-test-automation/actions)






