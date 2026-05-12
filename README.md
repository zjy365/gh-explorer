# GhExplorer

> **AI-powered CLI and agent skill for analyzing GitHub trending repositories and URL metadata**

GhExplorer combines the power of AI with web scraping to give developers meaningful insights about URLs and GitHub repositories. Use it directly from the terminal, or install the bundled agent skill so your AI coding agent can quickly fetch and summarize GitHub Trending repositories for you.

## 🚀 Core Features

- **GitHub Trends**: Track trending repositories by language, time period, and topics
- **URL Analysis**: Extract metadata from any URL with optional AI-powered insights
- **Multiple Output Formats**: Support for JSON, Table, and Markdown formats
- **Intelligent Filtering**: Focus on repositories relevant to your interests
- **AI-Powered Analysis**: Generate summaries, extract key points, and categorize content
- **Agent Skill Support**: Install as a skill so agents can check GitHub Trending with `npx`

## ⚡ Quick Start

Use directly from the terminal:

```bash
npx gh-explorer
```

Or install the agent skill:

```bash
npx skills add zjy365/gh-explorer
```

Then ask your agent:

```text
Use $github-trending to show me today's top GitHub Trending repositories.
```

## 📦 Installation

```bash
npm install -g gh-explorer

pnpm add -g gh-explorer

# Or with yarn
yarn global add gh-explorer

# Or use npx without installing
npx gh-explorer
```

## 📝 Usage

### Agent Skill

```bash
Use $github-trending to show me today's top GitHub Trending repositories.
```

### GitHub Trending

```bash
# View today's trending repositories
gh-explorer

# Using npx
npx gh-explorer

# Filter by language and time period
gh-explorer trending --language javascript --since weekly
npx gh-explorer trending --language javascript --since weekly

# Get top 10 repositories only
gh-explorer trending --limit 10

# Focus on specific topics
gh-explorer trending --topics "machine-learning,ai"

# Save as markdown
gh-explorer trending --format markdown --output trends.md
```

### URL Analysis

```bash
# Basic URL analysis
gh-explorer url https://github.com/tj/commander.js
npx gh-explorer url https://github.com/tj/commander.js

# Get markdown output
gh-explorer url https://github.com/tj/commander.js --format markdown

# Save analysis to file
gh-explorer url https://github.com/tj/commander.js --output commander-analysis.json

# Deep analysis with AI enhancement
gh-explorer url https://github.com/tj/commander.js --depth deep --ai
```

## 🛠️ Configuration

GhExplorer supports a configuration file at `~/.gh-explorer/config.json` where you can set defaults:

```json
{
  "github": {
    "defaultPeriod": "daily",
    "defaultLimit": 25
  },
  "output": {
    "defaultFormat": "table",
    "colorEnabled": true
  },
  "ai": {
    "enabled": true,
    "apiKey": "your-api-key",
    "baseURL": "https://api.openai.com/v1",
    "defaultModel": "gpt-4o-mini",
    "summaryLength": "medium"
  },
  "cache": {
    "enabled": true,
    "ttl": 3600,
    "maxSize": 100
  }
}
```

### AI Configuration

To use AI features, you need to set your OpenAI API key and enable AI:

```bash
# Set your OpenAI API key
gh-explorer config set ai.apiKey YOUR_API_KEY

# Enable AI features
gh-explorer config set ai.enabled true

# Optional: Set custom API endpoint
gh-explorer config set ai.baseURL https://your-api-endpoint
```

## 🗺️ Roadmap

- [x] Project structure with tsup
- [x] GitHub trending page scraper
- [x] URL metadata extraction service
- [x] AI integration with multiple LLM providers
- [x] CLI interface with Commander.js
- [x] Multiple output formats (JSON, Table, Markdown)
- [x] Configuration file support
- [x] Caching system
- [x] Documentation
- [ ] Repository comparison
- [ ] Cross-platform notifications
- [ ] Historical trends tracking
- [ ] Developer analytics
- [ ] Custom trend detection algorithms

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork it
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Commander.js](https://github.com/tj/commander.js), [Cheerio](https://github.com/cheeriojs/cheerio), [Chalk](https://github.com/chalk/chalk), and [Ora](https://github.com/sindresorhus/ora)
- AI capabilities powered by [Vercel AI SDK](https://sdk.vercel.ai/docs)

---

## Development

```bash
git clone https://github.com/zjy365/gh-explorer.git
cd gh-explorer

pnpm install

pnpm run build

pnpm test
```

## API Usage

```typescript
import { ghExplorer, ghExplorerFormatted, ghExplorerEnriched } from 'gh-explorer'

// Get trending repos as objects
const repos = await ghExplorer({ language: 'typescript', since: 'weekly' })
console.log(repos)

// Get formatted output
const markdown = await ghExplorerFormatted({ language: 'typescript' }, 'markdown')
console.log(markdown)

// Get repos with AI analysis
const enrichedRepos = await ghExplorerEnriched({ language: 'typescript' })
console.log(enrichedRepos)
```
