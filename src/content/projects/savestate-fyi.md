---
title: "SaveState.fyi"
subtitle: "Live Production Site"
description: "Built a live production games media monitoring platform (savestate.fyi) that aggregates publication RSS feeds, social sources (Reddit, Bluesky, Steam, YouTube, Twitch), and editorial tooling into a fast homepage dashboard with sentiment analysis, review scores, platform charts, momentum tracking, and dedicated game detail pages."
thumbnail: "/images/portfolio/savestate-home.png"
detailImages:
  - "/images/portfolio/savestate-game.png"
contributions: "I designed and built the entire platform from scratch: backend API (FastAPI), frontend (vanilla HTML/CSS/JS), database schema and graph layer (Aerospike + Aerospike Graph), ingestion pipeline for RSS and social sources, LLM-assisted sentiment and audit tooling, Nginx configuration with microcaching, Docker Compose orchestration, and CI/CD. The site serves under a <20ms p50 latency budget."
tools: "FastAPI for the backend API, Aerospike + Aerospike Graph for storage, vanilla HTML/CSS/JS for the frontend, Nginx with microcaching, Docker Compose, Python, and a Devvit Reddit bridge app."
tags: ["FastAPI", "Data Pipeline", "Full-Stack", "DevOps"]
order: 1
published: true
---

[SaveState](https://savestate.fyi) is a live production games media monitoring platform at [savestate.fyi](https://savestate.fyi). The homepage aggregates publication RSS feeds and social sources (Reddit, Bluesky, Steam, YouTube, Twitch) into a fast dashboard with lead stories, cross-source story clusters, review and store pills, momentum leaderboards, and platform charts. Dedicated game pages show publication timelines, sentiment gauges, review scores (Metacritic, OpenCritic, Steam), live player counts, and HowLongToBeat estimates. The admin console provides editorial CMS, sentiment corrections, and automated LLM audit runs. The stack is FastAPI, Aerospike Graph, vanilla HTML/CSS/JS, Nginx with microcaching, and Docker Compose, serving under a 20ms p50 latency budget.
