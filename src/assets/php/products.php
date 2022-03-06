<?php
	echo http_build_query(["key" => $_POST["key"], "lat" => $_POST["lat"], "lng" => $_POST["lng"] ]);
	// $url = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=5dd40eab2484e976";
	// $data = array("key" => $_POST["lat","lng"]); // フォーム等から受信したデータを連想配列でセットします。
	// $options = array("http" => array(
	// 	"method" => "POST",
	// 	"header" => "Content-type: application/json",
	// 	"content" => json_encode($data) // 連想配列をJSONに変換
	// ));
	// $json = file_get_contents($url, false, stream_context_create($options));
	// header("Content-type: application/json");
	// echo $json;



  // // クロスオリジンを許可する
  // header( "Access-Control-Allow-Origin:*" );
  // // ヘッダーにコンテンツの種類を設定する
  // header( "Content-Type:application/json" );

  // print json_encode($products);