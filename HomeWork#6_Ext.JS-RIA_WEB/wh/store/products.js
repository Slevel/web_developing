Ext.define('wh.store.Products', {
    extend: 'Ext.data.Store',
    model: 'wh.model.Product',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/products.json',
            update: 'data/updateProducts.json'
        },
        reader: {
            type: 'json',
            rootProperty: 'products',
            successProperty: 'success'
        }
    }
});