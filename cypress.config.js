const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { readFileSync } = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      preprocessor.addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));

      allureWriter(on, config);

      // // Attach video to Allure report after each spec
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          const videoPath = results.video;
          // Read the video file and attach it to Allure
          const videoContent = readFileSync(videoPath);
          cy.allure().fileAttachment('Test Video', videoContent, 'video/mp4');
        }
      });

      return config;

    },
    env: {
      allureResultsPath: "allure-results",
      allureReuseAfterSpec: true,
      allure: true
    },
    screenshotOnRunFailure: true,

    video: true,
    videoCompression: false, // Disable compression for faster video creation
    videoUploadOnPasses: true, // Enable video creation even for passing tests

    specPattern: [
      "**/*.feature",
    ],
    baseUrl: "https://opensource-demo.orangehrmlive.com",
  },
})