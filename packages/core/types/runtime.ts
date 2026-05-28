// packages/core/types/runtime.ts

export enum ExecutionState {
  IDLE = 'idle',
  RUNNING = 'running',
  ERROR = 'error',
  WARNING = 'warning',
  ASYNC_PENDING = 'async_pending',
}

export interface RuntimeNodeState {
  nodeId: NodeID;
  state: ExecutionState;
  // Visual feedback colors based on prompt requirements
  // Green pulse: Executing/Data Received
  // Blue pulse: Outputting/Awaiting
  // Red static: Error
  // Amber/Yellow: Warning/Async
  visualStatus: 'green-pulse' | 'blue-pulse' | 'red-static' | 'amber-static' | 'default';
  executionOrder?: number; // Priority/order in runtime
  lastExecutedMs?: number;
  errorMessage?: string;
}

export interface SimulationConfig {
  speedMs: number; // Adjustable sim speed
  debugMode: boolean;
}

export interface LibrarySecurityScan {
  isSafe: boolean;
  warnings: string[];
  blocked: boolean;
}
