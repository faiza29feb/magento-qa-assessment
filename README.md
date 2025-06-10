# Bamboo Card QA Automation Assessment

This repository contains my submission for the Bamboo Card Senior QA Automation Engineer assessment. It includes:

- ✅ Cypress UI automation tests
- ✅ Postman API tests
- ✅ Manual test cases
- ✅ A bonus performance test plan (based on my experience with JMeter)

---

##  Tech Stack

- Cypress – for front-end automation using Page Object Model
- Postman – for API testing
- JMeter – for performance/load test strategy
- Excel – for manual test case documentation

---

##  Folder Structure

| Folder | Contents |
|--------|----------|
| `cypress/` | UI tests using Cypress & POM |
| `postman-api-tests/` | Postman collection for Magento APIs |
| `manual-test-cases/` | 5 manual test cases in `.xlsx` |
| `performance_plan.md` | JMeter-based load test strategy (Bonus) |

---

##  How to Run the Tests

 1. UI Tests (Cypress)

```bash
npm install
npx cypress open

2. API Tests (Postman)
Open Postman
Import postman-api-tests/petstore_api_tests.postman_collection.json
Run the collection using the Collection Runner
All tests are self-validating with status codes and response assertions

3. Manual Test Cases
Open manual-test-cases/Manual_Test_Cases.xlsx
Contains 5 detailed test cases with steps, expected outcomes, and priorities

4. Performance Test Plan
See performance_plan.md for how I would approach load testing this site using Apache JMeter
I’ve included scenarios for login, search, add-to-cart, and checkout
Since I have experience with JMeter, the strategy revolves around that tool

 Final Notes

Thanks for reviewing my submission! Everything has been structured cleanly and with care to reflect real-world QA practices.
If you have any questions or feedback, I’d be happy to discuss further.

– Faiza Iqbal