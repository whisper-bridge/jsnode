// packages/core/types/security.ts

export interface LinterIssue {
  nodeId: NodeID;
  type: 'static' | 'runtime';
  severity: 'error' | 'warning';
  message: string;
  // Suggestion engine data
  suggestion?: string; // e.g., "Replace with Sorting Node"
}

export interface DebugSession {
  active: boolean;
  logs: string[];
  exceptions: {
    nodeId: NodeID;
    stack: string;
  }[];
}
