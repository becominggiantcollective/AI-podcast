# ai-podcast-studio

Starter code and architecture for an automated, multi-agent AI-hosted podcast / livestream studio.

Overview
- Multi-agent LLM hosts with personalities
- TTS voices for audio hosting
- Optional AI-generated avatar visuals
- Orchestration server to schedule/run shows
- Integrations for guest calls, recording, and publishing

Getting started
1. Install dependencies: `npm install`
2. Create a .env with API keys (OPENAI_KEY, ELEVENLABS_KEY, SYNTHESIA_KEY, etc.)
3. Run dev server: `npm run dev`
4. See /docs for architecture, agent personalities, and sample episode flows.

Architecture
- /agents: prompt templates and personality configs
- /backend: orchestrator (API to start/stop shows, schedule jobs)
- /integrations: connectors for LLMs, TTS, avatars, streaming
- /studio: optional UI for live control and guest lobby

Contributing
- Please open issues for feature requests and bugs.

License
- MIT
