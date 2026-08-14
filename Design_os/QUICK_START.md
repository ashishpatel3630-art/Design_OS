# 🚀 Quick Start Guide

## 1️⃣ Start Development Server

```bash
cd /Users/aashishmewada/Desktop/Design_OS/Design_os
npm run dev
```

**Output:**
```
  VITE v8.2.1  ready in 500ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

## 2️⃣ Test the Flow

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Visit `http://localhost:3000` | Landing page loads |
| 2 | Click "Get Started" | Redirects to login |
| 3 | Enter credentials | Email: `demo@example.com`<br/>Password: `password` |
| 4 | Click "Sign In" | Redirects to dashboard |
| 5 | Refresh page | Still logged in ✓ |
| 6 | Click user menu | Shows logout option |
| 7 | Click "Logout" | Back to landing page |

## 3️⃣ Folder Structure at a Glance

```
src/
├── pages/
│   ├── Landing.jsx (home page)
│   ├── Login.jsx (login form)
│   └── Dashboard.jsx (protected)
│
├── context/
│   └── AuthContext.jsx (auth state)
│
├── components/
│   ├── ProtectedRoute.jsx (route guard)
│   ├── layout/Navbar.jsx (with auth)
│   ├── hero/ (landing hero)
│   ├── sections/ (landing sections)
│   └── dashboard/ (dashboard UI)
│
└── ... (other components, styles, data)
```

## 4️⃣ Key Files to Know

| File | Purpose |
|------|---------|
| `src/App.jsx` | Routes & navigation |
| `src/context/AuthContext.jsx` | Login/logout logic |
| `src/components/ProtectedRoute.jsx` | Requires login |
| `src/pages/Landing.jsx` | Home page |
| `src/pages/Login.jsx` | Login form |
| `src/pages/Dashboard.jsx` | Main app |

## 5️⃣ Common Tasks

### Check if user is logged in
```javascript
import { useAuth } from "../context/AuthContext";

function MyComponent() {
  const { user } = useAuth();
  
  if (user) {
    return <div>Welcome {user.name}!</div>;
  }
  return <div>Not logged in</div>;
}
```

### Logout programmatically
```javascript
const { logout } = useAuth();

function LogoutButton() {
  return <button onClick={logout}>Logout</button>;
}
```

### Protect a route
```javascript
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

## 6️⃣ Build & Deploy

### Production build
```bash
npm run build
```

### Preview build locally
```bash
npm run preview
```

### Check for errors
```bash
npm run lint
```

## 7️⃣ What's New

✨ **New Pages:**
- Landing page (/)
- Login page (/login)

🔐 **Auth System:**
- Login/logout
- Session persistence
- Protected routes

🎨 **UI Updates:**
- Updated navbar with auth buttons
- Logout button in dashboard topbar
- Auth-aware button states

📚 **Documentation:**
- COMPLETE_SETUP.md (detailed)
- FLOW_DIAGRAM.md (visual)
- CLEANUP_SUMMARY.md (what changed)
- This file (quick reference)

## 8️⃣ Troubleshooting

**Problem:** "Cannot find module" error
```bash
npm install
npm run dev
```

**Problem:** Port 3000 already in use
```bash
npm run dev -- --port 3001
```

**Problem:** Styles not loading
```bash
# Clear cache and rebuild
rm -rf dist node_modules/.vite
npm run dev
```

**Problem:** Not staying logged in after refresh
- Check browser's localStorage (F12 → Application → Local Storage)
- Make sure cookies aren't being cleared

## 9️⃣ Demo Credentials

```
Email: demo@example.com
Password: password
```

Any email/password combination will work (it's a demo).

## 🔟 Next Steps

1. ✅ Start server: `npm run dev`
2. ✅ Test the flow using quick start guide
3. ✅ Read COMPLETE_SETUP.md for detailed info
4. ✅ Connect to real backend later

---

**Ready to build something amazing!** 🎉
