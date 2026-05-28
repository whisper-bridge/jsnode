// JSNode Core - Shared Constants & Types
// Version: 0.0.2

const JSNodeCore = {
  THEME: {
    colors: {
      background: '#FFFFFF',
      grid: '#E0E0E0',
      primary: '#2196F3',
      primaryOpaque: 'rgba(33, 150, 243, 0.1)',
      navBackground: '#F5F5F5',
      text: '#333333',
      stateGreen: '#4CAF50',
      stateBlue: '#2196F3',
      stateRed: '#F44336',
      stateAmber: '#FFC107',
    },
    nav: {
      height: 48,
      bottomHeight: 32,
      excelMimic: true,
    },
    grid: {
      baseSize: 20,
      snapEnabled: true,
    },
    versionBadge: {
      visible: true,
      opacity: 0.5,
    },
  },
  
  NodeType: {
    STANDARD: 'standard',
    INPUT: 'input',
    OUTPUT: 'output',
    API: 'api',
    NETWORK: 'network',
    WORKSPACE: 'workspace',
  },
  
  ExecutionState: {
    IDLE: 'idle',
    RUNNING: 'running',
    ERROR: 'error',
    WARNING: 'warning',
    ASYNC_PENDING: 'async_pending',
  },
  
  VERSION: '0.0.2',
};

// Export for browser
if (typeof window !== 'undefined') {
  window.JSNodeCore = JSNodeCore;
}
