<?php
session_start();
header('Content-Type: application/json');
$response = array('status' => 'error');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $conn = new mysqli('localhost', 'root', '', 'todoapp');
    if ($conn->connect_error) {
        $response['message'] = "Connection failed: " . $conn->connect_error;
        echo json_encode($response);
        exit;
    }

    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['username'] = $username;
            $_SESSION['user_id'] = $user['id'];
            $response['status'] = 'success';
            $response['message'] = "Login successful";
        } else {
            $response['message'] = "Invalid password";
        }
    } else {
        $response['message'] = "Username not found";
    }

    echo json_encode($response);
    $stmt->close();
    $conn->close();
} else {
    $response['message'] = "Invalid request method";
    echo json_encode($response);
}
?>
