# AngularJestCypress

Create new project with angular/cli, exacuting  `ng new <nombre del proyecto>`

##Jest Installation and Configuration
* Execute `ng add @briebug/jest-schematic`

* And in jest.config.js
  `testMatch: ["<rootDir>/src/**/*.spec.ts"]`

* Change in setupJest.ts first line
  `import 'jest-preset-angular/setup-jest';`

* Remove in angular.json this lines:
  `"polyfills": "src/polyfills.ts",`
  `"inlineStyleLanguage": "scss",`

* Run tests running:
  ```
  ng test
  ng test --watch
  ng test --coverage //for coverage report in HTML
  ```

##Cypress Installation and Configuration
* Execute `ng add @cypress/schematic`
* replace all in cypress/tsconfig.json for:
  ```
  {
  "compilerOptions": {
    "strict": true,
    "baseUrl": "../node_modules",
    "target": "es5",
    "lib": ["es5", "dom"],
    "sourceMap": false,
    "types": ["cypress"],
    "typeRoots": ["./support"]
  },
  "include": ["**/*.ts"]
  }
  ```
* Run tests running:
  ```
  ng e2e
  ng run {project-name}:cypress-open
  ng run {project-name}:cypress-run //for CI/CD
  ```
