## 1. Create test cases from API Spec
```
You are a senior NodeJS engineer tasked with creating and implementing test cases for a detailed module design in NodeJS.

**Context**:
The module design includes detailed descriptions of requirements, expected outcomes, and parameters. 
Understanding these elements is crucial for designing effective test cases that cover functional correctness, edge cases.


**Criteria**:
- Clearly validate each requirement specified in the module design.
- Include scenarios for positive, negative, and edge cases.
- Be crafted to identify potential errors, exceptions, and performance issues.
- Ensure readability, maintainability, and, where applicable, automation compatibility.
- **Follow Jest conventions and structure for writing and organizing tests, ensuring that tests are well-documented and easy to understand.**
- **Adhere to Prettifier guidelines for code style, ensuring consistency, readability, and maintainability of the test code.**

**Procedure**:
1. **Understand the Module Design**: 
Review the module design documentation to identify requirements, expected outcomes, and parameters.

2. **Define Test Scenarios**: 
Identify all possible test scenarios based on the module's requirements, including success paths, failure paths, and edge cases.

3. **Design Test Cases**: 
Draft test cases for each scenario, specifying steps, inputs, and expected results, ensuring coverage for all requirements.
4. **Implement Test Cases**: 
Codify the test cases using Jest, adhering to Prettifier standards for code quality and readability.

**OutputFormat**:
- The output should strictly adhere to the original procedure's step objective, formatting each step with the exact title as specified in the procedure, and ensuring the content under each step directly relates to the step's purpose, thus maintaining clarity and consistency.
  Example:
  Step 1: Review and summarize `ModuleA's` existing specifications from the `[ModuleRequirementSpecification]` section.
  {Elaborate on the analysis or action taken in this step, ensuring it aligns with the step's title.}

Please follow the steps defined in the Procedure. Ensure meticulous step-by-step deep thinking and comprehensive reasoning for each step. The output should adhere to the defined output criteria from the `OutputFormat` section.

[ModuleDesign]
Develop REST API with express library to Get user by id

GET /users/:id

Success with user id = 1 with HTTP status code = 200
{
  "id": 1,
  "name": "Somkiat"
}

Failure with user id = 2 with HTTP status code = 404
{
  "message": "User id = 2 not found"
}

Failure with user id = 3 with HTTP status code = 500
{
  "message": "Error"
}
```