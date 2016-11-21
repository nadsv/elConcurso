<?php
header("Access-Control-Allow-Origin: *");

include_once 'connectionConfig.php';
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$idItem = $request->idItem;;
$ip = $_SERVER['REMOTE_ADDR'];
$sql = "DELETE from vote WHERE idItem=:idItem and ip=:ip";
$stmt = $pdo->prepare($sql);
$stmt->execute(array('idItem' => $idItem, 'ip'=> "$ip"));
echo '[]';
