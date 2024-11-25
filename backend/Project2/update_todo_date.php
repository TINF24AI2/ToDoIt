<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['username'])) {
    echo json_encode(['status' => 'error', 'message' => 'Not logged in']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $todo_id = $_POST['id'];
    $date = $_POST['date'];

    $conn = new mysqli('localhost', 'root', '', 'todoapp');
    if ($conn->connect_error) {
        echo json_encode(['status' => 'error', 'message' => "Connection failed: " . $conn->connect_error]);
        exit;
    }

    $sql = "UPDATE todos SET date = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('si', $date, $todo_id);
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Todo date updated successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to update todo date']);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
