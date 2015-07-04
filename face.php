<?php
if ($_POST) {
	// rekognition apiに写真を送信して感情を取得
	// 参考:http://d.hatena.ne.jp/tboffice/20091027/1256660197
	$ch = curl_init();
	$imageFile = $_POST["imageFile"];
	$imageArray = explode(',', $imageFile);
	$opts = array('api_key' => 'k7e9tRIzzHDflSkG', 
      'api_secret' => 'l9lQe9mCjAmSEnEO', 
      'jobs' => 'face_emotion_part',
      'base64' => $imageArray[1]);
	curl_setopt($ch, CURLOPT_URL, 'http://rekognition.com/func/api/');
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $opts);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$data = curl_exec($ch);
	curl_close($ch);
	echo $data;
}
