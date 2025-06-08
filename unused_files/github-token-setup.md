<<<<<<< HEAD
# GitHub Token Setup Guide

This guide will help you create and configure your GitHub Personal Access Token for use with the MCP GitHub server integration.

## Step 1: Create a GitHub Personal Access Token

1. Go to your GitHub account settings.
2. Scroll down to the bottom and click on "Developer settings".
3. Click on "Personal access tokens" in the sidebar.
4. Select "Tokens (classic)".
5. Click "Generate new token" and then "Generate new token (classic)".
6. Give your token a descriptive name like "Cursor MCP Integration".
7. Select the following scopes:
   - `repo` (Full control of repositories)
   - `read:user` (Read all user profile data)
   - Optionally, if you need to work with organizations: `read:org`
8. Click "Generate token".
9. **IMPORTANT**: Copy the generated token immediately. GitHub only shows it once!

## Step 2: Update Your MCP Configuration

1. Open the `mcp.json` file in your project.
2. Replace the placeholder text `"your-github-token-here"` with your actual token.
3. Save the file.

Example:

```json
{
  "mcpServers": {
    "brave-search": {
      // existing config...
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { 
        "GITHUB_TOKEN": "ghp_YourActualTokenHere1234567890abcdef"
      }
    }
  }
}
```

## Step 3: Verify Your Setup

Run the test script to verify everything is working:

```bash
node test-mcp.js
```

You should see a successful message for the GitHub token check.

## Security Notes

- Never commit your token to version control.
- Consider using environment variables or a secrets manager for production environments.
- GitHub tokens should be kept private - they grant access to your GitHub account!
=======
# GitHub Token Setup Guide

This guide will help you create and configure your GitHub Personal Access Token for use with the MCP GitHub server integration.

## Step 1: Create a GitHub Personal Access Token

1. Go to your GitHub account settings.
2. Scroll down to the bottom and click on "Developer settings".
3. Click on "Personal access tokens" in the sidebar.
4. Select "Tokens (classic)".
5. Click "Generate new token" and then "Generate new token (classic)".
6. Give your token a descriptive name like "Cursor MCP Integration".
7. Select the following scopes:
   - `repo` (Full control of repositories)
   - `read:user` (Read all user profile data)
   - Optionally, if you need to work with organizations: `read:org`
8. Click "Generate token".
9. **IMPORTANT**: Copy the generated token immediately. GitHub only shows it once!

## Step 2: Update Your MCP Configuration

1. Open the `mcp.json` file in your project.
2. Replace the placeholder text `"your-github-token-here"` with your actual token.
3. Save the file.

Example:

```json
{
  "mcpServers": {
    "brave-search": {
      // existing config...
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { 
        "GITHUB_TOKEN": "ghp_YourActualTokenHere1234567890abcdef"
      }
    }
  }
}
```

## Step 3: Verify Your Setup

Run the test script to verify everything is working:

```bash
node test-mcp.js
```

You should see a successful message for the GitHub token check.

## Security Notes

- Never commit your token to version control.
- Consider using environment variables or a secrets manager for production environments.
- GitHub tokens should be kept private - they grant access to your GitHub account!
>>>>>>> c66b7ffad74ecb943bc25d1abd7083be0988e3d2
- Tokens can be revoked in GitHub settings if they are accidentally exposed. 