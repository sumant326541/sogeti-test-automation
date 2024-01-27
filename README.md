<img width="100" alt="Screenshot 2021-06-29 at 8 12 27 AM" src="https://user-images.githubusercontent.com/39675511/123728969-d2a87b00-d8b1-11eb-9ece-558d4021f816.png">

# sogeti-test-automation with Cypress for UI and API

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Reports](#reports)
- [CI with GitHub Action](#ci-with-github-action)
- [Screenshots](#screenshots)
- [Videos Recording](#videos-recording)


## Prerequisites

- Node.js and npm installed on your machine.
- code editor (Visual Studio Code - prefered)

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
 : Electron browser (headless) by default 

    ```js
    npm run test
    ```
- Running-UI-Tests

    ```js
    npm run uitest
    ```
    Running-UI-Tests at chrome browser in headed mode

    ```js
    npm run chrome
    ```
- Running-API-Tests

    ```js
    npm run apitest
    ```    

## Reports
- intigrated with mocha awesome report
- a html report will generate in report folder 
- run below command if html report not generated

 ```js
npm run report
``` 
## Screenshots

screenshots of failed step folder: cpress/screenshots

## Videos Recording

test execution screen recrding folder: cypress/video

## CI with GitHub Action
- .github/workflows/push.yml - work flow: on each push - all test will execute
- CheckAll workflows report [here](https://github.com/sumant326541/sogeti-test-automation/actions)






