<?php
header("Access-Control-Allow-Origin: *");

include_once 'connectionConfig.php';
$id = $_GET['id'];
$sql = 'SELECT * FROM contest WHERE id = :id';
$stmt = $pdo->prepare($sql);
$stmt->execute(array('id' => $id));
foreach ($stmt as $row)
{
    echo json_encode($row);
}
