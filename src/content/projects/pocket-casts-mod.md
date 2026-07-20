---
title: "Pocket Casts Mod"
subtitle: "Ad-Free Podcast Pipeline"
description: "I built a self-hosted pipeline that strips ads from my Pocket Casts subscriptions. It downloads episodes, detects and removes ads, and syncs the cleaned audio back to every device via the Pocket Casts Plus cloud files feature."
thumbnail: "/images/portfolio/pocketcasts-dashboard.png"
detailImages:
  - "/images/portfolio/pocketcasts-history.png"
contributions: "I built this tool because I was tired of ads cutting into every episode I listened to. I started from MinusPod, an open-source project, and customized it for Pocket Casts Plus by using its cloud files feature to upload and sync the cleaned audio. I used AI assistance for the coding while I drove the architecture and design, integrated the Pocket Casts API for auth and episode listing, added a Flask dashboard with live log streaming and service controls, made the transcription backend portable across macOS and Linux with whisper.cpp, an open-source speech recognition engine, and used MinusPod patching with adjustable windows and padding. A searchable history tracks every episode I process, with ad counts and time saved."
tools: "Python, Flask, the Pocket Casts API, MinusPod, whisper.cpp, Ollama, and FFmpeg."
tags: ["Python", "LLM", "Audio Processing", "DevOps"]
order: 3
published: true
---

I made this tool because I was tired of ads cutting into every episode I listened to. It builds on [MinusPod](https://github.com/ttlequals0/minuspod), an open-source project, and I customized it for Pocket Casts Plus by using its cloud files feature to sync the cleaned audio. Transcription runs locally with whisper.cpp, an open-source speech recognition engine, while ad detection uses a local Ollama model (a tool for running AI models locally) or a cloud AI service such as OpenRouter, OpenAI, or Groq. The Flask dashboard gives me a podcast-centric view with stat cards, per-episode queue controls, a backend services panel, and a searchable history of every episode I process, including time saved and ad counts.
