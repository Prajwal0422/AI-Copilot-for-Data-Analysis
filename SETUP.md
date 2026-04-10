# 🚀 Setup Guide

## Prerequisites

- Python 3.9 or higher
- Git
- OpenAI API key (get from https://platform.openai.com/)

## Installation Steps

### 1. Clone the repository
```bash
git clone https://github.com/Prajwal0422/AI-Copilot-for-Data-Analysis.git
cd AI-Copilot-for-Data-Analysis
```

### 2. Create virtual environment
```bash
python -m venv venv

# On Windows
venv\Scripts\activate

# On Mac/Linux
source venv/bin/activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure environment variables
```bash
# Copy the example env file
copy .env.example .env

# Edit .env and add your OpenAI API key
```

### 5. Run the application
```bash
cd backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### 6. Test the API
Open your browser and go to:
- API: http://localhost:8000
- Interactive docs: http://localhost:8000/docs
- Alternative docs: http://localhost:8000/redoc

## Project Structure

```
AI-Copilot-for-Data-Analysis/
├── backend/
│   └── app/
│       ├── api/          # API endpoints
│       ├── core/         # Configuration
│       ├── models/       # Data models
│       ├── services/     # Business logic
│       └── main.py       # FastAPI app
├── data/                 # Data files
├── notebooks/            # Jupyter notebooks
├── tests/                # Test files
├── .env.example          # Environment template
├── .gitignore           # Git ignore rules
├── requirements.txt      # Python dependencies
└── README.md            # Project overview
```

## Next Steps

After setup, you can:
1. Test the health endpoint
2. Explore the API documentation
3. Start building features

## Troubleshooting

### Port already in use
```bash
# Use a different port
uvicorn app.main:app --reload --port 8001
```

### Module not found
```bash
# Make sure virtual environment is activated
# Reinstall dependencies
pip install -r requirements.txt
```
