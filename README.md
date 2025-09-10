# React Word Memory App

[![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react&logoColor=white)](https://reactjs.org/) 
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE) 
[![Netlify Status](https://img.shields.io/badge/Netlify-Deploy-informational?logo=netlify&logoColor=white)](https://app.netlify.com/)

A full-featured word memorization app built with React. The app helps users learn advanced English vocabulary through spaced repetition, gamification, and local data persistence. It works on both desktop and mobile and can be deployed to the web.

> **Note:** This was a small project I built to learn and practice working with React.

---

## 📦 Features
- Daily scheduling of words to practice  
- Local data persistence using `localStorage`  
- Streaks and progress tracking for motivation  
- Responsive design for desktop and mobile  

---

## 🛠️ Installation

**1. Clone the repository:**
```bash
git clone https://github.com/AsinOmal/React-word-memory-app.git
cd React-word-memory-app
````

**2. Install the dependencies:**

```bash
npm install
```

**3. Run the project locally:**

```bash
npm run dev
```

The app will be available at `http://localhost:5173/` (default Vite port).

---

## ⚙️ Usage

* Open the app in your browser.
* Practice the scheduled vocabulary words for the day.
* Progress and streaks are saved automatically in your browser.

---

## 🧩 Project Structure

```
React-word-memory-app/
├── public/        # Static assets
├── src/           # Main source code
│   ├── components # React components
│   ├── layouts    # Layout components
│   ├── utils      # Utility functions and custom hooks
│   └── App.jsx    # Main application file
├── package.json   # Project configuration
└── README.md      # Documentation
```

---

## 🔑 Environment Variables

This project does not require external API keys or environment variables. All data is stored locally in the browser.

---

## 🚀 Deployment

You can deploy the app easily to hosting platforms such as **Netlify** or **Vercel**.

For Netlify:

1. Push your code to GitHub.
2. Connect your repository to Netlify.
3. Set build command:

   ```bash
   npm run build
   ```
4. Set publish directory:

   ```bash
   dist
   ```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Added feature"`)
4. Push to branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
