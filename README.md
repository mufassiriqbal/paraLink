# 🧠 ParaLink – AI-Powered Eye-Controlled Communication System

### 🌍 Thematic Area: Assistive Communication / AI for Accessibility  
**MVP Completion:** 85%  
**Team:** Team ParaLink  
**Event:** Uraan AI Techathon 1.0 – Ministry of Planning, Development & Special Initiatives, Government of Pakistan  

---

## 🚀 Project Overview

**ParaLink** is an **AI-powered communication and smart interaction system** designed to assist **paralyzed or motor-impaired individuals** in expressing their needs through **eye movements and blinks**.

The system integrates:
- **Eye-tracking & blink detection (via MediaPipe + OpenCV)**  
- **AI-generated Roman Urdu speech synthesis (via Groq API – Llama 3.1)**  
- **Voice output in Urdu** using Web Speech Synthesis  
- A **web-based interface** that runs entirely on the browser with camera access  

This project empowers individuals who cannot speak or move freely to **communicate effortlessly** and **control their environment independently**.

---

## 🎯 Problem Statement

Millions of people suffer from conditions such as **paralysis, ALS, or spinal cord injuries**, which restrict their ability to communicate.  
Existing assistive devices are often **expensive, limited to English**, and **not localized** for South Asian users.  

**ParaLink** provides a **low-cost, AI-enabled, and Urdu-capable** alternative — improving accessibility, affordability, and independence.

---

## 🧩 System Architecture

Camera Input → Eye Tracking (MediaPipe) → Blink Detection
→ Icon Selection (via Gaze) → AI Response Generation (Groq API)
→ Urdu Speech Output (Speech Synthesis)


---

## 🧠 Model Type & Tools

| Component | Technology / Model Used |
|------------|------------------------|
| Eye Tracking & Blink Detection | MediaPipe FaceMesh + OpenCV |
| AI Text Generation | Groq API (Llama-3.1-8B Instant) |
| Translation / Urdu Generation | Custom Prompt with Roman Urdu Output |
| Voice Synthesis | Web Speech API |
| Frontend | HTML, CSS, JavaScript |
| Backend (Optional Prototype) | Flask (Python) |
| Visualization | Webcam + Real-time Gaze Highlights |

---

## 🧪 Performance Metrics

| Metric | Description | Result |
|---------|--------------|--------|
| Blink Detection Accuracy | Accuracy of detecting blinks vs noise | **92%** |
| Gaze Tracking Stability | Accuracy of target fixation | **85%** |
| Response Time | Time to generate AI message | **< 1.5s** |
| Urdu Speech Naturalness | Subjective human rating | **8.7 / 10** |

📊 *(See confusion matrix and performance chart in the report file — ParaLink_UraanAI.docx)*

---

## 👨‍💻 Team Details

| Name | Role | Occupation |
|------|------|-------------|
| **Mufassir Iqbal** | Team Lead / ML Engineer |Student |
| Syed Ali | UI/UX Frontend |  Student |
| Muhammad Muaviya Jahangir | Backend Developer  | Student |


**Institute:** [Institute of computing KUST]  

**Country:** Pakistan 🇵🇰  

---

## ⚙️ Technical Environment & Reproducibility

**Requirements:**  
Create a virtual environment and install dependencies:

