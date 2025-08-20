require('ts-node/register');
const env = require("./src/test/helper/env/env.ts");
env.getEnv(process.env.bun_config_ENV || "local");

module.exports = {
    default: {
        // "Specifies the scenarios with specific tags to be executed bun test --TAGS="@k""|| "@Smoke"
        tags: process.env.TAGS || "@Smoke",
        //"Specifies the format of Step definitions generated if not present"
        formatOptions: {
            snippetInterface: "async-await"
        },
        //"Specifies the file paths for the feature files"
        paths: [
            "src/test/feature/",
            "src/test/pactumJS/features/"
        ],
        //"Specifies the file paths for the .step and .page files"
        require: [
            "src/test/steps/*.ts",
            "src/test/pages/*.ts",
            "src/test/pactumJS/steps/*.ts",
            "src/test/pactumJS/pages/*.ts"
        ],
        //"Specifies the format of the output report"
        format: [
            "cucumber-console-formatter",
            "html:test-results/cucumber-html.html",
            "json:test-results/cucumber-json.json",
            "rerun:@rerun.txt"
        ],
        //"Suppresses verbose output during test execution"
        // publishQuiet: true,
        //"Checks the features have valid step definitions without executing them"
        dryRun: false,
        //"This is a specific option within the cucumber.js file that instructs Cucumber to use ts-node to register your TypeScript step definitions and hooks before running your tests"
        requireModule: [
            "ts-node/register"
        ],
        //"Treats undefined and pending steps as error"
        strict: true,
        parallel: 1,
        monochrome: true
    },
    //"Config for re running the failed Scenarios"
    rerun: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        format: [
            "cucumber-console-formatter",
            "html:test-results/cucumber-html.html",
            "json:test-results/cucumber-json.json",
            "rerun:@rerun.txt"
        ],
        publishQuiet: true,
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/test/pages/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        use: {
            headless: false,
            viewport: {
                width: 1280,
                height: 720
            }
        },
        strict: true,
        parallel: 1
    }
}