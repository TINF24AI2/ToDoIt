<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['username'])) {
    echo json_encode(['status' => 'error', 'message' => 'Not logged in']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_SESSION['username'];
    $list_name = $_POST['list_name'];

    $conn = new mysqli('localhost', 'root', '', 'todoapp');
    if ($conn->connect_error) {
        echo json_encode(['status' => 'error', 'message' => "Connection failed: " . $conn->connect_error]);
        exit;
    }

    $user_query = "SELECT id FROM users WHERE username = ?";
    $user_stmt = $conn->prepare($user_query);
    $user_stmt->bind_param('s', $username);
    $user_stmt->execute();
    $user_result = $user_stmt->get_result();
    $user_row = $user_result->fetch_assoc();
    $user_id = $user_row['id'];

    $sql = "INSERT INTO lists (name, user_id) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('si', $list_name, $user_id);
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'List added successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to add list']);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
