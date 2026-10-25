# ⚡ FASTCHICK (Solocast Web)
### แพลตฟอร์มรวมวิดเจ็ตสตรีมมิ่ง Twitch และระบบ Interactive Overlays สำหรับสตรีมเมอร์ & เกมเมอร์

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.8-010101?logo=socket.io&logoColor=white)](https://socket.io/)
[![Twitch](https://img.shields.io/badge/Twitch-EventSub%20WS-9146FF?logo=twitch&logoColor=white)](https://dev.twitch.tv/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)

---

## 📖 สารบัญ (Table of Contents)
- [ภาพรวมโปรเจกต์ (Overview)](#-ภาพรวมโปรเจกต์-overview)
- [วิดเจ็ตและโอเวอร์เลย์ทั้งหมด (Available Widgets)](#-วิดเจ็ตและโอเวอร์เลย์ทั้งหมด-available-widgets)
- [ฟีเจอร์เด่นของแพลตฟอร์ม (Key Features)](#-ฟีเจอร์เด่นของแพลตฟอร์ม-key-features)
- [แผงควบคุมใน OBS (OBS Custom Browser Dock)](#-แผงควบคุมใน-obs-obs-custom-browser-dock)
- [เทคโนโลยีที่ใช้ (Tech Stack)](#-เทคโนโลยีที่ใช้-tech-stack)
- [โครงสร้างโปรเจกต์ (Project Structure)](#-โครงสร้างโปรเจกต์-project-structure)
- [การตั้งค่าและการเริ่มต้นใช้งาน (Getting Started)](#-การตั้งค่าและการเริ่มต้นใช้งาน-getting-started)
  - [ความต้องการของระบบ (Prerequisites)](#ความต้องการของระบบ-prerequisites)
  - [การตั้งค่า Environment Variables](#การตั้งค่า-environment-variables)
  - [การรันในโหมด Development](#การรันในโหมด-development)
  - [การ Build และ Deploy สำหรับ Production](#การ-build-และ-deploy-สำหรับ-production)
- [ระบบฐานข้อมูลและความปลอดภัย (Security & Data Resilience)](#-ระบบฐานข้อมูลและความปลอดภัย-security--data-resilience)
- [สคริปต์ซิงค์ข้อมูล (Data Scrapers & Sync)](#-สคริปต์ซิงค์ข้อมูล-data-scrapers--sync)

---

## 🌟 ภาพรวมโปรเจกต์ (Overview)

**FASTCHICK (Solocast Web)** คือแพลตฟอร์ม Full-stack สตรีมมิ่งวิดเจ็ต (Streaming Widgets & Interactive Overlays) ที่ออกแบบมาเพื่อยกระดับการสตรีมบน **Twitch** และซอฟต์แวร์บรอดแคสต์อย่าง **OBS Studio / Streamlabs**

แพลตฟอร์มนี้ช่วยให้สตรีมเมอร์สร้างปฏิสัมพันธ์ร่วมกับคนดู (Viewer Engagement) ได้แบบเรียลไทม์ ผ่านการแลกแต้มช่อง (Twitch Channel Points), คำสั่งแชท (Chat Commands) และการควบคุมผ่าน Dashboard โดยไม่ต้องติดตั้งโปรแกรมภายนอกเพิ่ม เพียงแค่นำ URL ไปวางเป็น Browser Source ใน OBS Studio

---

## 🎮 วิดเจ็ตและโอเวอร์เลย์ทั้งหมด (Available Widgets)

| Widget | เส้นทาง URL | คำอธิบายและความสามารถ |
| :--- | :--- | :--- |
| **🎲 DBD Perk Roulette** | `/widgets/dbd-perks` | วงล้อสุ่มเปิร์ค Dead by Daylight (Survivor & Killer) 4 ช่อง สั่งสุ่มผ่านแต้มช่องหรือแชทได้ พร้อมระบบคัดกรอง/Blacklist เปิร์คที่ยังไม่ได้ปลดล็อกหรือไม่อยากเล่น |
| **💀 DBD Killer Roulette** | `/widgets/random-killer` | สุ่มฆาตกร Dead by Daylight พร้อมการ์ดภาพคมชัด เอฟเฟกต์แอนิเมชัน และบันทึกประวัติการสุ่มย้อนหลัง |
| **🏆 DBD Scoreboard** | `/widgets/dbd-scoreboard` | สกอร์บอร์ดนับสถิติผลการเล่น Killer (Kills / Draws / Escapes) ปรับคะแนนสดได้ผ่าน Dashboard หรือ OBS Dock |
| **🎫 Twitch Loyalty Card** | `/widgets/loyalty-card` | สมุดการ์ดสะสมแสตมป์เช็คอินของคนดูประจำช่อง แสดงผลแอนิเมชันปั๊มตรายางบนจอ พร้อม Leaderboard และข้อความตอบกลับในแชทอัตโนมัติ |
| **🎵 Spotify Song Request** | `/widgets/spotify-sr` | ระบบขอเพลง Spotify ผ่านแชท (`!sr`) พร้อมแถบ Now Playing โชว์หน้าปกเพลง, คิวเพลง และปุ่มจัดการข้ามเพลง/แบนเพลง |
| **🔢 Custom Counter** | `/widgets/custom-counter` | ตัวนับสถิติอเนกประสงค์ (นับความตาย, นับวิน, นับสตรีค) รองรับ Multi-room ควบคุมคะแนนร่วมกันหรือผ่านคำสั่งแชท |
| **📢 Twitch Shoutout** | `/widgets/twitch-shoutout` | ป็อปอัปต้อนรับและโปรโมตช่องเพื่อนสตรีมเมอร์เมื่อมี Raid หรือพิมพ์ `/shoutout` ดึงภาพโปรไฟล์และเกมล่าสุดมาแสดงอัตโนมัติ |
| **🎯 Valorant Agent Roulette** | `/widgets/valorant-agent` | วงล้อสุ่มเอเจนท์ Valorant คัดกรองตาม Role (Duelist, Initiator, Controller, Sentinel) พร้อมรูปภาพและเสียงพากย์ประจำตัว |

---

## ✨ ฟีเจอร์เด่นของแพลตฟอร์ม (Key Features)

1. **⚡ ตอบสนองไวแบบ Real-time ด้วย WebSocket (Socket.IO):**
   - เมื่อคนดูกดแลกแต้มช่องหรือพิมพ์คำสั่ง โอเวอร์เลย์ใน OBS จะตอบสนองและขยับทันทีโดยไม่มีดีเลย์
2. **🔐 ระบบ Twitch OAuth2 & EventSub WebSocket Listener:**
   - เชื่อมต่อบัญชี Twitch ของสตรีมเมอร์ ดักจับอีเวนต์ Channel Points Redemptions, Chat Messages, Raids และ Follows ได้อย่างแม่นยำ
3. **🎨 Dashboard ปรับแต่งรูปลักษณ์อิสระ:**
   - ปรับแต่งสี, ฟอนต์, สไตล์, ขนาด, ความเร็วแอนิเมชัน และเสียงเอฟเฟกต์ของแต่ละวิดเจ็ตได้แบบ Live Preview
4. **🔒 ปลอดภัยด้วย Secret Overlay Tokens:**
   - แต่ละสตรีมเมอร์จะมี Token เฉพาะตัวสำหรับ Browser Source ป้องกันไม่ให้บุคคลอื่นเข้ามารบกวนหรือขโมยโอเวอร์เลย์ไปใช้งาน
5. **🛡️ ระบบแอดมินและการจัดการระดับสูง (`/admin`):**
   - ตรวจสอบสถานะการทำงานของวิดเจ็ตในระบบ, จัดการสิทธิ์ผู้ใช้, ส่งประกาศ (Announcements) และรับเรื่องแจ้งปัญหา (Support Tickets)

---

## 🖥️ แผงควบคุมใน OBS (OBS Custom Browser Dock)

สตรีมเมอร์สามารถนำลิงก์หน้า `/dock?token=<YOUR_TOKEN>` ไปตั้งเป็น **Custom Browser Dock** ใน OBS Studio ได้โดยตรง:
- **ควบคุมทุกอย่างได้จากหน้าต่าง OBS โดยไม่ต้องสลับหน้าจอไปที่เบราว์เซอร์**
- จัดการคิวเพลง Spotify (Play/Pause, Skip, Remove)
- กดเพิ่ม/ลดคะแนน DBD Scoreboard หรือ Counter
- สั่งหมุนสุ่มเปิร์ค DBD หรือฆาตกรได้ทันทีด้วยปุ่มลัด
- ตรวจสอบประวัติการแลกแสตมป์ของผู้ชม

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

### Frontend
- **Framework:** [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **State & Real-time:** Context API (`AuthContext`, `ThemeContext`) + [Socket.IO Client](https://socket.io/)
- **UI & Animations:** [GSAP 3](https://greensock.com/gsap/), [Lucide React Icons](https://lucide.dev/), Modern Glassmorphic CSS, Custom Design System
- **Linter & Tools:** [Oxlint](https://oxc.rs/)

### Backend
- **Runtime:** [Node.js](https://nodejs.org/) (ES Modules)
- **Web Framework:** [Express 5](https://expressjs.com/)
- **Real-time Server:** [Socket.IO 4.8](https://socket.io/)
- **Twitch Integration:** [@twurple/api](https://twurple.js.org/), `@twurple/auth`, `@twurple/eventsub-ws`
- **Spotify Integration:** Spotify Web API (OAuth2 PKCE flow & Playback API)
- **Database Architecture (Dual-layer):**
  - **Cloud Database:** [MongoDB Atlas](https://www.mongodb.com/) (จัดเก็บข้อมูลตั้งค่า, คิวเพลง, สถิติ, ประวัติการสุ่ม)
  - **Local Resilient Fallback:** Atomic JSON files (`safeWriteJson` / `safeReadJson`) ช่วยให้ระบบยังทำงานต่อได้ทันทีแม้เน็ตเวิร์กฐานข้อมูลขัดข้อง
- **Security & Performance:** [Helmet](https://helmetjs.github.io/), [express-rate-limit](https://github.com/express-rate-limit/express-rate-limit) (รองรับ Cloudflare real IP ผ่าน `cf-connecting-ip`), [compression](https://github.com/expressjs/compression), CORS

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
Solocast Web/
├── backend/
│   ├── data/                 # ไฟล์แคชข้อมูลและ Local Fallback Database (.json)
│   ├── public/
│   │   ├── assets/           # เสียงเอฟเฟกต์, รูปภาพ, ฟอนต์สำหรับ Widgets
│   │   └── widgets/          # โค้ดของแต่ละ Overlay Widget (HTML, CSS, JS, fields.json)
│   │       ├── custom-counter/
│   │       ├── dbd-perks/
│   │       ├── dbd-scoreboard/
│   │       ├── loyalty-card/
│   │       ├── random-killer/
│   │       ├── spotify-sr/
│   │       ├── twitch-shoutout/
│   │       └── valorant-agent/
│   ├── scripts/              # สคริปต์สำหรับ Scrape & Sync ข้อมูลเกม (DBD perks, Valorant agents)
│   ├── database.js           # ระบบเชื่อมต่อ MongoDB Atlas และซิงค์ข้อมูลกับ Local Files
│   ├── fileUtils.js          # เครื่องมืออ่าน/เขียนไฟล์ JSON แบบ Atomic ปลอดภัย
│   ├── spotify.js            # ตรรกะจัดการเชื่อมต่อ Spotify API, คิวเพลง, และการเล่นเพลง
│   ├── server.js             # เซิร์ฟเวอร์หลัก Express + Socket.IO + Twitch EventSub
│   ├── .env.example          # ตัวอย่างไฟล์ Environment Variables สำหรับ Backend
│   └── package.json
│
├── frontend/
│   ├── public/               # ไฟล์ Static assets, ภาพโปรโมต showcase
│   ├── src/
│   │   ├── assets/           # รูปภาพและไอคอนประจำ Frontend
│   │   ├── components/       # คอมโพเนนต์ UI (Navbar, Footer, TargetCursor, TiltCard, etc.)
│   │   ├── context/          # AuthContext (Twitch session) และ ThemeContext
│   │   ├── pages/
│   │   │   ├── Landing.jsx   # หน้าแรกแนะนำฟีเจอร์และ Showcase
│   │   │   ├── Dashboard.jsx # หน้าแดชบอร์ดหลักสำหรับตั้งค่าวิดเจ็ตทั้งหมด
│   │   │   ├── Dock.jsx      # หน้าควบคุมสำหรับ OBS Browser Dock
│   │   │   ├── Admin.jsx     # หน้าจัดการระบบสำหรับแอดมิน
│   │   │   ├── FAQ.jsx       # คำถามที่พบบ่อย
│   │   │   └── Support.jsx   # แบบฟอร์มแจ้งปัญหาการใช้งาน
│   │   ├── config.js         # จุดศูนย์กลาง API_BASE และ WS_BASE
│   │   ├── App.jsx           # App Routing
│   │   └── main.jsx          # จุดเริ่มต้นของ React App
│   ├── package.json
│   └── vite.config.js
│
├── package.json              # สคริปต์รวมสำหรับ Build และ Run ทั้งโปรเจกต์
└── README.md
```

---

## 🚀 การตั้งค่าและการเริ่มต้นใช้งาน (Getting Started)

### ความต้องการของระบบ (Prerequisites)
- [Node.js](https://nodejs.org/) v20 หรือสูงกว่า
- บัญชี [Twitch Developer Console](https://dev.twitch.tv/console/apps) สำหรับสร้าง Client ID และ Client Secret
- (ทางเลือก) บัญชี [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) สำหรับระบบ Spotify Song Request
- (ทางเลือก) [MongoDB Atlas Connection String](https://www.mongodb.com/) หากต้องการใช้ฐานข้อมูล Cloud

---

### การตั้งค่า Environment Variables

คัดลอกไฟล์ตัวอย่าง `.env.example` ในโฟลเดอร์ `backend/` แล้วสร้างเป็น `.env`:

```bash
cd backend
cp .env.example .env
```

แก้ไขค่าในไฟล์ `backend/.env`:

```env
# พอร์ตเซิร์ฟเวอร์
PORT=3000
NODE_ENV=development

# URL สำหรับเชื่อมต่อใน Development / Production
FRONTEND_URL=http://localhost:5173

# Twitch Developer Credentials
TWITCH_CLIENT_ID=your_twitch_client_id
TWITCH_CLIENT_SECRET=your_twitch_client_secret
TWITCH_REDIRECT_URI=http://localhost:3000/auth/twitch/callback
TWITCH_USER_ID=

# Spotify Developer Credentials (สำหรับระบบขอเพลง)
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/auth/spotify/callback

# คีย์ความปลอดภัยสำหรับ Admin
ADMIN_KEY=change_this_to_a_secure_admin_key
ADMIN_TWITCH_USERS=your_twitch_username

# MongoDB Atlas URI (หากไม่ใส่ ระบบจะใช้ Local JSON Files อัตโนมัติ)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fastchick?retryWrites=true&w=majority
```

---

### การรันในโหมด Development

คุณสามารถรัน Backend และ Frontend แยกกันเพื่อความสะดวกรวดเร็วในการเขียนโค้ดและใช้ Hot Module Replacement (HMR):

1. **รัน Backend:**
   ```bash
   cd backend
   npm install
   npm start
   ```
   *(Backend จะทำงานที่ `http://localhost:3000`)*

2. **รัน Frontend (ในอีก Terminal หนึ่ง):**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   *(Frontend จะทำงานที่ `http://localhost:5173`)*

---

### การ Build และ Deploy สำหรับ Production

เมื่อต้องการรวม Frontend ให้ Backend เสิร์ฟเป็น Single Production Service:

1. **Build Frontend และติดตั้ง Dependencies ทั้งหมดผ่านคำสั่งเดียวที่ Root:**
   ```bash
   npm run build
   ```
   *คำสั่งนี้จะทำการ build โค้ด frontend ไปไว้ที่ `frontend/dist` และเตรียมพร้อมให้ express เสิร์ฟแบบ production-grade พร้อมระบบ caching headers*

2. **เริ่มทำงาน Production Server:**
   ```bash
   npm start
   ```
   *(เข้าใช้งานระบบทั้งหมดได้ที่ `http://localhost:3000`)*

---

## 🔒 ระบบฐานข้อมูลและความปลอดภัย (Security & Data Resilience)

- **Dual-layer Database Architecture:**
  - โครงสร้างฐานข้อมูลทำงานแบบ Hybrid: เมื่อเชื่อมต่อ MongoDB Atlas สำเร็จ ระบบจะซิงค์ข้อมูลกับคลาวด์แบบอัตโนมัติ หากไม่มีการตั้งค่า `MONGODB_URI` ระบบจะปรับเข้าสู่โหมด Safe Local Flat-file Mode อัตโนมัติโดยไม่ทำให้เซิร์ฟเวอร์แคช
- **Rate Limiting & Proxy Trust:**
  - ติดตั้งตัวจำกัดอัตราการยิงรีเควสต์แยกตาม Real IP ของไคลเอนต์จริงผ่าน header `cf-connecting-ip` และ `x-forwarded-for` ป้องกันการโดนบล็อกพร้อมกันเมื่ออยู่หลัง Cloudflare หรือ Reverse Proxy
- **Iframe & OBS Compatibility:**
  - ปรับแต่ง Helmet Header และ Cross-Origin Resource Policy (CORP) ให้อนุญาตการโหลดวิดเจ็ตและพรีวิว iframe ใน OBS Studio และหน้า Dashboard ได้อย่างลื่นไหล ปลอดภัย

---

## 🔄 สคริปต์ซิงค์ข้อมูล (Data Scrapers & Sync)

โปรเจกต์มีสคริปต์สำหรับดึงข้อมูลเกมอัปเดตล่าสุด:

- **ซิงค์ข้อมูลเปิร์คและฆาตกร DBD จาก Wiki:**
  ```bash
  cd backend
  npm run sync:dbd
  ```
- **ซิงค์ข้อมูล Agent ของ Valorant:**
  ```bash
  cd backend
  node scripts/sync_valorant_agents.js
  ```

---

## 📄 License
ISC License © FASTCHICK / Solocast Web Team. All rights reserved.
