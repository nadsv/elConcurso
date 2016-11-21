<?php
header("Access-Control-Allow-Origin: *");

include_once 'connectionConfig.php';
$id = isset($_GET['id'])?$_GET['id']:-1;
$sql = ($id>0)?'SELECT * FROM contest WHERE id = :id':'SELECT * FROM contest';
$stmt = $pdo->prepare($sql);
$stmt->execute(array('id' => $id));
echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
