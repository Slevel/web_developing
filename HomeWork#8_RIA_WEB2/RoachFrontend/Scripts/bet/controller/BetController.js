Ext.define('bet.controller.BetController', {
    extend: 'Ext.app.Controller',
    stores: [
        'Stats@bet.store'
    ],

    models: [
        'UserStat@bet.model'
    ],

    views: [
        'List@bet.view.stats'
    ],

    init: function () {
        console.log('init');
        this.control({
            'button#btnRefresh': {
                click: this.refreshStats
            }
        });
        this.control({
            'button#btnCheck': {
                click: this.getCheck,
            }
        });
    },

    refreshStats: function(parameters) {
        var me = this;
        me.getStore("Stats@bet.store").reload();
    },

    getCheck: function () {
        var board = Ext.ComponentQuery.query('allstats');
        var item = board[0].getSelection()[0];
        var player = item.data.user;
        var money = item.data.money;
        var date = item.data.gameDate;
        Ext.Ajax.request({
            url: '/Home/Transfer',
            method: 'POST',
            params: {
                data: Ext.encode({
                    gameDate: date,
                    user: player,
                    money: money
                })
            },
            success: function () {
                window.open('/Home/About');
            }
        });
    }
});