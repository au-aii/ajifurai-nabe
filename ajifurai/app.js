// socket.on('face_detected', function(data){
//     // 1) <div id=“status”> の文字を変更（任意）
//     if (data.status === 'OK') {
//       document.getElementById('status').innerText = 'Recognition';
//       document.getElementById('status').style.color = 'red';
//     } else {
//       document.getElementById('status').innerText = 'No Recognition';
//       document.getElementById('status').style.color = 'black';
//     }
// });

socket.on('face_detected', function(data){
document.addEventListener('DOMContentLoaded', function() {
    let toggle1 = document.getElementById('toggle3');
    let toggle2 = document.getElementById('toggle7');
    let toggle3 = document.getElementById('toggle8');
    let toggle4 = document.getElementById('toggle10');

    if (result === "Recognition" || data.status === 'OK') {
      toggle1.checked = true;
      toggle2.checked = true;
      toggle3.checked = true;
      toggle4.checked = true;
      document.getElementById('status').innerText = 'Recognition';
      document.getElementById('status').style.color = 'red';
    }
    else{
        toggle1.checked = false;
        toggle2.checked = false;
        toggle3.checked = false;
        toggle4.checked = false;
        document.getElementById('status').innerText = 'No Recognition';
        document.getElementById('status').style.color = 'black';
    }
    // トグルの状態を即座に反映させる
    toggle.dispatchEvent(new Event('change'));
  })});




//   document.addEventListener('DOMContentLoaded', function() {
//     let toggle1 = document.getElementById('toggle3');
//     let toggle2 = document.getElementById('toggle7');
//     let toggle3 = document.getElementById('toggle8');
//     let toggle4 = document.getElementById('toggle10');
//     if (result === "Recognition") {
//       toggle1.checked = true;
//       toggle2.checked = true;
//       toggle3.checked = true;
//       toggle4.checked = true;
//     }
//     else{
//         toggle1.checked = false;
//         toggle2.checked = false;
//         toggle3.checked = false;
//         toggle4.checked = false;
//     }
//     // トグルの状態を即座に反映させる
//     toggle.dispatchEvent(new Event('change'));
//   });













  

document.addEventListener("DOMContentLoaded", function () {
    // トグルスイッチの要素を取得
    const toggleSwitch = document.getElementById('toggle2');
    const aokiText = document.getElementById('aoki');

    // トグルがオンになった時に文字色を変える
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            // トグルがオンの時
            aokiText.style.color = '#4bd865'; // 色を#4bd865に変更
        } else {
            // トグルがオフの時
            aokiText.style.color = '#dddddd'; // 色を元に戻す
        }
    });

    // ページ読み込み時にトグルがオンなら色を変更する
    if (toggleSwitch.checked) {
        aokiText.style.color = '#4bd865';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // トグルスイッチの要素を取得
    const toggleSwitch = document.getElementById('toggle3');
    const tsueText = document.getElementById('tsue');

    // トグルがオンになった時に文字色を変える
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            // トグルがオンの時
            tsueText.style.color = '#4bd865'; // 色を#4bd865に変更
        } else {
            // トグルがオフの時
            tsueText.style.color = '#dddddd'; // 色を元に戻す
        }
    });

    // ページ読み込み時にトグルがオンなら色を変更する
    if (toggleSwitch.checked) {
        tsueText.style.color = '#4bd865';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // トグルスイッチの要素を取得
    const toggleSwitch = document.getElementById('toggle4');
    const yokosukaText = document.getElementById('yokosuka');

    // トグルがオンになった時に文字色を変える
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            // トグルがオンの時
            yokosukaText.style.color = '#4bd865'; // 色を#4bd865に変更
        } else {
            // トグルがオフの時
            yokosukaText.style.color = '#dddddd'; // 色を元に戻す
        }
    });

    // ページ読み込み時にトグルがオンなら色を変更する
    if (toggleSwitch.checked) {
        yokosukaText.style.color = '#4bd865';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // トグルスイッチの要素を取得
    const toggleSwitch = document.getElementById('toggle5');
    const kubotaText = document.getElementById('kubota');

    // トグルがオンになった時に文字色を変える
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            // トグルがオンの時
            kubotaText.style.color = '#4bd865'; // 色を#4bd865に変更
        } else {
            // トグルがオフの時
            kubotaText.style.color = '#dddddd'; // 色を元に戻す
        }
    });

    // ページ読み込み時にトグルがオンなら色を変更する
    if (toggleSwitch.checked) {
        kubotaText.style.color = '#4bd865';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // トグルスイッチの要素を取得
    const toggleSwitch = document.getElementById('toggle6');
    const mukaiText = document.getElementById('mukai');

    // トグルがオンになった時に文字色を変える
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            // トグルがオンの時
            mukaiText.style.color = '#4bd865'; // 色を#4bd865に変更
        } else {
            // トグルがオフの時
            mukaiText.style.color = '#dddddd'; // 色を元に戻す
        }
    });

    // ページ読み込み時にトグルがオンなら色を変更する
    if (toggleSwitch.checked) {
        mukaiText.style.color = '#4bd865';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // トグルスイッチの要素を取得
    const toggleSwitch = document.getElementById('toggle7');
    const tanakaText = document.getElementById('tanaka');

    // トグルがオンになった時に文字色を変える
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            // トグルがオンの時
            tanakaText.style.color = '#4bd865'; // 色を#4bd865に変更
        } else {
            // トグルがオフの時
            tanakaText.style.color = '#dddddd'; // 色を元に戻す
        }
    });

    // ページ読み込み時にトグルがオンなら色を変更する
    if (toggleSwitch.checked) {
        tanakaText.style.color = '#4bd865';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // トグルスイッチの要素を取得
    const toggleSwitch = document.getElementById('toggle8');
    const takahashiText = document.getElementById('takahashi');

    // トグルがオンになった時に文字色を変える
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            // トグルがオンの時
            takahashiText.style.color = '#4bd865'; // 色を#4bd865に変更
        } else {
            // トグルがオフの時
            takahashiText.style.color = '#dddddd'; // 色を元に戻す
        }
    });

    // ページ読み込み時にトグルがオンなら色を変更する
    if (toggleSwitch.checked) {
        takahashiText.style.color = '#4bd865';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // トグルスイッチの要素を取得
    const toggleSwitch = document.getElementById('toggle9');
    const wadaText = document.getElementById('wada');

    // トグルがオンになった時に文字色を変える
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            // トグルがオンの時
            wadaText.style.color = '#4bd865'; // 色を#4bd865に変更
        } else {
            // トグルがオフの時
            wadaText.style.color = '#dddddd'; // 色を元に戻す
        }
    });

    // ページ読み込み時にトグルがオンなら色を変更する
    if (toggleSwitch.checked) {
        wadaText.style.color = '#4bd865';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // トグルスイッチの要素を取得
    const toggleSwitch = document.getElementById('toggle10');
    const yoshidaText = document.getElementById('yoshida');

    // トグルがオンになった時に文字色を変える
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            // トグルがオンの時
            yoshidaText.style.color = '#4bd865'; // 色を#4bd865に変更
        } else {
            // トグルがオフの時
            yoshidaText.style.color = '#dddddd'; // 色を元に戻す
        }
    });

    // ページ読み込み時にトグルがオンなら色を変更する
    if (toggleSwitch.checked) {
        yoshidaText.style.color = '#4bd865';
    }
});


// document.addEventListener("DOMContentLoaded", function() {// 津江のセルを取得
//     let tsueCell = document.getElementById("tsue");
//     let tanakaCell = document.getElementById("tanaka");
//     let takahashiCell = document.getElementById("takahashi");
//     let yoshidaCell = document.getElementById("yoshida");

    // result を仮に定義（例: サーバーから取得する場合など）ここはとりあえず認識としているだけ！！最終的には消す！
    // let result = "Recognition";
    // let result1 = "認識できない";  // ここで result を定義
    // let result2 = "認識できない";
    // let result3 = "認識できない";
    // let result4 = "認識できない";

    
//     if (typeof result === "undefined"){
//         tsueCell.style.backgroundColor = "#c2c2c2";
//         tanakaCell.style.backgroundColor = "#c2c2c2";
//         takahashiCell.style.backgroundColor = "#c2c2c2";
//         yoshidaCell.style.backgroundColor = "#c2c2c2";
//         alert("undefined");
//     }
//     // result1 の値に応じて背景色を変更
//     else if (typeof result !== "undefined") {  // result1 が正しく読み込まれているか確認
//         if (result === "Recognition") {
//             tsueCell.style.backgroundColor = "#ebffb5";
//             tanakaCell.style.backgroundColor = "#ebffb5";
//             takahashiCell.style.backgroundColor = "#ebffb5";
//             yoshidaCell.style.backgroundColor = "#ebffb5";
//             alert("Recognition");
//         } else if (result === "No Recognition") {
//             tsueCell.style.backgroundColor = "#c2c2c2";
//             tanakaCell.style.backgroundColor = "#c2c2c2";
//             takahashiCell.style.backgroundColor = "#c2c2c2";
//             yoshidaCell.style.backgroundColor = "#c2c2c2";
//             alert("No Recognition");
//         }
//     }



//     if (typeof result1 === "undefined"){
//         tsueCell.style.backgroundColor = "#c2c2c2";
//     }
//     // result1 の値に応じて背景色を変更
//     else if (typeof result1 !== "undefined") {  // result1 が正しく読み込まれているか確認
//         if (result1 === "認識") {
//             tsueCell.style.backgroundColor = "#ebffb5";
//         } else if (result1 === "認識できない") {
//             tsueCell.style.backgroundColor = "#c2c2c2";
//         }
//     }



//     if (typeof result2 === "undefined"){
//         tanakaCell.style.backgroundColor = "#c2c2c2";
//     }
//     else if (typeof result2 !== "undefined") {  // result2 が正しく読み込まれているか確認
//         if (result2 === "認識") {
//             tanakaCell.style.backgroundColor = "#ebffb5";
//         } else if (result2 === "認識できない") {
//             tanakaCell.style.backgroundColor = "#c2c2c2";
//         }
//     }



//     if (typeof result3 === "undefined"){
//         takahashiCell.style.backgroundColor = "#c2c2c2";
//     }
//     else if (typeof result3 !== "undefined") {  // result3 が正しく読み込まれているか確認
//         if (result3 === "認識") {
//             takahashiCell.style.backgroundColor = "#ebffb5";
//         } else if (result3 === "認識できない") {
//             takahashiCell.style.backgroundColor = "#c2c2c2";
//         }
//     }



//     if (typeof result4 === "undefined"){
//         yoshidaCell.style.backgroundColor = "#c2c2c2";
//     }
//     else if (typeof result4 !== "undefined") {  // result4 が正しく読み込まれているか確認
//         if (result4 === "認識") {
//             yoshidaCell.style.backgroundColor = "#ebffb5";
//         } else if (result4 === "認識できない") {
//             yoshidaCell.style.backgroundColor = "#c2c2c2";
//         }
//     }
// });

