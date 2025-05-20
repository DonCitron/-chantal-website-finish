// Test script for MCP Server integrations
import fs from 'fs';
import { execSync } from 'child_process';

console.log('🧪 Testing MCP Server configurations...');

// Read the MCP configuration
try {
  const mcpConfig = JSON.parse(fs.readFileSync('./mcp.json', 'utf8'));
  console.log('✅ MCP configuration file found');
  
  // Check Brave Search configuration
  if (mcpConfig.mcpServers?.['brave-search']) {
    const braveConfig = mcpConfig.mcpServers['brave-search'];
    console.log('📡 Brave Search MCP Server configured');
    
    if (braveConfig.env?.BRAVE_API_KEY) {
      if (braveConfig.env.BRAVE_API_KEY === 'your-key') {
        console.log('⚠️ Warning: Brave API key appears to be a placeholder');
      } else {
        console.log('✅ Brave API key found');
      }
    } else {
      console.log('❌ Error: No Brave API key provided');
    }
  } else {
    console.log('❌ Brave Search MCP Server not configured');
  }
  
  // Check GitHub configuration
  if (mcpConfig.mcpServers?.['github']) {
    const githubConfig = mcpConfig.mcpServers['github'];
    console.log('📡 GitHub MCP Server configured');
    
    if (githubConfig.env?.GITHUB_TOKEN) {
      if (githubConfig.env.GITHUB_TOKEN === 'your-github-token-here') {
        console.log('⚠️ Warning: GitHub token appears to be a placeholder');
      } else {
        console.log('✅ GitHub token found');
      }
    } else {
      console.log('❌ Error: No GitHub token provided');
    }
  } else {
    console.log('❌ GitHub MCP Server not configured');
  }
  
  // Check Sequential Thinking configuration
  if (mcpConfig.mcpServers?.['sequential-thinking']) {
    console.log('📡 Sequential Thinking MCP Server configured');
  } else {
    console.log('❌ Sequential Thinking MCP Server not configured');
  }
  
  // Check Memory configuration
  if (mcpConfig.mcpServers?.['memory']) {
    console.log('📡 Memory MCP Server configured');
  } else {
    console.log('❌ Memory MCP Server not configured');
  }
  
  // Check Puppeteer configuration
  if (mcpConfig.mcpServers?.['puppeteer']) {
    console.log('📡 Puppeteer MCP Server configured');
  } else {
    console.log('❌ Puppeteer MCP Server not configured');
  }
  
  // Check Context7 configuration
  if (mcpConfig.mcpServers?.['context7']) {
    console.log('📡 Context7 MCP Server configured');
  } else {
    console.log('❌ Context7 MCP Server not configured');
  }
  
  // Check for installed packages
  console.log('\n📦 Checking installed packages...');
  try {
    // Check for Brave Search package
    execSync('npm list @modelcontextprotocol/server-brave-search');
    console.log('✅ Brave Search MCP package installed');
  } catch (e) {
    console.log('❌ Brave Search MCP package not installed');
  }
  
  try {
    // Check for GitHub package
    execSync('npm list @modelcontextprotocol/server-github');
    console.log('✅ GitHub MCP package installed');
  } catch (e) {
    console.log('❌ GitHub MCP package not installed');
  }
  
  try {
    // Check for Sequential Thinking package
    execSync('npm list @modelcontextprotocol/server-sequential-thinking');
    console.log('✅ Sequential Thinking MCP package installed');
  } catch (e) {
    console.log('❌ Sequential Thinking MCP package not installed');
  }
  
  try {
    // Check for Memory package
    execSync('npm list @modelcontextprotocol/server-memory');
    console.log('✅ Memory MCP package installed');
  } catch (e) {
    console.log('❌ Memory MCP package not installed');
  }
  
  try {
    // Check for Puppeteer package
    execSync('npm list @modelcontextprotocol/server-puppeteer');
    console.log('✅ Puppeteer MCP package installed');
  } catch (e) {
    console.log('❌ Puppeteer MCP package not installed');
  }
  
  try {
    // Check for Context7 package
    execSync('npm list @upstash/context7-mcp');
    console.log('✅ Context7 MCP package installed');
  } catch (e) {
    console.log('❌ Context7 MCP package not installed');
  }
  
} catch (error) {
  console.error('❌ Error reading MCP configuration:', error.message);
}

console.log('\n🎯 Test completed. If you see any errors, please fix them before using the MCP servers.'); 