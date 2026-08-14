# Application Flow Diagram

## User Journey

```
┌─────────────────────────────────────────────────────────────┐
│                     DESIGN OS APPLICATION FLOW              │
└─────────────────────────────────────────────────────────────┘

START
  │
  ▼
┌──────────────────────────────────────────────────────────────┐
│  LANDING PAGE (/)                                            │
│  ├─ Hero Section                                             │
│  ├─ Features Showcase                                        │
│  ├─ Design Tools Preview                                     │
│  └─ Testimonials                                             │
│                                                               │
│  Navigation Options:                                         │
│  ├─ "Get Started" Button → Login                            │
│  └─ "Login" Link → Login                                    │
└──────────────────────────────────────────────────────────────┘
  │
  ▼
┌──────────────────────────────────────────────────────────────┐
│  LOGIN PAGE (/login)                                         │
│  ├─ Email Input                                              │
│  ├─ Password Input                                           │
│  ├─ Demo Credentials                                         │
│  └─ Back to Home Link                                        │
│                                                               │
│  Credentials:                                                │
│  ├─ Email: demo@example.com                                 │
│  └─ Password: password                                      │
└──────────────────────────────────────────────────────────────┘
  │
  │ [AuthContext.login() called]
  │
  ▼
┌──────────────────────────────────────────────────────────────┐
│  PROTECTED ROUTE CHECK                                       │
│  ├─ Check localStorage for user data                        │
│  ├─ Validate authentication state                           │
│  └─ Display loading state                                    │
└──────────────────────────────────────────────────────────────┘
  │
  │ [User Authenticated ✓]
  │
  ▼
┌──────────────────────────────────────────────────────────────┐
│  DASHBOARD PAGE (/dashboard)                                 │
│  ├─ Sidebar Navigation                                       │
│  ├─ Top Navigation Bar                                       │
│  │   ├─ Search                                               │
│  │   ├─ Create Button                                        │
│  │   ├─ Notifications                                        │
│  │   └─ User Menu (with Logout)                             │
│  ├─ Dashboard Header                                         │
│  ├─ Quick Actions                                            │
│  ├─ Recent Projects                                          │
│  └─ Activity Feed                                            │
│                                                               │
│  Sub-routes:                                                 │
│  └─ /dashboard/colors → Color Realm Tool                    │
└──────────────────────────────────────────────────────────────┘
  │
  │ [Click Logout]
  │
  ▼
┌──────────────────────────────────────────────────────────────┐
│  LOGOUT                                                      │
│  ├─ Clear user from context                                 │
│  ├─ Remove from localStorage                                │
│  └─ Redirect to Landing Page                               │
└──────────────────────────────────────────────────────────────┘
  │
  ▼
  [Loop back to Landing Page]


## Route Protection

┌─────────────────────────────────────────────────────────────┐
│                    ROUTE PROTECTION LOGIC                   │
└─────────────────────────────────────────────────────────────┘

  PUBLIC ROUTES (No Auth)
  │
  ├─ / (Landing)
  │  └─ No protection, always accessible
  │
  └─ /login (Login)
     └─ No protection, always accessible


  PROTECTED ROUTES (Auth Required)
  │
  ├─ /dashboard (Dashboard)
  │  └─ ProtectedRoute wrapper
  │     ├─ Check: user exists?
  │     ├─ No → Redirect to /login
  │     └─ Yes → Allow access
  │
  └─ /dashboard/* (All Dashboard Sub-routes)
     └─ Same protection as parent


## Component Hierarchy

App.jsx (Main Router)
├── Landing.jsx (Public)
│   ├── Navbar
│   ├── Hero
│   ├── Features
│   ├── DesignTools
│   ├── Showcase
│   ├── Testimonials
│   └── Footer
│
├── Login.jsx (Public)
│   └── Login Form
│
└── Dashboard.jsx (Protected)
    ├── DashboardSidebar
    ├── DashboardTopbar (with Logout)
    ├── DashboardHeader
    ├── QuickActions
    ├── RecentProjects
    └── Activity


## Authentication State Management

┌─────────────────────────────────────────────────────────────┐
│               AUTHCONTEXT STATE FLOW                        │
└─────────────────────────────────────────────────────────────┘

Initial State
│
├─ user: null
├─ loading: true
└─ Functions: login(), logout()

       │
       ▼
Check localStorage on Mount
│
├─ Found → Set user (restore session)
└─ Not Found → Keep user as null

       │
       ▼
User Clicks Login
│
├─ Validate credentials
├─ Call login(userData)
├─ Save to localStorage
└─ Redirect to /dashboard

       │
       ▼
User Clicks Logout
│
├─ Call logout()
├─ Clear from context
├─ Remove from localStorage
└─ Redirect to /login
```

## Unused/Cleaned Files

- ✅ `src/pages/Home.jsx` - Removed (replaced with Landing.jsx)
- Empty components that had no functionality have been organized

## Summary

✅ **Clean Flow**: Landing → Login → Dashboard  
✅ **Auth Protection**: Only authenticated users can access dashboard  
✅ **Session Persistence**: Users stay logged in across page refreshes  
✅ **Easy Logout**: Available from navbar and dashboard topbar  
✅ **Responsive Navigation**: All buttons and links work correctly  
