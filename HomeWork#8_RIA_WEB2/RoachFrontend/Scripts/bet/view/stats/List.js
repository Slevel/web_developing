Ext.define('bet.view.stats.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.allstats',

    title: 'Статистика выигрышей',
    store: 'Stats',

    columns: [
        { header: 'Дата', dataIndex: 'gameDate', flex: 0.4 },
        { header: 'Игрок', dataIndex: 'user', flex: 1 },
        { header: 'Выигрыш', dataIndex: 'money', flex: 1 }
    ]
});