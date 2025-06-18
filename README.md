# 🎵 Indian Classical Music Explorer(Harmony ai)

A full-stack web application to **analyze**, **generate**, and **explore** the world of **Indian classical music**, blending the richness of tradition with the power of modern technology.

---

## ✨ About the Project

This project is a heartfelt tribute to the timeless legacy of Indian classical music, born out of our passion to **revive**, **preserve**, and **celebrate** its traditional roots.

We aim to bridge the gap between cultural heritage and modern innovation—bringing the soulful rhythms and intricate melodies of this ancient art form to the digital age.

> 🚀 **Version 2 coming soon** with expanded features, richer insights, and a deeper experience.

---

## 🚀 Features Overview

### 🔐 Authentication & Roles
- Integrated with [Clerk](https://clerk.com) for secure authentication.
- Role-based access:
  - **Admin**
  - **Creator**
  - **Listener**

### 🎧 Music Analysis
- Upload audio files to analyze:
  - 🎼 **Genre classification**
  - 🎻 **Instrument detection**
- Uses **Librosa** to extract tempo, pitch, chroma, etc.
- Powered by **custom machine learning models**.

### 🎼 Music Generation
- Generate new Indian classical music samples.
- Built using a **custom-trained generation model** that understands ragas and rhythmic patterns.

### 🔍 Music Explorer
- Browse curated tracks, explore ragas, thaats, instruments, and artist profiles.
- Rich metadata and easy-to-understand insights.

---

## 🧬 Tech Stack

| Layer     | Tech Stack                                      |
|-----------|-------------------------------------------------|
| Frontend  | Next.js, Tailwind CSS, Clerk Authentication     |
| Backend   | Flask, MongoDB                                  |
| ML Models | Custom genre/instrument classifiers, MusicGen   |
| Audio     | Librosa (Python) for feature extraction         |

---

## 🔁 App Workflow

1. **Sign Up/Login** via Clerk.
2. **Roles assigned** (default: listener).
3. Based on role:
   - 🎧 Analyze uploaded music.
   - 🎼 Generate new compositions.
   - 🔍 Explore musical content.
   - 🛠️ Admins/Creators can upload data and retrain models.

---

## 🖼️ UI Preview

### 🔍 Analyze Page

![Analyze Screenshot](https://github.com/user-attachments/assets/fb080ef4-eed0-4f9b-9dff-e90c22e28508)

### 🎶 Generate Page

![Generate Screenshot](https://github.com/user-attachments/assets/734fe622-6d20-4520-9741-324b65b7a40e)

---

## 🎥 Demo Video

[![Watch the demo](https://img.youtube.com/vi/6oN-zqNMjyo/0.jpg)](https://youtu.be/6oN-zqNMjyo)

> 📺 Click to watch the walkthrough on YouTube

---

## 🛠️ Setup Instructions

### 🔧 Prerequisites
- Python `3.10+`
- Node.js `18+`
- MongoDB (local or via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

### 🚀 Getting Started

#### Clone the Repository
```bash
git clone https://github.com/Omesh2004/GDGMusic.git
cd GDGMusic
🔌 Backend Setup (Flask)
bash
Copy
Edit
cd server
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
python app.py
💻 Frontend Setup (Next.js)
bash
Copy
Edit
cd ../client
npm install
npm run dev
🔐 Environment Variables
In the /client folder, create a .env.local file:

env
Copy
Edit
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
NEXT_PUBLIC_API_URL=http://127.0.0.1:5000
🙌 Join the Journey
Let’s rediscover the soul of Indian classical music, together.
Help us reimagine, revive, and celebrate its legacy in the modern world.

🎉 Stay tuned for Version 2 — with more ragas, deeper insights, and magical melodies.
