<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>

<body>

<h1>Smart Resume Analyzer</h1>

<p>
Smart Resume Analyzer is a full-stack web application that analyzes resumes
against selected job roles and provides an ATS-like evaluation including skill
matching, missing skills, and improvement suggestions.
</p>

<p>
The project is built using FastAPI for backend processing and a lightweight
HTML/CSS frontend for user interaction. The entire application is containerized
using Docker, making it easy to deploy and run consistently across different
environments.
</p>

<hr>

<h2>Project Objective</h2>

<p>
Many students and job seekers face resume rejection due to missing keywords,
skills mismatch, or poorly structured resumes. This system helps users understand:
</p>

<ul>
    <li>Why their resume may get rejected</li>
    <li>Which skills are missing for a chosen role</li>
    <li>How strong their resume is for that role</li>
    <li>Suggestions to improve resume quality</li>
</ul>

<hr>

<h2>Project Demo</h2>

<p>
  This demo video shows the working of the Smart Resume Analyzer web application.
  It demonstrates how a user can select a job role, upload a resume, and receive
  an automated evaluation including resume score, detected skills, missing skills,
  and suggestions for improvement.
</p>
<p>
  <a href="https://drive.google.com/file/d/1nk_DDEJ5uxwRQRyc-P61pGcAmvgyqCFs/view?usp=sharing" target="_blank">
    Watch Demo Video
  </a>
</p>

<h2>Live Application</h2>

<p>
  You can access the live deployed version of the Smart Resume Analyzer using the link below.
  The website allows users to select a job role, upload a resume, and receive an automated
  analysis including resume score, detected skills, missing skills, and improvement suggestions.
</p>

<p>
  <a href="https://cv2analyzer.netlify.app/" target="_blank">
    Open Live Resume Analyzer Website
  </a>
</p>


<h2>Features</h2>

<ul>
    <li>Resume upload using PDF files</li>
    <li>Role-based skill evaluation</li>
    <li>Automatic skill matching</li>
    <li>Missing skill detection</li>
    <li>Resume score calculation</li>
    <li>Improvement suggestions</li>
    <li>Simple professional UI</li>
    <li>Docker-based deployment</li>
</ul>

<hr>

<h2>How the System Works</h2>

<ol>
    <li>User opens the web interface.</li>
    <li>User selects a job role.</li>
    <li>User uploads a resume PDF.</li>
    <li>The resume is sent to the backend API.</li>
    <li>Backend extracts text from the resume.</li>
    <li>Skills are compared with role requirements.</li>
    <li>A score is calculated based on matching skills.</li>
    <li>Missing skills and suggestions are generated.</li>
    <li>Results are displayed to the user.</li>
</ol>

<hr>

<h2>Project Architecture</h2>

<pre>
User Browser
     ↓
Frontend (HTML/CSS UI)
     ↓
FastAPI Backend
     ↓
Resume Analyzer Engine
     ↓
Skill Matching & Scoring
</pre>

<hr>

<h2>Technology Stack</h2>

<ul>
    <li>Backend: FastAPI (Python)</li>
    <li>Frontend: HTML, CSS, JavaScript</li>
    <li>PDF Processing: PyPDF2</li>
    <li>Containerization: Docker</li>
    <li>Deployment: Docker Compose</li>
</ul>

<hr>

<h2>Project Structure</h2>

<pre>
resume-analyzer/
│
├── backend/
│   ├── main.py
│   ├── analyzer.py
│   ├── roles.py
│   ├── utils.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── resumes/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── Dockerfile
│
└── docker-compose.yml
</pre>

<hr>

<h2>Running the Project Locally</h2>

<h3>Prerequisites</h3>

<ul>
    <li>Docker installed</li>
    <li>Docker Compose installed</li>
</ul>

<h3>Steps</h3>

<pre>
docker-compose up --build
</pre>

After startup:

<ul>
    <li>Frontend: http://localhost:3000</li>
    <li>Backend API Docs: http://localhost:8000/docs</li>
</ul>

<hr>

<h2>Resume Scoring Logic</h2>

<p>
Each role contains predefined required skills. The system checks which skills
appear in the resume text and calculates a score:
</p>

<pre>
Score = (Matched Skills / Total Required Skills) × 100
</pre>

<p>
Suggestions are generated when important resume elements are missing, such as:
</p>

<ul>
    <li>Project experience</li>
    <li>Measurable achievements</li>
</ul>

<hr>

<h2>Use Cases</h2>

<ul>
    <li>Students preparing resumes for internships</li>
    <li>Job seekers improving resume quality</li>
    <li>College placement preparation</li>
    <li>Role-based resume evaluation</li>
</ul>

<hr>

<h2>Possible Future Improvements</h2>

<ul>
    <li>Job description matching</li>
    <li>AI-based skill recommendations</li>
    <li>Resume ranking system</li>
    <li>User login and resume history</li>
    <li>Advanced ATS keyword scoring</li>
</ul>

<hr>

<h2>Author</h2>

<p>
Developed as a practical full-stack project demonstrating backend API design,
file processing, skill analysis logic, and containerized deployment suitable
for internship and entry-level software engineering roles.
</p>

</body>
</html>
