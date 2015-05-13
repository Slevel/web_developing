Ext.define('wh.model.Product', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.reader.Json'
    ],

    fields: ['id',
        { name: 'name', type: 'string' },
        { name: 'surname', type: 'string' },
        { name: 'age', type: 'int' },
        { name: 'gender', type: 'string' },
        { name: 'snatch', type: 'int' },
        { name: 'clean_jerk', type: 'int' },
        { name: 'summary', type: 'int' },
    ],
    calcResult: function (snatch, clean_jerk) {
        summary = snatch * clean_jerk;
        this.set('summary', summary);
    },
    changeName: function (value) {
        this.set('name', value);
    },
    changeSurname: function (value) {
        this.set('surname', value);
    },
    changeAge: function (value) {
        this.set('age', value);
    }
});