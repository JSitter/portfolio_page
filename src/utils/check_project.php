<?php
/**
 * This File should be placed in the project directory on the server with all the other
 */

$xml = [];
foreach($_GET as $key => $url){
  $fp = fsockopen($url, 80);
  fputs($fp, "GET / HTTP/1.1\r\n");
  fputs($fp, "Host: {$url}\r\n\r\n");
  $http_response .= fgets($fp, 128);
  fclose($fp);
  array_push($xml, $url);
  // echo nl2br(htmlentities($http_response, ENT_QUOTES, 'UTF-8'));
};
print_r($xml);