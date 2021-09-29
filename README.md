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
* Replace all in cypress/tsconfig.json for:
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

##Cucumber Installation and Configuration in Cypress

* Install packages `npm install --save-dev cucumber cypress-cucumber-preprocessor @types/cypress-cucumber-preprocessor @cypress/browserify-preprocessor resolve`
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

##ESlint and Prettier Installation and Configuration

* Install packages `npm install --save-dev eslint @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-plugin-angular prettier prettier-eslint eslint-config-prettier`
* Create the file in the project root `.eslintrc.json` and copy inside:
  ```
  {
    "parser": "@typescript-eslint/parser",
    "extends": [
      "plugin:angular/johnpapa",
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ],
    "parserOptions": {
      "ecmaVersion": 2020,
      "sourceType": "module"
    },
    "settings": {
      "angular": {
        "version": "detect"
      }
    },
    "root": true,
    "env": {
      "node": true,
      "jest": true
    },
    "rules": {
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off"
    },
    "ignorePatterns": ["/*.*"]
  }
  ```
* Create the file in the project root `.eslintignore` and copy inside:
  ```
  package.json
  package-lock.json
  dist
  ```
* Add in the package.json scripts: `"lint": "tsc --noEmit && eslint . --ext js,ts,json --quiet --fix"`
* Create the file in the project root `.prettierrc.json` and copy inside:
  ```
  {
    "semi": true,
    "trailingComma": "none",
    "singleQuote": true,
    "printWidth": 80,
    "tabWidth": 4
  }
  ```
###Optional:

* Configure your favorite editor or IDE to work with ESlint and Prittier
