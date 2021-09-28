# AngularJestCypress

Create new project with angular/cli, exacuting  `ng new <nombre del proyecto>`

Jest Installation and Configuration
* `ng add @briebug/jest-schematic`

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

