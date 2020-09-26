$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/com/webapp/features/login.feature");
formatter.feature({
  "name": "To test all the functionality of OrangeHRM Demo App",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "To test login feature from OrangeHRM App",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "the user launches the url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.webapp.steps.OrangeSteps.the_user_launches_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user login to the App",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.webapp.steps.OrangeSteps.the_user_login_to_the_App(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the home page \"OrangeHRM\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.webapp.steps.OrangeSteps.the_user_should_see_the_home_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To test Dashboard page present on Home",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Home"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "the user validates url of the \"\u003curl\u003e\" current page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user verifies the \"Welcome Admin\" label on it.",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url"
      ]
    },
    {
      "cells": [
        "https://opensource-demo.orangehrmlive.com/index.php/dashboard"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test Dashboard page present on Home",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Home"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "the user validates url of the \"https://opensource-demo.orangehrmlive.com/index.php/dashboard\" current page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.webapp.steps.OrangeSteps.the_user_validates_url_of_the_current_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the \"Welcome Admin\" label on it.",
  "keyword": "When "
});
formatter.match({
  "location": "com.webapp.steps.OrangeSteps.the_user_verifies_the_label_on_it(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [Welcome Admin] but found [Welcome Linda]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat com.webapp.pages.HomePage.validateWelcome(HomePage.java:31)\r\n\tat com.webapp.steps.OrangeSteps.the_user_verifies_the_label_on_it(OrangeSteps.java:59)\r\n\tat ✽.the user verifies the \"Welcome Admin\" label on it.(file:///C:/eclipse/moblie%20automation/CucumberBDDMay2020-master/./src/main/java/com/webapp/features/login.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To test labels preset in the Admin icon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "name": "the user clicks admin icon",
  "keyword": "Given "
});
formatter.match({
  "location": "com.webapp.steps.OrangeSteps.the_user_clicks_admin_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies labels on it",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.webapp.steps.OrangeSteps.the_user_verifies_labels_on_it(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: lists don\u0027t have the same size expected [6] but found [0]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:388)\r\n\tat org.testng.Assert.assertEquals(Assert.java:555)\r\n\tat org.testng.Assert.assertEquals(Assert.java:532)\r\n\tat com.webapp.steps.OrangeSteps.the_user_verifies_labels_on_it(OrangeSteps.java:73)\r\n\tat ✽.the user verifies labels on it(file:///C:/eclipse/moblie%20automation/CucumberBDDMay2020-master/./src/main/java/com/webapp/features/login.feature:23)\r\n",
  "status": "failed"
});
});