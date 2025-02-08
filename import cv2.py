import cv2
import mediapipe as mp
import sqlite3
import time

# MediaPipe Pose モジュールのセットアップ
mp_pose = mp.solutions.pose
pose = mp_pose.Pose()
mp_drawing = mp.solutions.drawing_utils

# データベースのセットアップ
conn = sqlite3.connect('attendance.db')
cursor = conn.cursor()
cursor.execute('''CREATE TABLE IF NOT EXISTS seat_status (
                    seat_id INTEGER PRIMARY KEY, 
                    status TEXT, 
                    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)''')
conn.commit()

# 座席エリアの定義（仮の座標）
seat_zones = {
    1: ((100, 100), (200, 200)),  # (左上座標, 右下座標)
    2: ((250, 100), (350, 200)),
    3: ((400, 100), (500, 200))
}

def check_seat_status(pose_landmarks):
    seat_status = {seat_id: "空席" for seat_id in seat_zones.keys()}
    
    for seat_id, (top_left, bottom_right) in seat_zones.items():
        x_min, y_min = top_left
        x_max, y_max = bottom_right

        for lm in pose_landmarks.landmark:
            x, y = int(lm.x * frame.shape[1]), int(lm.y * frame.shape[0])
            if x_min <= x <= x_max and y_min <= y <= y_max:
                seat_status[seat_id] = "使用中"
                break

    return seat_status

# カメラ映像の取得
cap = cv2.VideoCapture(0)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = pose.process(rgb_frame)

    if results.pose_landmarks:
        seat_status = check_seat_status(results.pose_landmarks)

        # SQLite にデータ保存
        for seat_id, status in seat_status.items():
            cursor.execute("INSERT INTO seat_status (seat_id, status) VALUES (?, ?)", (seat_id, status))
        conn.commit()

        # 座席の状態を表示
        for seat_id, (top_left, bottom_right) in seat_zones.items():
            color = (0, 255, 0) if seat_status[seat_id] == "空席" else (0, 0, 255)
            cv2.rectangle(frame, top_left, bottom_right, color, 2)
            cv2.putText(frame, seat_status[seat_id], top_left, cv2.FONT_HERSHEY_SIMPLEX, 0.6, color, 2)

        mp_drawing.draw_landmarks(frame, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)

    cv2.imshow('Seat Detection', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
conn.close()
cv2.destroyAllWindows()
