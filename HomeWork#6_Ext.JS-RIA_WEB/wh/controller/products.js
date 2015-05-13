Ext.define('wh.controller.Products', {
    extend: 'Ext.app.Controller',

    stores: [
        'Products@wh.store'
    ],

    models: [
        'Product@wh.model'
    ],

    views: [
        'Edit@wh.view.product',
        'List@wh.view.product'
    ],

    refs: [
        {
            ref: 'productsPanel',
            selector: 'panel'
        }
    ],

    init: function () {
        this.control({
            'viewport > productlist': {
                itemdblclick: this.editProduct
            },
            'productedit button[action=save]': {
                click: this.updateProduct
            }
        });
    },

    editProduct: function (grid, record) {
        var edit = Ext.create('wh.view.product.Edit').show();

        edit.down('form').loadRecord(record);
    },

    updateProduct: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getProductsStore().sync();
    }
});