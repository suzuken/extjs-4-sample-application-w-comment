Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller', 

    stores: ['Users'], 
    models: ['User'], 

    //user.Listを自動的に読み込むように設定
    views: ['user.List', 'user.Edit'],

    init: function(){
        console.log('initialized users!');
        this.control({
            // userlistに対してイベントリスナーを設定
            'viewport > userlist': {
                itemdblclick: this.editUser
            }, 
            // usereditのaction = saveのボタンについてイベントリスナーを設定
            'useredit button[action = save]': {
                click: this.updateUser
            }
        });
    }, 

    //panelのrenderイベントに対するリスナー
    onPanelRendered: function(){
        console.log('The panel was rendered.');
    }, 

    editUser: function(grid, record){
        console.log('Doble clicked on ' + record.get('name'));
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
    }, 

    updateUser: function(button){
        console.log('clicked the Save button');

        var win = button.up('window'), //Edit User Windowへのリファレンス
        form = win.down('form'), //windowの１つ下の階層にあるformへのリファレンス
        record = form.getRecord(), 
        values = form.getValues();

        record.set(values);
        win.close();
        this.getUsersStore().sync();
    }
});
