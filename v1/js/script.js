$(function(){
    // 高さの最大値を代入するための変数ｈ
    var h = 0;
    //それぞれの要素の高さを調べる

    $("main div").each(function(){
        // 要素の高さと変数ｈの値を比較し、大きいほうを変数ｈに代入
        if($(this).height() > h) {
            h = $(this).height();
        }
    });

    //要素の高さを変数ｈのあたいに統一
    $("main div").css("height", h + "px");
});