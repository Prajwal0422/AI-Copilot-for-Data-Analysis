# AI Data Copilot - Frontend

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (#06b6d4) - Main accent color
- **Secondary**: Purple (#a855f7) - Secondary accent
- **Background**: Dark slate with gradient
- **Glass Effects**: Glassmorphism with backdrop blur

### Key Features
- **Three-panel layout**: Sidebar, Chat, Insights
- **Real-time workflow visualization**: Shows AI pipeline steps
- **Smooth animations**: Framer Motion throughout
- **Responsive design**: Adapts to different screen sizes

## 🚀 Getting Started

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Structure

```
frontend/
├── app/
│   ├── layout.tsx       # Root layout with dark theme
│   ├── page.tsx         # Main page with 3-panel layout
│   └── globals.css      # Global styles & animations
├── components/
│   ├── TopBar.tsx       # Top navigation bar
│   ├── Sidebar.tsx      # Dataset management
│   ├── ChatPanel.tsx    # AI chat interface
│   └── InsightsPanel.tsx # Workflow & visualizations
└── lib/
    └── utils.ts         # Utility functions
```

## 🎯 Next Steps

- [ ] Connect to FastAPI backend
- [ ] Implement file upload
- [ ] Add real-time charts
- [ ] Integrate LangChain responses
