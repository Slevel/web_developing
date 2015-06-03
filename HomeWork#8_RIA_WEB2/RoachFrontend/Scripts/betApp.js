Ext.application({
    name: 'bet',
    appFolder: '/Scripts/bet',
    models: ['UserStat'],
    controllers: ['BetController'],

    autoCreateViewport: true,
    init: function () {
        console.log('init');
    },
    launch: function () {
        console.log('launch');
    }
});