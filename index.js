var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'test/report/cucumber_report.json',
    output: 'test/report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version": "0.1.0",
        "Automation Framework Version": "0.1.0",
        "Test Environment": "TEST"
    },
    name: 'REST API TEST AUTOMATION',
};

reporter.generate(options);
