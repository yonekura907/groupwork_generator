

var countA = 0;
var countB = 0;
var countC = 0;
// console.log(window.member.length);
for (var i = 0; i < window.member.length; i++) {


    if(window.member[i].groupe == 'a'){
        window.member[i].num = countA;
        countA++;
    }
    if(window.member[i].groupe == 'b'){
        window.member[i].num = countB;
        countB++;
    }
    if(window.member[i].groupe == 'c'){
        window.member[i].num = countC;
        countC++;
    }
    // if(window.member[i].group == 'b'){
    //     window.member[i].num++;
    // }
    // if(window.member[i].group == 'c'){
    //     window.member[i].num++;
    // }
    // console.log(window.member[i]);
}

class Member {
    constructor(aName, aGroupe, aStage, aCount, aTeamPos, aGroupeCount) {
        this.name = aName;
        this.groupe = aGroupe;
        this.stage = aStage;
        this.count = aCount;
        this.teamPos = aTeamPos;
        this.groupCount = aGroupeCount;
        this.posX;
        this.posY;
        this.nextPosX;
        this.nextPosY;
        this.container;
        this.dragPointX;
        this.dragPointY;
        this.hue;

        this.init();
    }
    init(){
        // console.log('name: ' + this.name, 'groupe: ' + this.groupe);


        if(this.groupe == 'a'){
            this.nextPosX = this.teamPos.a[0];
            this.nextPosY = this.teamPos.a[1];
        } else if(this.groupe == 'b'){
            this.nextPosX = this.teamPos.b[0];
            this.nextPosY = this.teamPos.b[1];
        } else if(this.groupe == 'c'){
            this.nextPosX = this.teamPos.c[0];
            this.nextPosY = this.teamPos.c[1];
        }

        // HSLカラーを算出
        var hue = Math.round(360 * Math.random());
        this.color = "hsl(" + hue + ", 100%, 30%)";
    }

    draw(){
        // 円を作成します
        var shape = new createjs.Shape();
        shape.graphics.beginFill(this.color); // 赤色で描画するように設定
        shape.graphics.drawCircle(0, 0, 50); //半径 100px の円を描画
        this.posX = Math.round(Math.random() * this.stage.canvas.width); // X 座標 200px の位置に配置
        this.posY = Math.round(Math.random() * this.stage.canvas.height); // Y 座標 200px の位置に配置
        shape.alpha = 0.8;
        // shape.x = this.posX; // X 座標 200px の位置に配置
        // shape.y = this.posY; // Y 座標 200px の位置に配置
        // this.stage.addChild(shape); // 表示リストに追加
        var t = new createjs.Text(this.name, "12px sans-serif", "#FFFFFF");
        t.y = t.y - 6;
        t.textAlign = "center";

        this.container = new createjs.Container();
        this.container.addChild(shape);
        this.container.addChild(t);

        this.container.x = this.posX;
        this.container.y = this.posY;
        this.stage.addChild(this.container);
        this.container.alpha = 0;
    }
    update(){
        var hue = this.groupCount*40;
        var radius = 140;
        this.nextPosX = this.nextPosX + radius*Math.cos(hue);
        this.nextPosY = this.nextPosY + radius*Math.sin(hue);
        createjs.Tween.get(this.container) // ターゲットを指定
        .wait(2000 + this.count * 100).to({alpha:1}, 800).wait(3000 + this.count * 100).to({x:this.nextPosX, y:this.nextPosY}, 800, createjs.Ease.cubicOut);
        // this.container.addEventListener("mousedown", this.handleDown);
        // this.container.addEventListener("pressmove", this.handleMove);
    }
    handleDown(event) {
        console.log('drag' + event);
        // ドラッグを開始した座標を覚えておく
        this.dragPointX = event.stageX - this.container.x;
        this.dragPointY = event.stageY - this.container.y;
    }

    // 表示オブジェクトを押した状態で動かしたときの処理です
    handleMove(event) {
        // 表示オブジェクトはマウス座標に追随する
        // ただしドラッグ開始地点との補正をいれておく
        this.container.x = event.mouseX - this.dragPointX;
        this.container.y = event.mouseY - this.dragPointY;
    }
}



window.addEventListener("load", init);



function init() {
    // Stageオブジェクトを作成します
    var stage = new createjs.Stage("myCanvas");
    // 画面幅・高さを取得
    var w = window.innerWidth;
    var h = window.innerHeight;
    // Canvas要素の大きさを画面幅・高さに合わせる
    stage.canvas.width = w;
    stage.canvas.height = h;

    teamPos = {
        a:[stage.canvas.width/2, stage.canvas.height/2 - 200],
        b:[stage.canvas.width/2 - 460, stage.canvas.height/2 + 140],
        c:[stage.canvas.width/2 + 460, stage.canvas.height/2 + 140],
    };

    var t_a = new createjs.Text("A", "160px sans-serif", "#222222");
    t_a.x = teamPos.a[0];
    t_a.y = teamPos.a[1];
    t_a.textAlign = "center";
    t_a.textBaseline = "middle";
    stage.addChild(t_a);

    var t_b = new createjs.Text("B", "160px sans-serif", "#222222");
    t_b.x = teamPos.b[0];
    t_b.y = teamPos.b[1];
    t_b.textAlign = "center";
    t_b.textBaseline = "middle";
    stage.addChild(t_b);

    var t_c = new createjs.Text("C", "160px Helvetica", "#222222");
    t_c.x = teamPos.c[0];
    t_c.y = teamPos.c[1];
    t_c.textAlign = "center";
    t_c.textBaseline = "middle";
    stage.addChild(t_c);


    var members = [];
    for (var i = 0; i < window.member.length; i++) {
        members[i] = new Member(window.member[i].name, window.member[i].groupe, stage, i, teamPos,window.member[i].num);
    }
    for (var i = 0; i < window.member.length; i++) {
        members[i].draw();
        members[i].update();
    }
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", handleTick);
    function handleTick() {
        stage.update();
    }

    window.addEventListener('resize',function(){
        // 画面幅・高さを取得
        // Canvas要素の大きさを画面幅・高さに合わせる
        w = window.innerWidth;
        h = window.innerHeight;

        stage.canvas.width = w;
        stage.canvas.height = h;
        // 画面更新する
        stage.update();
    });

}
