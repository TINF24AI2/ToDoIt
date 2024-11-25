<?php
header('Content-Type: application/json');
$response = array('status' => 'error');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['signup_username'];
    $password = $_POST['signup_password'];

    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

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
        $response['message'] = "Username already exists";
        echo json_encode($response);
        exit;
    }

    $sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ss', $username, $hashed_password);
    if ($stmt->execute()) {
        $response['status'] = 'success';
        $response['message'] = "User registered successfully";
    } else {
        $response['message'] = "Error: " . $stmt->error;
    }

    echo json_encode($response);
    $stmt->close();
    $conn->close();
} else {
    $response['message'] = "Invalid request method";
    echo json_encode($response);
}
?>
