<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['username']) || !isset($_SESSION['user_id'])) {
    echo json_encode(['status' => 'error', 'message' => 'Not logged in']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $list_id = $_POST['list_id'];
    $todo_name = $_POST['todo_name'];
    $user_id = $_SESSION['user_id']; 

    $conn = new mysqli('localhost', 'root', '', 'todoapp');
    if ($conn->connect_error) {
        echo json_encode(['status' => 'error', 'message' => "Connection failed: " . $conn->connect_error]);
        exit;
    }

    $sql = "INSERT INTO todos (name, list_id, checked, user_id) VALUES (?, ?, 0, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('sii', $todo_name, $list_id, $user_id);
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'todo' => ['id' => $stmt->insert_id]]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to add todo']);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
