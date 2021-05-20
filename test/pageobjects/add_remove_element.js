const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddRemoveElementsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnAdd () { return $('button[onclick="addElement()"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async addElement () {
        await (await this.btnAdd).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('add_remove_elements/');
    }
}

module.exports = new AddRemoveElementsPage();