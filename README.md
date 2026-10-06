# 🚗 GPS Speedometer & Dashcam Assistant (PWA)

เว็บแอปพลิเคชันจับความเร็ว GPS แจ้งเตือนกล้องตรวจจับความเร็ว/จุดเสี่ยง และบันทึกวิดีโอกล้องหน้ารถ พัฒนาในรูปแบบ **Progressive Web App (PWA)** รองรับการทำงานแบบ **Offline 100%** ผ่านเบราว์เซอร์บนมือถือ (iOS / Android)

---

## ✨ คุณสมบัติเด่น (Key Features)

* ** speedometer Real-time:** แสดงความเร็วปัจจุบัน, ความเร็วสูงสุด, ระยะทางสะสม, ความแม่นยำ GPS และความสูงระดับน้ำทะเล
* **🚨 Speed Camera & Hazard Alert:** ระบบคำนวณพิกัดเตือนภัยล่วงหน้า 200 เมตร พร้อมเสียงพูดภาษาไทย (Text-to-Speech) และแจ้งเตือนเมื่อพ้นระยะ
* **📷 Dashcam & Video Recorder:** เปิดแสดงผลกล้องหน้ารถแบบ Picture-in-Picture (PiP) พร้อมปุ่มบันทึกวิดีโอลงเครื่อง (MP4)
* **🌦️ Live Weather & OSD:** แสดงนาฬิกา real-time และสภาพอากาศ/อุณหภูมิปัจจุบัน ณ พิกัดรถอัตโนมัติ (ผ่าน Open-Meteo API)
* **🗣️ Voice Location Assistant:** กดสั่งงานให้ระบบพูดบอกตำแหน่งพิกัดและระดับความเร็วปัจจุบันได้
* **🌙 Day / Night Mode & Mini UI:** ปรับสลับธีมสว่าง/มืด และพับซ่อนหน้าจอ Dashboard เพื่อเน้นดูแผนที่ได้
* **💾 GPX Export:** บันทึกและส่งออกไฟล์ประวัติเส้นทาง (.gpx) นำไปเปิดกับ Google Earth หรือซอฟต์แวร์นำทางอื่นๆ
* **⚡ Offline Support:** รองรับการติดตั้งแบบ **Add to Home Screen (PWA)** และใช้งานผ่าน Service Worker โดยไม่ต้องใช้เน็ตมือถือ

---

## 🛠️ โครงสร้างไฟล์ (Project Structure)

```text
├── index.html       # ไฟล์หน้าเว็บหลัก (HTML5, Leaflet JS, Web API)
├── sw.js            # Service Worker สำหรับการทำ Cache และ Offline 100%
└── manifest.json    # ไฟล์ตั้งค่า PWA แอปพลิเคชัน