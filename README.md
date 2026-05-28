# JSNode

<div align="center">

**A Comprehensive Javascript Node Editor**

[![Version](https://img.shields.io/badge/version-0.0.3-blue.svg)]()
[![License](https://img.shields.io/badge/license-MIT-green.svg)]()
[![GitHub Pages](https://img.shields.io/badge/deploy-github_pages-lightgrey.svg)]()

![JSNode Banner](https://via.placeholder.com/800x200/2196F3/FFFFFF?text=JSNode+v0.0.3)

</div>

## 📖 About

JSNode is a browser-based visual JavaScript editor that allows you to build applications using interconnected nodes. Each node represents a piece of JavaScript logic, and connections between nodes define data flow. No build step required—runs entirely in your browser.

## ✨ Features

### Editor
- 🎨 **Excel-Mimic Navigation** - Top and bottom navigation bars for easy workspace management
- 📐 **Grid Snapping** - Adjustable grid size (default 20px) for precise node placement
- 🔍 **Pan & Zoom** - Navigate large graphs with ease
- 📌 **Minimap** - Overview of your entire workspace

### Nodes
- 📥 **Input Node** - Receives input from various sources
- 📤 **Output Node** - Exports data from your workflow
- ⚙️ **Standard Node** - General-purpose JavaScript logic
- 🌐 **API Node** - Orchestrates AI architecture and API calls
- 🗂️ **Workspace Node** - Embeds workspaces as reusable functions

### Simulation
- ▶️ **Run Simulation** - Execute your node graph with adjustable speed
- 🎛️ **Speed Control** - Adjust simulation speed (10ms - 1000ms)
- 🟢 **Green Pulse** - Node executing / data received
- 🔵 **Blue Pulse** - Node outputting / awaiting next
- 🔴 **Red Static** - Error state or type mismatch
- 🟡 **Amber Pulse** - Warning / async pending

### Debugging
- 🐛 **Static Linter** - Catches unconnected ports, type mismatches, undefined variables
- 🔍 **Runtime Tracer** - Captures exceptions and highlights offending nodes
- 💡 **Suggestion Engine** - Recommends node replacements and optimizations
- 📋 **Console Drawer** - View simulation logs and output

### Project Management
- 💾 **Save/Load** - Local storage persistence
- ↩️ **Undo/Redo** - Full history support
- 📑 **Multiple Workspaces** - Tab-based workspace switching
- 👤 **Account** - Email authentication (planned)

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)

1. Visit the live demo: **https://your-username.github.io/jsnode/**
2. No installation required—runs in any modern browser

### Option 2: Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/jsnode.git
   cd jsnode
