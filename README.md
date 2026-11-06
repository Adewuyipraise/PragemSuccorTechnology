# Pragem Succor Technology

Welcome to the official repository for the **Pragem Succor Technology** website. We are a dynamic Media Group bridging the gap between creativity, technology, and education. We are your partner in Media Production, Training, Publishing, and Broadcasting.

## 🚀 Features

- **Modern UI/UX:** Built with React, Vite, and Tailwind CSS for a fast, responsive, and beautiful user experience.
- **Dynamic YouTube Integration:** Automatically fetches and displays the latest videos, current live streams, upcoming broadcasts, and public playlists directly from the Pragem Succor Technology YouTube channel.
- **In-App Video Player:** Past livestreams and uploaded videos can be watched directly on the website without redirecting to YouTube.
- **Smart Sorting:** Users can sort videos and past streams by Date (Newest/Oldest) or Title (A-Z).
- **"Coming Soon" States:** The Books and Blog pages are fully styled but locked with "Coming Soon" and "Sold Out" overlays until content is ready.
- **Contact Form:** Integrated with Netlify Forms for seamless message handling (no backend required).
- **Fully Responsive:** Optimized for mobile, tablet, and desktop viewing.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Netlify](https://www.netlify.com/)

---

## 💻 Local Development Setup

Follow these steps to get the project running on your local machine.

### 1. Clone the repository
```bash
git clone https://github.com/Adewuyipraise/PragemSuccorTechnology.git
cd PragemSuccorTechnology
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Environment Variables
The Video & Broadcast page relies on the YouTube Data API. You need to create a `.env` file in the root of your project.

Create the file:
```bash
touch .env
```

Add the following variables to your `.env` file:
```env
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
VITE_YOUTUBE_CHANNEL_ID=your_youtube_channel_id_here
```
*(Note: Never commit your `.env` file to GitHub. It is already included in `.gitignore`.)*

**How to get these keys:**
1. **Channel ID:** Go to YouTube -> Settings -> Advanced Settings -> Copy your Channel ID (starts with `UC...`).
2. **API Key:** Go to [Google Cloud Console](https://console.cloud.google.com/), create a project, enable **YouTube Data API v3**, and generate an API Key.

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The site will hot-reload as you edit files.

---

## 📦 Building & Deployment

This project is configured to be deployed seamlessly on **Netlify**.

### Method 1: Netlify Git Integration (Recommended)
1. Push your code to GitHub.
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **Add new site** -> **Import an existing project**.
4. Select your GitHub repository.
5. Set Build command to: `npm run build`
6. Set Publish directory to: `dist`
7. **Important:** Go to **Site settings > Environment variables** and add your `VITE_YOUTUBE_API_KEY` and `VITE_YOUTUBE_CHANNEL_ID`.
8. Click **Deploy**.

### Method 2: Manual Deploy
```bash
npm run build
```
Drag and drop the generated `dist` folder into the Netlify Drop interface.

*(Note: The project includes a `public/_redirects` file which ensures React Router works perfectly on Netlify without throwing 404 errors on refresh.)*

---

## 📝 Managing Website Content

### Updating the YouTube Channel
You do not need to change any code to update videos! Simply upload, schedule, or go live on your linked YouTube channel. The website will automatically fetch the new content (cached for 2 minutes to save API quota).


## 🔒 Security & Best Practices

- **API Keys:** Never hardcode API keys in your components. Always use the `.env` file.
- **Git:** Do not commit `node_modules`, `dist`, or `.env`. The `.gitignore` file is pre-configured to prevent this.
- **Netlify Forms:** The contact form is set up to capture submissions in your Netlify Dashboard under the "Forms" tab. No backend or email configuration is needed.

---

## 📄 License
© 2024 Pragem Succor Technology. All rights reserved.
```