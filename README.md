# Harmonic (The BoostBPO UI)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

This project was created with Angular Universal in order to provide organic SEO support.

Projects created with Angular SSR Support requires the following considerations:
-> They have their own web container integrated based on the express framework, just need a web server like nginex to have the web container running.
-> Some modules of the browser API like the local storage needs to be wrapped, cause they're not able in a ssr env. For further details please check src/app/landing/services/token.service.ts. 
-> It's better to run the app locally in production mode before deploy it to the web, in spite of everything is going well in development configuration, to avoid deployment mistakes. 

## Main Scripts List

. dev -> run the application in development mode
. build:srr -> run the application locally in production mode
. build:ssr -> generate the production assets
. serve:ssr -> run the latest assets in production mode using angular universal

## About The API Integration

The backend integration was partially completed, just need to make sure to respect the naming conventions defined across all the services classes defined here, when developing your own API implementation. This way, you won't have to change anything in the front end to have all of this working on your site.

## About The Proxy Server For Connecting The FrontEnd To The Backend

. Proxy.conf.json: Is where the API configuration is defined, but it works in development mode only.
. API Proxy: There's an API proxy configuration in the harmonic-boost-bpo/server.ts file to connect to the web services in production.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Dependency List Recommended To Build The Rest Of the Views

Text Editor: https://openbase.com/js/ngx-quill
Drag and Drop File Chooser: https://www.npmjs.com/package/ngx-file-drop
Charts: https://valor-software.com/ng2-charts/
Google Maps Integration Tutorial: https://medium.com/@jkeung/integrating-google-maps-api-w-angular-7-e7672396ce2d

