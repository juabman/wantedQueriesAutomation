var cancel = {}
module.exports = {
    beforeEach: browser => {
        browser.url("hhttp://localhost:3000/#/cancel")
            cancel = browser.page.wantedQueries()
            cancel.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Test of Cancel Wanted': browser => {
        cancel
            .setValue('@warrantId', '0123456789')
            .setValue('@reason', 'No longer a menace to society')
            .setValue('@date', '03/31/2019')
            .click('@submitButton')
            .waitForElementPresent('@assembledQuery', 5000)
            .expect.element('@assembledQuery').text.to.contain('0123456789.No longer a menace to society.2019-03-31')
    },
}   