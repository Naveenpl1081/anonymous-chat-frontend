# Anonymous Chat — Frontend

Real-time anonymous chat frontend built with React and Socket.io. Users can instantly connect with a random stranger and chat anonymously with no login required.

---

## Tech Stack

- React
- Socket.io-client
- Vite
- CSS

---

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ChatBox.jsx      # Displays chat messages
│   │   ├── InputBox.jsx     # Message input and send button
│   │   └── StatusBar.jsx    # Shows connection status
│   ├── socket/
│   │   └── socket.js        # Socket.io client connection
│   ├── styles/
│   │   └── style.css        # App styles
│   └── App.jsx              # Main app component
├── index.html
├── package.json
└── vite.config.js
```

---

## Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/anonymous-chat-frontend.git
cd anonymous-chat-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Update socket URL

Open `src/socket/socket.js` and make sure the URL points to your local backend:

```js
const socket = io("http://localhost:3000");
```

### 4. Start the app

```bash
npm run dev
```

App will run on `http://localhost:5173`

> Make sure the backend server is also running locally before testing.

---

## How It Works

1. User opens the app and clicks **Start Chat**
2. App connects to the backend and joins the matchmaking queue
3. When two users are waiting, they are paired together
4. Both users can send and receive messages in real time
5. Either user can click **Skip** to end the chat and find a new partner
6. If a partner disconnects, the user is notified and returned to searching

---

## Status States

| Status     | Meaning                        |
|------------|--------------------------------|
| Idle       | App just opened, not searching |
| Searching  | Looking for a partner          |
| Connected  | Paired with a partner          |

---

## Deployment

This frontend is deployed on **Vercel**.

- Live URL: `https://anonymous-chat-frontend-pearl.vercel.app/`
- Backend: `https://anonymous-chat-backend-2.onrender.com`

For production, the socket URL in `src/socket/socket.js` is set to the live backend URL on Render.

> Vercel auto-deploys every time code is pushed to the main branch on GitHub.