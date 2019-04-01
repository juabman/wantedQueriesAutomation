var customCommands = {
    cancelWanted : function (data, results) {

        this
            .click('@menuSelection')
            .setValue('@warrantId', data)
            .setValue('@reason', data)
            .setValue('@date', data)
            .click('@submitButton')
            .waitForElementPresent('@assembledQuery', 5000)
            .expect.element('@assembledQuery').text.to.contain(results)
        return this
    },
}

module.exports = {
    url: 'http://localhost:3000/#/cancel',
    commands : [customCommands],
    elements: {
        start: {
            selector: '//button[text()="Open Menu"]',
            locateStrategy: 'xpath'
        },
        menuSelection: {
            selector: 'p[name="cancelOption"]'
        },
        warrantId: {
            selector: 'input[name="widInput"]'
        },
        reason: {
            selector: 'input[name="resInput"]'
        },
        date: {
            selector: 'input[type]'
        },
        submitButton: {
            selector: '#saveBtn'
        },
        assembledQuery: {
            selector: 'span[name="queryBody"]'
        },
    },
}