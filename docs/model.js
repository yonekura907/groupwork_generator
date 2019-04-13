;
(function(){
    // 元のオブジェクト
    let obj = {
        di: ['髙林 亮','滝川 善貴','平岡 美生'],
        d1:['植松 信輔','松島 麻衣','栗山 杏','森本 耕一','中村 美詠','中村 美月'],
        d2:['VO NHAT MINH','北野 みのり','水谷 卓','遠山 聖香','鍋野 仁美'],
        e1:['大竹 史也','北原 勝行','西田 麻惟','引田 祐樹','細井 砂太朗','松坂 淳'],
        e2:['村上 慎太朗','山下 祐矢','岩本 尚也','福岡 麻央','佐々木 沙織','須田 光紀']
    }

    let newGroupe = {
        a:[],
        b:[],
        c:[]
    };

    // コピー用のオブジェクト
    let objCopy = {};

    for (var prof in obj) {
        // console.log(prof);
        objCopy[prof] = obj[prof];
        objCopy[prof] = _.shuffle(objCopy[prof]); //シャッフル
    }
    // console.log(objCopy);

    // newGroupe に追加
    newGroupe.a.push(objCopy.di[0]);
    newGroupe.a.push(objCopy.d1[0]);
    newGroupe.a.push(objCopy.d2[0]);
    newGroupe.a.push(objCopy.e1[0]);
    newGroupe.a.push(objCopy.e2[0]);

    newGroupe.b.push(objCopy.di[1]);
    newGroupe.b.push(objCopy.d1[1]);
    newGroupe.b.push(objCopy.d2[1]);
    newGroupe.b.push(objCopy.e1[1]);
    newGroupe.b.push(objCopy.e2[1]);

    newGroupe.c.push(objCopy.di[2]);
    newGroupe.c.push(objCopy.d1[2]);
    newGroupe.c.push(objCopy.d2[2]);
    newGroupe.c.push(objCopy.e1[2]);
    newGroupe.c.push(objCopy.e2[2]);

    newGroupe.a.push(objCopy.d1[3]);
    newGroupe.a.push(objCopy.d2[3]);
    newGroupe.a.push(objCopy.e1[3]);
    newGroupe.a.push(objCopy.e2[3]);

    newGroupe.b.push(objCopy.d1[4]);
    newGroupe.b.push(objCopy.d2[4]);
    newGroupe.b.push(objCopy.e1[4]);
    newGroupe.b.push(objCopy.e2[4]);

    newGroupe.c.push(objCopy.d1[5]);
    newGroupe.c.push(objCopy.e1[5]);
    newGroupe.c.push(objCopy.e2[5]);

    // console.log('groupeA: ' + newGroupe.a );
    // console.log('groupeB: ' + newGroupe.b );
    // console.log('groupeC: ' + newGroupe.c );

    // newGroupeをシャッフル
    newGroupe.a = _.shuffle(newGroupe.a);
    newGroupe.b = _.shuffle(newGroupe.b);
    newGroupe.c = _.shuffle(newGroupe.c);

    var member = [];
    for (var i = 0; i < newGroupe.a.length; i++) {
        member.push({name:newGroupe.a[i], groupe:'a', num: 0});
    }
    for (var i = 0; i < newGroupe.b.length; i++) {
        member.push({name:newGroupe.b[i], groupe:'b', num: 0});
    }
    for (var i = 0; i < newGroupe.c.length; i++) {
        member.push({name:newGroupe.c[i], groupe:'c', num: 0});
    }




    // member = _.shuffle(member);
    //
    //
    // for (var i = 0; i < member.length; i++) {
    //     array[i]
    // }

    window.member = _.shuffle(member);


})();
