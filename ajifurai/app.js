document.addEventListener("DOMContentLoaded", function() {// 津江のセルを取得
    let tsueCell = document.getElementById("tsue");
    let tanakaCell = document.getElementById("tanaka");
    let takahashiCell = document.getElementById("takahashi");
    let yoshidaCell = document.getElementById("yoshida");

    // result を仮に定義（例: サーバーから取得する場合など）ここはとりあえず認識としているだけ！！最終的には消す！
    // let result1 = "認識できない";  // ここで result を定義
    // let result2 = "認識できない";
    // let result3 = "認識できない";
    // let result4 = "認識できない";

    
    if (typeof result === "undefined"){
        tsueCell.style.backgroundColor = "#c2c2c2";
        tanakaCell.style.backgroundColor = "#c2c2c2";
        takahashiCell.style.backgroundColor = "#c2c2c2";
        yoshidaCell.style.backgroundColor = "#c2c2c2";
    }
    // result1 の値に応じて背景色を変更
    else if (typeof result !== "undefined") {  // result1 が正しく読み込まれているか確認
        if (result === "Recognition") {
            tsueCell.style.backgroundColor = "#ebffb5";
            tanakaCell.style.backgroundColor = "#ebffb5";
            takahashiCell.style.backgroundColor = "#ebffb5";
            yoshidaCell.style.backgroundColor = "#ebffb5";
        } else if (result === "No Recognition") {
            tsueCell.style.backgroundColor = "#c2c2c2";
            tanakaCell.style.backgroundColor = "#c2c2c2";
            takahashiCell.style.backgroundColor = "#c2c2c2";
            yoshidaCell.style.backgroundColor = "#c2c2c2";
        }
    }



    if (typeof result1 === "undefined"){
        tsueCell.style.backgroundColor = "#c2c2c2";
    }
    // result1 の値に応じて背景色を変更
    else if (typeof result1 !== "undefined") {  // result1 が正しく読み込まれているか確認
        if (result1 === "認識") {
            tsueCell.style.backgroundColor = "#ebffb5";
        } else if (result1 === "認識できない") {
            tsueCell.style.backgroundColor = "#c2c2c2";
        }
    }



    if (typeof result2 === "undefined"){
        tanakaCell.style.backgroundColor = "#c2c2c2";
    }
    else if (typeof result2 !== "undefined") {  // result2 が正しく読み込まれているか確認
        if (result2 === "認識") {
            tanakaCell.style.backgroundColor = "#ebffb5";
        } else if (result2 === "認識できない") {
            tanakaCell.style.backgroundColor = "#c2c2c2";
        }
    }



    if (typeof result3 === "undefined"){
        takahashiCell.style.backgroundColor = "#c2c2c2";
    }
    else if (typeof result3 !== "undefined") {  // result3 が正しく読み込まれているか確認
        if (result3 === "認識") {
            takahashiCell.style.backgroundColor = "#ebffb5";
        } else if (result3 === "認識できない") {
            takahashiCell.style.backgroundColor = "#c2c2c2";
        }
    }



    if (typeof result4 === "undefined"){
        yoshidaCell.style.backgroundColor = "#c2c2c2";
    }
    else if (typeof result4 !== "undefined") {  // result4 が正しく読み込まれているか確認
        if (result4 === "認識") {
            yoshidaCell.style.backgroundColor = "#ebffb5";
        } else if (result4 === "認識できない") {
            yoshidaCell.style.backgroundColor = "#c2c2c2";
        }
    }
});
