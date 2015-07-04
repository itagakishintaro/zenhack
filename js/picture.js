'use strict';

var myVideo; // 画像保存

// カメラ画像が使えるか判定
if (!navigator.getUserMedia && !navigator.webkitGetUserMedia) {
    alert('webkit系ブラウザでないか、もしくはgetUserMediaがサポートされていません');
} else {
    startVideo();
}

$('#capture').click(function() {
    var imageFile = capture();
    $('#imgFile').val(imageFile);// ここに画像データ入れる
    $.post('face.php',{imageFile: imageFile}, function( data ) {
        console.log(data);
    });
});

function startVideo() {
    navigator.webkitGetUserMedia({
            video: true
        },
        function(localMediaStream) {
            myVideo = $("#myVideo")[0];
            myVideo.src = window.URL.createObjectURL(localMediaStream);
            myVideo.play();
        },
        function(err) {
            alert('カメラから映像を取得することができませんでした。');
            console.log(err);
        }
    );
}

function capture() {
    var canvas = $("#captured")[0];
    var context = canvas.getContext("2d");
    context.drawImage(myVideo, 0, 0, 160, 120);
    return canvas.toDataURL("image/png");
};