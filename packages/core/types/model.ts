// packages/core/types/models.ts

export type NodeID = string;
export type PortID = string;
export type WorkspaceID = string;

export enum NodeType {
  STANDARD = 'standard',
  INPUT = 'input',
  OUTPUT = 'output',
  API = 'api', // Orchestrating AI architecture
  NETWORK = 'network',
  WORKSPACE = 'workspace', // Embeds another workspace
}

export enum PortDirection {
  INPUT = 'input',
  OUTPUT = 'output',
}

export interface PortDefinition {
  id: PortID;
  name: string;
  direction: PortDirection;
  type: string; // JS Type hint (e.g., 'string', 'object', 'any')
  required: boolean;
}

export interface NodeDefinition {
  id: NodeID;
  type: NodeType;
  label: string;
  ports: PortDefinition[];
  // Logic specific data (serialized JS or reference)
  logicScript?: string; 
  // For Workspace Nodes
  subWorkspaceId?: WorkspaceID; 
  // Settings (loops, etc.)
  settings?: Record<string, any>;
}
