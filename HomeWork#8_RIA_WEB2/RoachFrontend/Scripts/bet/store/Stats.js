Ext.define('bet.store.Stats', {
    extend: 'Ext.data.Store',
    model: 'bet.model.UserStat',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
            read: '/Home/Stats'
        },
        reader: {
            type: 'json',
            rootProperty: 'stats',
            successProperty: 'success'
        }
    }
});