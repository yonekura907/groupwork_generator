;
(function(){
    // 元のオブジェクト
    let obj = {
        di: ['吉方 菜摘','渡邊 栞菜','潘 嘉敏'],
        d1:['上野 菜摘','北野 貴代','幸地 彩子','櫻井 愉磨','田中 晃祐','溝口 弥里'],
        d2:['村田 公子','丸山 忠彦','日笠 佑香','奥津 由妃絵'],
        e1:['石井 奈緒人','伊東 篤志','小荷田 成尭','木原 雅人','玉那覇 優衣','山野 美帆'],
        e2:['麻田 由美子','吉田 華佳','副島 学','寺崎 充','鶴岡 直人','藤村 麗菜']
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
    console.log(objCopy);

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
    // newGroupe.b.push(objCopy.d2[4]);
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
