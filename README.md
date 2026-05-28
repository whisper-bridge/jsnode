# JSNode

**Version:** 0.0.2  
**Status:** Alpha / Development

A Comprehensive Javascript Node Editor that functions as a visual JS editor. Nodes communicate via real JavaScript, supporting workspace nesting, API orchestration, and secure library imports.

## Features

- **Visual Scripting:** Drag-and-drop nodes that execute real JavaScript.
- **Workspaces:** Excel-mimic navigation with tabbed workspaces and nested Workspace Nodes.
- **Simulation:** Adjustable simulation speed with real-time state visualization (Green/Blue/Red/Amber pulses).
- **Security:** Static linter, runtime tracer, and library security scanning.
- **Theme:** Clean White/Grey/Blue interface with adjustable grid snapping.

## Repo Structure

```text
/jsnode
  /packages
    /core          # Shared TypeScript types
    /editor        # React UI (Vite + React Flow)
    /runtime       # JS Execution Engine (Sandboxed)
    /server        # Auth & Storage
