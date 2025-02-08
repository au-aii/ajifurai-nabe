document.addEventListener("DOMContentLoaded", function() {
    // 津江のセルを取得
    let tsueCell = document.getElementById("tsue");

    // result を仮に定義（例: サーバーから取得する場合など）
    let result = "認識できました";  // ここで result を定義

    // result の値に応じて背景色を変更
    if (typeof result !== "undefined") {  // result が正しく読み込まれているか確認
        if (result === "認識できました") {
            tsueCell.style.backgroundColor = "#ebffb5";
        } else if (result === "認識できませんでした") {
            tsueCell.style.backgroundColor = "#c2c2c2";
        }
    }
});
