const properties = require('./nightwatch.props')
module.exports = {
  // this will be the folder where our tests are located
  "src_folders": "tests",

  // This will be the folder where our page objects are located
  "page_objects_path": "pageObjects",

  "selenium": {
    "start_process": true,
    "server_path": properties.resourcePath + properties.seleniumServer,
    "log_path": "",
    "port": 4445,
    "cli_args": {
      "webdriver.chrome.driver": properties.resourcePath + properties.chromedriver,
      "webdriver.gecko.driver": properties.resourcePath + properties.geckodriver,
      "webdriver.sarari.driver": "/usr/bin/safaridriver"
    }
  },

  "test_settings": {
    "test_workers": true,
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 4445,
      "selenium_host": "localhost",
      "silent": true,
      "screenshots": {
        "enabled": false,
        "path": ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
      }
    },

    "firefox": {
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true,
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "edge": {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    },

    "safari": {
      "desiredCapabilities": {
        "browserName": "safari"
      }
    }
  }
}  