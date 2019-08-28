<?php
/**
 * This File should be placed on the production server's
 * project root directory alongside the other files generated
 * from `npm run build`
 */

$xml = [];
foreach($_GET as $key => $url){
  $fp = fsockopen(htmlentities($url), 80);
  fputs($fp, "GET / HTTP/1.1\r\n");
  fputs($fp, "Host: {$url}\r\n\r\n");
  $http_response .= fgets($fp, 1128);
  // Don't bother waiting til the end of the file
  fclose($fp);
  array_push($xml, $url);
  // echo nl2br(htmlentities($http_response, ENT_QUOTES, 'UTF-8'));
};
print_r($xml);