Ext.define('wh.view.product.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.productedit',

    requires: ['Ext.form.Panel'],

    title : 'Редактирование записи',
    layout: 'fit',
    autoShow: true,
    width: 280,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',

                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Имя'
                    },
                    {
                        xtype: 'textfield',
                        name : 'surname',
                        fieldLabel: 'Фамилия'
                    },
                    {
                        xtype: 'numberfield',
                        name : 'age',
                        fieldLabel: 'Возраст'
                    },
                    {
                        xtype: 'textfield',
                        name : 'gender',
                        fieldLabel: 'Пол'
                    },
                    {
                        xtype: 'numberfield',
                        name : 'snatch',
                        fieldLabel: 'Рывок'
                    },
                    {
                        xtype: 'numberfield',
                        name : 'clean_jerk',
                        fieldLabel: 'Толчок'
                    },
                    {
                        xtype: 'numberfield',
                        name : 'summary',
                        fieldLabel: 'Сумма'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Сохранить',
                action: 'save'
            },
            {
                text: 'Отмена',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});
