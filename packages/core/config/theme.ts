// packages/core/config/theme.ts

export const THEME = {
  colors: {
    background: '#FFFFFF', // White workspace
    grid: '#E0E0E0',       // Grey grid
    primary: '#2196F3',    // Blue (decently thick)
    primaryOpaque: 'rgba(33, 150, 243, 0.1)', // More opaque farther from center (handled in renderer)
    navBackground: '#F5F5F5',
    text: '#333333',
    // Simulation States
    stateGreen: '#4CAF50',
    stateBlue: '#2196F3',
    stateRed: '#F44336',
    stateAmber: '#FFC107',
  },
  nav: {
    height: 48, // Primary nav bar
    bottomHeight: 32, // Secondary workspace nav
    excelMimic: true,
  },
  grid: {
    baseSize: 20, // px
    snapEnabled: true,
  },
  versionBadge: {
    visible: true,
    opacity: 0.5, // Lightly visible next to logo
  },
};
