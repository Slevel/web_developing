Ext.define('wh.view.product.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.productlist',
    title : 'Список спортсменов',
    store: 'Products',
    plugins: 'gridfilters',
    columns: [
        {header: 'Имя',  dataIndex: 'name',  flex: 1, filter: 'string' },
        {header: 'Фамилия', dataIndex: 'surname', flex: 1, filter: 'string' },
        {header: 'Возраст', dataIndex: 'age', flex:0.2, filter: 'number' },
        {header: 'Пол', dataIndex: 'gender', flex:0.1, filter: 'string' },
        {header: 'Рывок', dataIndex: 'snatch', flex:0.5, filter: 'number' },
        {header: 'Толчок', dataIndex: 'clean_jerk', flex:0.5, filter: 'number' },
        {header: 'Сумма', dataIndex: 'summary', flex:0.5, filter: 'number' }
    ]
});
var plugin = grid.filters;