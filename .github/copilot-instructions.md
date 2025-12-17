# Copilot Instructions for My_First_Project

This is a personal blog website built with Quartz v4, a static site generator for publishing digital gardens and notes as websites, similar to Obsidian.

## Architecture Overview

- **Framework**: Quartz v4 (TypeScript-based static site generator)
- **Content Structure**: Markdown files in `content/` directory with frontmatter metadata
- **Linking**: Obsidian-style bidirectional links using `[[Note Title]]` syntax
- **Plugins**: Modular plugin system for transformers (parsing), filters, and emitters (output)
- **Themes**: Configurable typography, colors, and fonts via `quartz.config.ts`
- **Build Output**: Static HTML/CSS/JS in `public/` directory

## Developer Workflows

- **Development Server**: `npx quartz build --serve` - builds and serves locally (default port 8080)
- **Build for Production**: `npx quartz build` - generates static files in `public/`
- **Preview Build**: `npm run docs` - builds and serves docs
- **Formatting**: `npm run format` - runs Prettier
- **Type Checking**: `npm run check` - TypeScript check
- **Testing**: `npm run test` - runs tests with tsx

## Project Conventions and Patterns

- **File Naming**: Use descriptive titles, support Chinese characters
- **Frontmatter**: Include `title`, `date`, `tags` in YAML frontmatter
- **Links**: Use `[[Page Title]]` for internal links (resolved to shortest path)
- **Tags**: Add tags array in frontmatter for categorization
- **Ignore Patterns**: Files in `private`, `templates`, `.obsidian` are ignored
- **Date Handling**: Uses modified date by default, can override in frontmatter
- **Markdown Flavor**: Obsidian Flavored Markdown + GitHub Flavored Markdown

## Key Files and Directories

- `quartz.config.ts` - Main configuration file for plugins, theme, and settings
- `content/` - Directory for all Markdown content files
- `content/index.md` - Homepage
- `public/` - Build output directory (generated)
- `quartz/` - Quartz source code and plugins

## Examples

- Creating a new page: Add `.md` file in `content/` with frontmatter like `--- title: My Page date: 2025-12-17 tags: [example] ---`
- Linking pages: Use `[[Other Page]]` in content
- Customizing theme: Edit `configuration.theme` in `quartz.config.ts`

Focus on adding content to `content/` directory and configuring `quartz.config.ts` for customization. The site is optimized for performance with static generation.