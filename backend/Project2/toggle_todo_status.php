<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['username'])) {
    echo json_encode(['status' => 'error', 'message' => 'Not logged in']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $todo_id = $_POST['id'];
    $checked = $_POST['checked'] == 'true' ? 1 : 0;

    $conn = new mysqli('localhost', 'root', '', 'todoapp');
    if ($conn->connect_error) {
        echo json_encode(['status' => 'error', 'message' => "Connection failed: " . $conn->connect_error]);
        exit;
    }

    $sql = "UPDATE todos SET checked = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ii', $checked, $todo_id);
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Todo status updated']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to update todo status']);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
