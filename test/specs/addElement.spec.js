const AddRemoveElementPage = require('../pageobjects/add_remove_element');

describe('Add and remove elements', () => {
    it('It should add element', async () => {
        await AddRemoveElementPage.open();

        await AddRemoveElementPage.addElement();
        await AddRemoveElementPage.addElement();
        await AddRemoveElementPage.addElement();
        
        await sleep(10000);
    });
});