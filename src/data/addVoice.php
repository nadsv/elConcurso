<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

include_once 'connectionConfig.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idItem = $request->idItem;;
$ip = $_SERVER['REMOTE_ADDR'];
$sql = "INSERT INTO vote(idItem, ip) VALUES (:idItem,:ip)";
$stmt = $pdo->prepare($sql);
$stmt->execute(array('idItem' => $idItem, 'ip'=> "$ip"));
echo '[]';