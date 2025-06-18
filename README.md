🎵 Indian Classical Music Explorer


A full-stack web application built to help users analyze, generate, and explore the world of Indian classical music, combining tradition with technology.

✨ About the Project
This project is a tribute to the timeless legacy of Indian classical music, driven by our passion to revive and celebrate its traditional roots.

We aim to bridge the gap between heritage and innovation—making the soulful rhythms and intricate melodies of this ancient art form accessible to the modern world.

🚀 Version 2 coming soon with expanded features, richer insights, and an even more immersive experience.

🚀 Features Overview
🔐 Authentication & Roles
Integrated with Clerk for secure authentication.

Role-based access:

Admin

Creator

Listener

🎧 Music Analysis
Upload audio to analyze genre, instrument, and musical features.

Uses Librosa to extract features (tempo, pitch, chroma, etc.).

Powered by custom ML models:

🎼 Genre Classification

🎻 Instrument Detection

🎼 Music Generation
Generate new Indian classical samples.

Backed by a custom-trained generation model that understands ragas and rhythmic patterns.

🔍 Music Explorer
Discover curated tracks, ragas, instruments, and artists.

Explore the rich metadata and heritage of Indian classical music.

🧬 Tech Stack
Layer	Tech Stack
Frontend	Next.js, Tailwind CSS, Clerk Authentication
Backend	Flask, MongoDB
ML Models	Custom genre/instrument classifiers, MusicGen
Audio	Librosa (Python) for feature extraction

🔁 App Workflow
User Sign Up/Login via Clerk.

Roles assigned dynamically (default: listener).

Based on role, user can:

Analyze uploaded music.

Generate new compositions.

Explore traditional musical knowledge.

Admin/Creators can upload new datasets and retrain models.

🖼️ UI Preview
🔍 Analyze Page


🎶 Generate Page


🎥 Demo Video


📺 Click the image to watch the full walkthrough on YouTube.

🛠️ Setup Instructions
🔧 Prerequisites
Python 3.10+

Node.js 18+

MongoDB (local or MongoDB Atlas)

🚀 Getting Started
bash
Copy
Edit
# Clone the repository
git clone https://github.com/your-username/indian-classical-music-explorer.git
cd indian-classical-music-explorer
🔌 Backend Setup (Flask)
bash
Copy
Edit
cd server
python -m venv venv

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
🛠️ Create a .env.local file in the /client directory with the following:

env
Copy
Edit
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
NEXT_PUBLIC_API_URL=http://127.0.0.1:5000
🙌 Join the Journey
Help us reimagine, revive, and celebrate Indian classical music.
✨ Stay tuned for more in Version 2!
