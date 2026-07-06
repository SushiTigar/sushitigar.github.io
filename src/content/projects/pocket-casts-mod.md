---
title: "Pocket Casts Mod"
subtitle: "Ad-Free Podcast Pipeline"
description: "Built a self-hosted ad-removal pipeline integrating with Pocket Casts. Downloads podcast episodes, strips ads using local LLM detection (Ollama or cloud API) via MinusPod, transcribes with whisper.cpp, and syncs the clean files back to the user's Up Next queue across all devices."
thumbnail: "/images/portfolio/pocketcasts-dashboard.png"
detailImages:
  - "/images/portfolio/pocketcasts-history.png"
contributions: "I built this entirely — Pocket Casts API integration for auth, episode listing, custom-file uploads, and Up Next queue sync; a Flask dashboard with real-time log streaming and service management; portable transcription backends supporting whisper.cpp natively on macOS (Metal) and Linux (CUDA/CPU); MinusPod patching for configurable window sizes and ad padding; and a searchable, exportable processing history with ad counts and time saved."
tools: "Python, Flask, Pocket Casts API, MinusPod, whisper.cpp, Ollama, FFmpeg, JavaScript, HTML/CSS."
tags: ["Python", "LLM", "Audio Processing", "DevOps"]
order: 3
published: true
---

This project sits between Pocket Casts and your podcasts and strips ads from everything you already subscribe to. Transcription runs locally on your machine via whisper.cpp; ad detection can use local Ollama or a cloud LLM API (OpenRouter, OpenAI, Groq, etc.). The Flask dashboard provides a podcast-centric view with stat cards, per-episode queue controls, a services panel for managing backends, and a history view of every processed episode with time saved and ad counts.
