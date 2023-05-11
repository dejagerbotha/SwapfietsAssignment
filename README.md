# SwapfietsAssignment

The assessment is split-up into two folders:
- Task3_APICollection
- Task4_FeAutomation

## Task3_APICollection

Please download and import the Swapfiets collection directly into Postman. 

The API requests can be executed manually, however please use the Postman "Collection Runner". The Collection Runner enables you to run a collection's requests in a specified sequence. It logs your request test results and can use scripts to pass data between requests and alter the request workflow. The scripts have been setup in such a way that during executions, collections variables, will be set and unset until the scripts completes. 

Please click [here](https://learning.postman.com/docs/collections/running-collections/intro-to-collection-runs/) for more information on the Postman Collection Runner.


## Task4_FeAutomation

### Requirements

- NodeJS installed (v14.x, v16.x or 18.x and above)
- IDE of choice (I am using VSCode)

### Instructions

- Using the terminal navigate the root folder "Task4_FeAutomation"
- Run `npm i` to download Cypress dependencies
- Run the following command: `npm run cypress:open`
- A Cypress modal should pop-up
- Click on the E2E Testing frame
- Select a browser and click "Start E2E Testing in *browser of choice*
- A localhost browser should open, click on the *spec.cy.js* to run the test.
- Tests should execute automatically
- To stop the run, press Ctrl + C in the terminal window and then Y + Enter.

### Additional Information

The test script (spec.cy.js) can be viewed under the root directory (Task4_FeAutomation)/cypress/e2e. Feel free to play around with the test script, as soon as updates are saved, the script will execute in the browser created in the instructions section.
