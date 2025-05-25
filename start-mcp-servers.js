#!/usr/bin/env node

/**
 * MCP Servers Starter Script
 * This script helps you start your MCP servers and validates the configuration.
 */

import fs from 'fs';
import { spawn } from 'child_process';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ANSI color codes for prettier console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

console.log(`${colors.bright}${colors.blue}===================================${colors.reset}`);
console.log(`${colors.bright}${colors.blue}  MCP Servers Startup Assistant${colors.reset}`);
console.log(`${colors.bright}${colors.blue}===================================${colors.reset}\n`);

// Check if mcp.json exists
if (!fs.existsSync('./mcp.json')) {
  console.error(`${colors.red}Error: mcp.json file not found!${colors.reset}`);
  process.exit(1);
}

// Read and validate the MCP configuration
try {
  const mcpConfig = JSON.parse(fs.readFileSync('./mcp.json', 'utf8'));
  console.log(`${colors.green}✓ MCP configuration file found${colors.reset}`);
  
  // Validate Brave Search configuration
  if (mcpConfig.mcpServers?.['brave-search']) {
    const braveConfig = mcpConfig.mcpServers['brave-search'];
    console.log(`${colors.green}✓ Brave Search MCP Server configured${colors.reset}`);
    
    if (!braveConfig.env?.BRAVE_API_KEY || braveConfig.env.BRAVE_API_KEY === 'your-key') {
      console.log(`${colors.yellow}⚠ Warning: Brave API key issue detected${colors.reset}`);
    }
  } else {
    console.log(`${colors.yellow}⚠ Brave Search MCP Server not configured${colors.reset}`);
  }
  
  // Validate GitHub configuration
  if (mcpConfig.mcpServers?.['github']) {
    const githubConfig = mcpConfig.mcpServers['github'];
    console.log(`${colors.green}✓ GitHub MCP Server configured${colors.reset}`);
    
    if (!githubConfig.env?.GITHUB_TOKEN || githubConfig.env.GITHUB_TOKEN === 'your-github-token-here' || 
        githubConfig.env.GITHUB_TOKEN === 'ghp_ExampleTokenPlaceholder123456789012') {
      console.log(`${colors.yellow}⚠ Warning: GitHub token appears to be a placeholder${colors.reset}`);
      console.log(`${colors.cyan}ℹ See github-token-setup.md for instructions on setting up your token${colors.reset}`);
    }
  } else {
    console.log(`${colors.yellow}⚠ GitHub MCP Server not configured${colors.reset}`);
  }
  
  // Validate Memory configuration
  if (mcpConfig.mcpServers?.['memory']) {
    console.log(`${colors.green}✓ Memory MCP Server configured${colors.reset}`);
  } else {
    console.log(`${colors.yellow}⚠ Memory MCP Server not configured${colors.reset}`);
  }
  
  // Validate Puppeteer configuration
  if (mcpConfig.mcpServers?.['puppeteer']) {
    console.log(`${colors.green}✓ Puppeteer MCP Server configured${colors.reset}`);
  } else {
    console.log(`${colors.yellow}⚠ Puppeteer MCP Server not configured${colors.reset}`);
  }
  
  // Validate Context7 configuration
  if (mcpConfig.mcpServers?.['context7']) {
    console.log(`${colors.green}✓ Context7 MCP Server configured${colors.reset}`);
  } else {
    console.log(`${colors.yellow}⚠ Context7 MCP Server not configured${colors.reset}`);
  }
  
  // Validate Localhost Viewer configuration
  if (mcpConfig.mcpServers?.['localhost-viewer']) {
    console.log(`${colors.green}✓ Localhost Viewer MCP Server configured${colors.reset}`);
    
    if (!mcpConfig.mcpServers['localhost-viewer'].env?.PUPPETEER_START_URL) {
      console.log(`${colors.yellow}⚠ Warning: Localhost viewer URL not configured${colors.reset}`);
    }
  } else {
    console.log(`${colors.yellow}⚠ Localhost Viewer MCP Server not configured${colors.reset}`);
  }
  
  // Ask which servers to start
  console.log('\n');
  rl.question(`${colors.bright}Which servers would you like to start?${colors.reset}\n` + 
    `1. ${colors.cyan}All configured servers${colors.reset}\n` + 
    `2. ${colors.cyan}Brave Search server only${colors.reset}\n` + 
    `3. ${colors.cyan}GitHub server only${colors.reset}\n` + 
    `4. ${colors.cyan}Sequential Thinking server only${colors.reset}\n` + 
    `5. ${colors.cyan}Memory server only${colors.reset}\n` + 
    `6. ${colors.cyan}Puppeteer server only${colors.reset}\n` + 
    `7. ${colors.cyan}Context7 server only${colors.reset}\n` + 
    `8. ${colors.cyan}Localhost Viewer server only${colors.reset}\n` + 
    `> `, (answer) => {
    
    let command = '';
    let args = [];
    
    switch(answer.trim()) {
      case '1':
        console.log(`\n${colors.green}Starting all configured MCP servers...${colors.reset}`);
        command = 'npx';
        args = ['@modelcontextprotocol/start-servers', '--config-file', 'mcp.json'];
        break;
      case '2':
        console.log(`\n${colors.green}Starting Brave Search MCP server...${colors.reset}`);
        command = 'npx';
        args = ['@modelcontextprotocol/server-brave-search'];
        break;
      case '3':
        console.log(`\n${colors.green}Starting GitHub MCP server...${colors.reset}`);
        command = 'npx';
        args = ['@modelcontextprotocol/server-github'];
        break;
      case '4':
        console.log(`\n${colors.green}Starting Sequential Thinking MCP server...${colors.reset}`);
        command = 'npx';
        args = ['@modelcontextprotocol/server-sequential-thinking'];
        break;
      case '5':
        console.log(`\n${colors.green}Starting Memory MCP server...${colors.reset}`);
        command = 'npx';
        args = ['@modelcontextprotocol/server-memory'];
        break;
      case '6':
        console.log(`\n${colors.green}Starting Puppeteer MCP server...${colors.reset}`);
        command = 'npx';
        args = ['@modelcontextprotocol/server-puppeteer'];
        break;
      case '7':
        console.log(`\n${colors.green}Starting Context7 MCP server...${colors.reset}`);
        command = 'npx';
        args = ['@upstash/context7-mcp'];
        break;
      case '8':
        console.log(`\n${colors.green}Starting Localhost Viewer MCP server...${colors.reset}`);
        command = 'npx';
        const env = mcpConfig.mcpServers['localhost-viewer'].env || {};
        process.env.PUPPETEER_START_URL = env.PUPPETEER_START_URL || 'http://localhost:5177/';
        args = ['@modelcontextprotocol/server-puppeteer'];
        break;
      default:
        console.log(`\n${colors.yellow}Invalid option. Exiting.${colors.reset}`);
        rl.close();
        return;
    }
    
    const serverProcess = spawn(command, args, { 
      stdio: 'inherit',
      shell: true
    });
    
    serverProcess.on('error', (error) => {
      console.error(`${colors.red}Failed to start MCP servers: ${error.message}${colors.reset}`);
      rl.close();
    });
    
    rl.close();
  });
  
} catch (error) {
  console.error(`${colors.red}Error reading MCP configuration: ${error.message}${colors.reset}`);
  process.exit(1);
} 