<?php
session_start();
$response = array('loggedIn' => false);
if (isset($_SESSION['username'])) {
    $response['loggedIn'] = true;
    $response['username'] = $_SESSION['username'];
}
echo json_encode($response);
?>
