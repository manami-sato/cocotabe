<?php
	// phpinfo();
	$api = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?";
	$data = http_build_query($_POST);
	$url = $api.$data;
	$options = array("http" => array(
		"header" => "Content-type: application/json",
	));
	$xml = file_get_contents($url, false, stream_context_create($options));
	$json = simplexml_load_string($xml);
	header( "Access-Control-Allow-Origin:*" );
	echo json_encode($json);