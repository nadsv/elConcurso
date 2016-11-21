<?php
header("Access-Control-Allow-Origin: *");

include_once 'connectionConfig.php';
$id = $_GET['id'];
$ip = $_SERVER['REMOTE_ADDR'];
$sql = 'SELECT i.id , i.idContester, i.name, i.description, i.winner, i.type, i.url, IFNULL(v.idItem,0) voice'
        .' FROM item i'
        .' LEFT JOIN (SELECT idItem FROM vote WHERE ip=:ip GROUP BY ip, idItem) v ON v.idItem=i.id'
        .' WHERE i.id = :id';
$stmt = $pdo->prepare($sql);
$stmt->execute(array('id' => $id, 'ip'=> "$ip"));
echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
