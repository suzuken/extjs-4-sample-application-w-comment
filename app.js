Ext.application({
    name: 'AM',
    //アプリケーションフォルダを指定
    appFoler: 'app',


    //コントローラを指定すると、app/controller以下に配置されたコントローラ用のファイルを自動的に読み込んできてくれる。
    controllers: ['Users'],


    launch: function(){
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {xtype: 'userlist'}
            // items: [
                // {
                    // xtype: 'panel',
                    // title: 'Users',
                    // html: 'list of users will go here'
            // }
            // ]
        });
    }
})
