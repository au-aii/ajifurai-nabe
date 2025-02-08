from flask import Flask, render_template, Response
import cv2

app = Flask(__name__)

# カスケード分類器を読み込む
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

def generate_frames():
    camera = cv2.VideoCapture(0)  # Webカメラを開く
    while True:
        success, frame = camera.read()
        if not success:
            break
        else:
            # グレースケールに変換
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            # 顔を検出
            faces = face_cascade.detectMultiScale(gray, 1.1, 4)
            
            if len(faces) > 0:
                # 顔が検出された場合
                for (x, y, w, h) in faces:
                    cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
                status = "認識している"
            else:
                # 顔が検出されなかった場合
                status = "認識できていない"
            
            # 画像にステータスを追加
            cv2.putText(frame, status, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
            
            # フレームをJPEGに変換
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            
            # フレームを生成
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)
