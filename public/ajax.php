<?php

header('Access-Control-Allow-Origin: http://localhost:5000');
header('Access-Control-Allow-Headers: Content-Type');

// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);

if (isset($data->action)) {

	switch($data->action) {
		case 'save':
			$fp = fopen('bookmarks.json', 'w+');
			fwrite($fp, json_encode($data->json, JSON_PRETTY_PRINT));
			fclose($fp);
			echo 'data received';
			break;
		case 'load':
			if(file_exists('bookmarks.json')) {
				echo file_get_contents('bookmarks.json');
			} else {
				echo '404';
			}
			break;
		case 'lookup':
			$html = @file_get_contents($data->url);
			if ($html === FALSE) {
				$title = $data->url;
			} else {
				$title = get_html_title($html) ? get_html_title($html) : $data->url;
			}
			$returnValue = $title;
			echo $returnValue;
			break;
			default:
				die('No valid action provided in Ajax request');
		}

}


function get_html_title($html){
    preg_match("/\<title.*\>(.*)\<\/title\>/isU", $html, $matches);
    if (isset($matches[1])) {
        return $matches[1];
    } else {
        return false;
    }
}

?>