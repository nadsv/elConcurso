<?php
$HOST = 'localhost';
$DB = 'elConcurso';
$USER = 'root';
$PASS = '1';
$CHARSET = "utf8";

$DSN = "mysql:host=$HOST;dbname=$DB;charset=$CHARSET";
$OPT = array(
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
);
$pdo = new PDO($DSN, $USER, $PASS, $OPT);
