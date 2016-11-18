<?php
header("Access-Control-Allow-Origin: *");

include_once 'connectionConfig.php';
$id = $_GET['id'];
$ip = $_SERVER['REMOTE_ADDR'];
$sql = "SELECT i.id , i.idContester, i.name, i.description, i.winner, i.type, i.url, IFNULL(v.id,0) voice, IFNULL(c.voices,0) voices
        FROM item i 
        LEFT JOIN (SELECT idItem, id FROM vote WHERE ip=:ip GROUP BY ip) v ON v.idItem=i.id
        LEFT JOIN (SELECT idItem, count(*) voices FROM vote GROUP BY idItem) c ON c.idItem=i.id
        WHERE i.idContester=:id
";
$stmt = $pdo->prepare($sql);
$stmt->execute(array('id' => $id, 'ip'=> "$ip"));
echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
