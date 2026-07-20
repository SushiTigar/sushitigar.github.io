---
title: "SaveState.fyi"
subtitle: "Gaming News Aggregator"
description: "I built SaveState.fyi as an all-in-one gaming news aggregator that pulls publication RSS feeds and social sources like Reddit, Bluesky, Steam, YouTube, and Twitch into one fast dashboard with sentiment analysis, review scores, platform charts, and momentum tracking, plus a dedicated page for every game."
thumbnail: "/images/portfolio/savestate-home.png"
detailImages:
  - "/images/portfolio/savestate-game.png"
contributions: "I built SaveState from scratch because I wanted one place to follow games news across every source I read. I designed the architecture and the whole experience myself, and I used AI assistance for the coding, from the FastAPI backend (a Python web framework) and Aerospike Graph data layer (a graph database) to the vanilla HTML, CSS, and JS frontend. I created the ingestion pipeline that pulls RSS feeds and social sources, added AI-assisted sentiment and audit tooling, and set up Nginx microcaching with Docker Compose for deployment. The result is a site that stays fast, serving responses in under 20 milliseconds."
tools: "FastAPI, Aerospike Graph, vanilla HTML, CSS, and JS, Nginx, and Docker Compose."
tags: ["FastAPI", "Data Pipeline", "Full-Stack", "DevOps"]
order: 1
published: true
---

I created SaveState because I wanted a single home for all the games news I was already reading across different sites. The homepage brings publication RSS feeds and social sources such as Reddit, Bluesky, Steam, YouTube, and Twitch together into a fast dashboard of lead stories, cross-source story clusters, review and store pills, momentum leaderboards, and platform charts. Each game page shows publication timelines, sentiment gauges, review scores from Metacritic, OpenCritic, and Steam, live player counts, and HowLongToBeat estimates. I also built an admin console for editorial CMS, sentiment corrections, and automated AI audits.
