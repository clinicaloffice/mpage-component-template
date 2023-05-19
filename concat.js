const fs = require("fs-extra");
const concat = require("concat");

(async function() {
    const files = [
        "./dist/mpage-component-template/runtime.js",
        "./dist/mpage-component-template/main.js",
        "./dist/mpage-component-template/polyfills.js"
    ];
    await concat(files, "./dist/mpage-component-template/mpage-component-template.js");

})();