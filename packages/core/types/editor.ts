// packages/core/types/editor.ts

import { NodeID, WorkspaceID } from './models';

export interface Position {
  x: number;
  y: number;
}

export interface EditorNode extends NodeDefinition {
  position: Position;
  selected: boolean;
  // Visual settings
  collapsed?: boolean;
}

export interface ConnectionWaypoint {
  x: number;
  y: number;
}

export interface Edge {
  id: string;
  sourceNodeId: NodeID;
  sourcePortId: string;
  targetNodeId: NodeID;
  targetPortId: string;
  // Elbow/Waypoint support for organized connections
  waypoints?: ConnectionWaypoint[]; 
}

export interface Workspace {
  id: WorkspaceID;
  name: string;
  version: string; // e.g., 0.0.1
  nodes: EditorNode[];
  edges: Edge[];
  gridSettings: {
    size: number; // Adjustable snap size
    visible: boolean;
  };
}
