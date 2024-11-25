<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['status' => 'error', 'message' => 'Not logged in']);
    exit;
}

$user_id = $_SESSION['user_id'];

$conn = new mysqli('localhost', 'root', '', 'todoapp');
if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => "Connection failed: " . $conn->connect_error]);
    exit;
}

$today_date = date('Y-m-d');
$start_of_week = date('Y-m-d', strtotime('monday this week'));
$end_of_week = date('Y-m-d', strtotime('sunday this week'));

$sql = "SELECT id, name, list_id, checked, DATE_FORMAT(date, '%d.%m.%y') as date FROM todos WHERE date BETWEEN ? AND ? AND user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('ssi', $start_of_week, $end_of_week, $user_id);

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
