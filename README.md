# Clinical Office:MPage Edition Project Template

This template has been designed to get you up and running with a new Clinical Office MPage
with as little effort as possible.

This template will support any version of Angular 15 or higher and is to be used only
in projects where the Microsoft Edge WebView controller is used as this project will not
render in Internet Explorer.

This template is recommended if your MPage project will always be rendered in Edge
as all legacy Internet Explorer requirements have been removed resulting in reduced package
sizes, removal of polyfills and improved performance.

>**A Valid Clinical Office:MPage Edition license is required to use this template.
> If you do not have your development computer configured with your license key
> this template will not compile.**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically
reload if you change any of the source files.

Angular Proxy services are enabled by default and can be configured by modifying the
proxy.conf.json file in the src folder. The Angular Proxy gives you the ability to
develop your MPage in **real-time** giving you the ability to change your code and
see real results from Cerner without re-compiling.

Execute **1co_show_service_dir** with Discern Visual Developer in your Cerner development
environment and replace the "target" value with the cclproxy value returned from the CCL script.

```JavaScript
{
  "/cclproxy/*": {
    "target": "http://sub_domain.host_name.com",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug",
    "pathRewrite": {
      "^/cclproxy": ""
    }
  }
}
```
>Please note that Angular Proxy services requires that your development machine be
> running on a PC/Mac that is able to access Discern MPage web services.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

##The following third party packages have been included with this release
* Angular Material/CDK (https://material.angular.io)
* Luxon (https://moment.github.io/luxon/)
* Angular Material Luxon Date Adapter (https://www.npmjs.com/package/@angular/material-luxon-adapter)
* Fast Sort (https://www.npmjs.com/package/fast-sort)

##Additional Information
In addition to the above libraries, this template also takes care of the following steps
normally required to initiate an MPage.

* index.html file contains all required Cerner references and setup (meta tags, fonts, etc.)
* Required polyfills are included and app.module.ts contains all required references to installed libraries.
* Material Moment Date adapter settings are configured in app.module.ts (Please change date settings to your site standards if required. Currently set as mm/dd/yyyy)
* styles.css has a basic Material theme setup which points to an external scss file called theme.scss. This
  file can be manually edited or you can use the visual editor found at https://materialtheme.arcsine.dev
  to define your own theme. Simply go to the website, change the theme settings to your site requirements, click the SCSS button
  and copy the content over the content in theme.scss.
* A basic routing configuration has been built where you can add your own routes to app-routing.module.ts. The
  useHash configuration has been enabled to allow proper route rendering within Cerner. Simply add your routes and
  include the &lt;router-outlet&gt;&lt;/router-outlet&gt; element on your page and you are all set.






# MpageTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.
