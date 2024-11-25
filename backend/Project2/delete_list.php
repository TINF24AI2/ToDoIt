<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['username'])) {
    echo json_encode(['status' => 'error', 'message' => 'Not logged in']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $list_id = $_POST['id'];

    $conn = new mysqli('localhost', 'root', '', 'todoapp');
    if ($conn->connect_error) {
        echo json_encode(['status' => 'error', 'message' => "Connection failed: " . $conn->connect_error]);
        exit;
    }

    $sql = "DELETE FROM todos WHERE list_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $list_id);
    $stmt->execute();

    $sql = "DELETE FROM lists WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $list_id);
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'List and associated todos deleted']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to delete list']);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>
