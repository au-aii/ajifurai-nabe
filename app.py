from flask import Flask, render_template
from flask_socketio import SocketIO
import cv2
import base64
import numpy as np
from threading import Thread

app = Flask(__name__)
socketio = SocketIO(app)

# 人物検出用のカスケード分類器を読み込む
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

def detect_person(frame):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)
    return len(faces) > 0

def gen_frames():
    camera = cv2.VideoCapture(0)
    while True:
        success, frame = camera.read()
        if not success:
            break
        else:
            person_detected = detect_person(frame)
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = base64.b64encode(buffer).decode('utf-8')
            socketio.emit('video_feed', {'image': frame, 'person_detected': person_detected})

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('connect')
def test_connect():
    print('Client connected')
    global thread
    if not thread.is_alive():
        thread = Thread(target=gen_frames)
        thread.start()

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    thread = Thread()
    socketio.run(app)
