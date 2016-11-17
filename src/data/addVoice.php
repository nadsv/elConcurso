<?php
header("Access-Control-Allow-Origin: *");

include_once 'connectionConfig.php';
$idItem = $_POST['idItem'];
$ip = $_SERVER['REMOTE_ADDR'];
$sql = "INSERT INTO vote(idItem, ip) VALUES (:idItem,:ip)";
$stmt = $pdo->prepare($sql);
$stmt->execute(array('idItem' => $idItem, 'ip'=> "$ip"));
