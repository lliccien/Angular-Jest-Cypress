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
* Run tests :
  ```
  ng e2e
  ng run {project-name}:cypress-open
  ng run {project-name}:cypress-run //for CI/CD
  ```

##Cucumber Installation and Configuration in Cypress
* Install packeges `npm install --save-dev cucumber cypress-cucumber-preprocessor @types/cypress-cucumber-preprocessor @cypress/browserify-preprocessor resolve`
* Change `cypress/plugins/index.ts` for `cypress/plugins/index.js`
* Copy in to `cypress/plugins/index.js`:
  ```

  const browserify = require('@cypress/browserify-preprocessor');
  const cucumber = require('cypress-cucumber-preprocessor').default;
  const resolve = require('resolve');
  
  module.exports = (on, config) => {
      const options = {
          ...browserify.defaultOptions,
      typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
  };
  
      on('file:preprocessor', cucumber(options));
  };

  ```
* Add in `cypress.json`: `"testFiles": "**/*.feature",`
* Change in `cypress.json`: `"pluginsFile": "cypress/plugins/index.ts",` to `"pluginsFile": "cypress/plugins/index.js",`

##ESlint installation and configuration
* Execute `ng add @angular-eslint/schematics`
* Run lint :
  ```
  ng lint
  ```
