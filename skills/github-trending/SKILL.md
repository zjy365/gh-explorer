---
name: github-trending
description: Find, filter, and summarize GitHub Trending repositories through the gh-explorer CLI. Use when the user asks an agent to check GitHub trending, discover popular repositories by language, compare daily/weekly/monthly trends, export trending results, or produce an agent-friendly summary from current GitHub Trending data.
---

# GitHub Trending

## Overview

Use `gh-explorer` to fetch current GitHub Trending repositories and return concise, source-linked results. Prefer machine-readable JSON when you need to reason over results; use Markdown when the user wants a shareable report.

## Quick Start

Run the CLI through `npx` so the user does not need a global install:

```bash
npx --yes gh-explorer trending --format json --limit 10
```

Common variants:

- Today's overall trending: `npx --yes gh-explorer trending --format json --limit 10`
- Weekly TypeScript trending: `npx --yes gh-explorer trending --language typescript --since weekly --format json --limit 10`
- Monthly markdown report: `npx --yes gh-explorer trending --since monthly --format markdown --limit 15`
- Save an artifact: `npx --yes gh-explorer trending --format markdown --output github-trending.md`

## Workflow

1. Translate the user's request into CLI filters:
   - `--language <language>` for language-specific trends.
   - `--since daily|weekly|monthly` for the time window. Default to `daily`.
   - `--limit <number>` for result count. Use 10 unless the user asks otherwise.
   - `--format json` for analysis, `--format markdown` for a report, `--format table` for direct terminal display.
   - For domain focus beyond language, fetch JSON first and apply agent-side filtering over repository names, descriptions, and languages.

2. Run the command and inspect the output. If JSON is requested, expect each repository to include:
   - `rank`
   - `author`
   - `name`
   - `url`
   - `description`
   - `language`
   - `stars`
   - `starsInPeriod`
   - `forks`

3. Summarize for the user with links and enough context to act:
   - Lead with the date/time window and filters used.
   - Highlight the top repositories and why they are notable.
   - Mention language, stars, new stars, and repo URL when relevant.
   - Keep subjective recommendations clearly separated from raw trend data.

## Output Guidance

For discovery requests, produce a compact ranked list:

```markdown
1. owner/repo - one-line description
   Language: TypeScript | Stars: 12.3k | New stars: +456 | URL: https://github.com/owner/repo
   Why it matters: short agent-written interpretation.
```

For "what should I look at?" requests, group by usefulness:

- Production-ready tools
- Interesting experiments
- Learning resources
- Repositories worth monitoring

For automation or downstream processing, return JSON-derived facts and avoid table formatting.

## Failure Handling

If GitHub blocks or returns an empty result, retry once with a smaller limit or without optional topic filters. If the command still fails, report the exact command and error, then suggest trying again later because GitHub Trending is scraped from GitHub's public page.
