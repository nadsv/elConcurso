<?php
header("Access-Control-Allow-Origin: *");

include_once 'connectionConfig.php';
$id = $_GET['id'];
$sql = 'SELECT * FROM contester WHERE id = :id';
$stmt = $pdo->prepare($sql);
$stmt->execute(array('id' => $id));
echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
