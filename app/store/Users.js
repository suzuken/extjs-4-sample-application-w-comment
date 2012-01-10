Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store', 
    //Modelがある場合にはfieldsの宣言は必要ない
    // fields: ['name', 'email'], 
    model: 'AM.model.User', 
    autoLoad: true, 

    //Storeに直書きする場合は以下のようにする
    // data: [
        // {name: 'Ed', email: 'ed@sencha.com'}, 
        // {name: 'Tommy', email: 'tommy@sencha.com'}
    // ]
    proxy: {
        type: 'ajax', 
        //data/users.jsonを読み込むためのプロキシ
        // データ元が１つの場合にはurlプロパティで設定
        // url: 'data/users.json', 

        //アクションによって異なるデータソースを指定することができる
        //読み込みはusers.jsonから行うが、更新はすべてupdateUsers.jsonに問い合わせるようになる
        api: {
            read: 'data/users.json', 
            update: 'data/updateUsers.json'
        }, 
        reader: {
            type: 'json', 
            root: 'users', 
            successProperty: 'success'
        }
    }
});
