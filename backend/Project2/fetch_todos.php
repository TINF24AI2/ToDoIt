<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['username'])) {
    echo json_encode(['status' => 'error', 'message' => 'Not logged in']);
    exit;
}

$conn = new mysqli('localhost', 'root', '', 'todoapp');
if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => "Connection failed: " . $conn->connect_error]);
    exit;
}

$list_id = isset($_GET['list_id']) ? intval($_GET['list_id']) : 0;

$sql = "SELECT id, name, list_id, checked, DATE_FORMAT(date, '%d.%m.%y') as date FROM todos WHERE list_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $list_id);

$stmt->execute();
$result = $stmt->get_result();

$todos = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $todos[] = $row;
    }
}

echo json_encode(['status' => 'success', 'todos' => $todos]);

$stmt->close();
$conn->close();
?>
