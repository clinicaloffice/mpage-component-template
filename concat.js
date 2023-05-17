const fs = require("fs-extra");
const concat = require("concat");

(async function() {
    const files = [
        "./dist/mpage-component-template/runtime.js",
        "./dist/mpage-component-template/main.js",
        "./dist/mpage-component-template/polyfills.js"
    ];

    const exists = fs.exists("cerner-component");
    
    if (exists) {
        fs.removeSync("cerner-component");
    }

    await fs.ensureDir("cerner-component");
    await concat(files, "cerner-component/mpage-component-template.js");
    await fs.copyFile("./dist/mpage-component-template/styles.css", "cerner-component/mpage-component-template.css");
})();