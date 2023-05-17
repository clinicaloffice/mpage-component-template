const fs = require("fs-extra");
const concat = require("concat");

(async function() {
    const files = [
        "./dist/mpage-component-template/runtime.js",
        "./dist/mpage-component-template/main.js",
        "./dist/mpage-component-template/polyfills.js"
    ];

    const exists = fs.exists("elements");
    
    if (exists) {
        fs.removeSync("elements");
    }

    await fs.ensureDir("elements");
    await concat(files, "elements/mpage-component-template.js");
    await fs.copyFile("./dist/mpage-component-template/styles.css", "elements/mpage-component-template.css");
})();