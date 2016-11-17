<?php
header("Access-Control-Allow-Origin: *");

include_once 'connectionConfig.php';
$idItem = $_POST['idItem'];
$ip = $_SERVER['REMOTE_ADDR'];
$sql = "DELETE from vote WHERE idItem=:idItem and ip=:ip";
$stmt = $pdo->prepare($sql);
$stmt->execute(array('idItem' => $idItem, 'ip'=> "$ip"));
