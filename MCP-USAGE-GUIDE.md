# MCP Servers Usage Guide

This guide provides examples of how to use the MCP servers configured in this project.

## Brave Search MCP Server

The Brave Search MCP Server allows Claude to search the web for current information.

### Example Queries

Try asking Claude questions like:

- "What are the latest web development trends in 2023?"
- "Find information about React 18 new features"
- "Search for Tailwind CSS best practices"
- "What are the recent developments in AI and machine learning?"
- "Look up current documentation for Framer Motion animations"

### How It Works

When you ask a question that requires up-to-date information, Claude can use the Brave Search API to find relevant information on the web and provide you with a response based on the search results.

## GitHub MCP Server

The GitHub MCP Server enables Claude to interact with GitHub repositories.

### Example Queries

Try asking Claude to:

1. **Repository Information**:
   - "Describe the structure of the react-router repository"
   - "What are the most recent issues in the tailwindcss repository?"
   - "Show me recent pull requests in the framer-motion project"

2. **Code Search**:
   - "Find examples of React hooks implementation in popular repositories"
   - "Show me examples of Tailwind responsive design patterns"
   - "How do most projects implement dark mode with Tailwind?"

3. **File Operations** (requires appropriate permissions):
   - "Create a pull request to fix a typo in documentation"
   - "Update the README file with improved installation instructions"
   - "Add a section about MCP servers to the documentation"

### How It Works

Claude uses your GitHub token to interact with the GitHub API, allowing it to fetch repository information, search code, and (with appropriate permissions) make changes to repositories.

## Sequential Thinking MCP Server

The Sequential Thinking MCP Server enhances Claude's ability to break down complex problems into smaller, sequential steps. This leads to more thorough, accurate reasoning and better solutions.

### Example Queries

Try asking Claude to tackle complex problems like:

1. **Mathematical Reasoning**:
   - "Solve this multi-step algebra problem..."
   - "Help me understand the proof for this theorem..."
   - "Analyze the logical structure of this argument..."

2. **Code Planning**:
   - "Plan the architecture for a React application with authentication"
   - "How would you approach implementing a caching system for database queries?"
   - "Design a system to handle concurrent user requests efficiently"

3. **Decision Analysis**:
   - "Help me analyze the pros and cons of these business strategies"
   - "What factors should I consider when evaluating these competing technologies?"
   - "Walk me through how to approach this complex decision step-by-step"

### How It Works

When you present a complex problem, Claude uses the Sequential Thinking server to break down the problem into logical steps, exploring each component thoroughly before proceeding to the next. This helps to:

- Avoid logical errors and gaps in reasoning
- Make the solution process more transparent
- Provide more detailed and accurate answers
- Improve complex decision-making

## Memory MCP Server

The Memory MCP Server gives Claude the ability to remember information across sessions and conversations. This helps maintain context over time and enables more personalized interactions.

### Example Queries

Try using Memory for scenarios like:

1. **Project Context Retention**:
   - "Remember that we're working on a React application with TypeScript and Tailwind"
   - "Use what you know about our project to suggest optimizations"
   - "Recall what design patterns we decided to use for our components"

2. **User Preferences**:
   - "Remember that I prefer using functional components over class components"
   - "Keep in mind that I want to follow the Airbnb style guide for JavaScript"
   - "I'd like you to always include unit tests in code examples"

3. **Long-term Collaboration**:
   - "What were the issues we identified in our last session?"
   - "Continue our work on implementing the authentication system"
   - "Let's revisit the database schema we designed earlier"

### How It Works

The Memory MCP Server stores important information that Claude identifies during your conversations. It allows the assistant to:

- Remember project contexts across multiple sessions
- Retain your preferences and requirements
- Reference past discussions and decisions
- Provide more personalized and contextually relevant responses

This is particularly useful for long-term projects where maintaining context is important.

## Puppeteer MCP Server

The Puppeteer MCP Server provides Claude with the ability to control a headless Chrome browser. This enables web scraping, automation, and interactive browsing capabilities.

### Example Queries

Try using Puppeteer for scenarios like:

1. **Web Scraping**:
   - "Extract data from this product page and format it into a CSV"
   - "Scrape the latest articles from this tech blog and summarize them"
   - "Get the pricing information from these competitor websites"

2. **Web Automation**:
   - "Fill out this form on the website with my project information"
   - "Take a screenshot of how this website looks on mobile devices"
   - "Navigate through this multi-page process and extract the final result"

3. **Data Extraction**:
   - "Extract all the JavaScript libraries used on this website"
   - "Find all broken links on my website's homepage"
   - "Get the meta tags and SEO information from this page"

### How It Works

The Puppeteer MCP Server starts a headless Chrome browser that Claude can control. It allows the assistant to:

- Navigate to web pages
- Interact with page elements (click, type, scroll)
- Extract content and data
- Take screenshots
- Evaluate JavaScript
- Handle authentication and cookies

This is particularly useful for tasks that require interaction with websites beyond simple information retrieval.

## Context7 MCP Server

The Context7 MCP Server provides Claude with up-to-date documentation for libraries and frameworks, ensuring that code suggestions are based on current APIs rather than outdated training data.

### Example Queries

To use Context7, simply add `use context7` to your prompts:

1. **Framework Documentation**:
   - "Create a basic Next.js project with app router. use context7"
   - "Show me how to set up authentication in React using Auth0. use context7"
   - "Explain how to use React Query for data fetching. use context7"

2. **Library APIs**:
   - "How do I use the latest version of Framer Motion for page transitions? use context7"
   - "Show me examples of Tailwind CSS responsive design with the latest syntax. use context7"
   - "What's the current way to implement form validation with Formik? use context7"

3. **Database and Backend**:
   - "Create a script to delete rows where the city is empty in PostgreSQL. use context7"
   - "How do I set up a GraphQL server with Apollo? use context7"
   - "Show me how to use Prisma with PostgreSQL for CRUD operations. use context7"

### How It Works

Context7 retrieves current documentation and code examples from official sources when you add `use context7` to your prompts. This ensures:

- Up-to-date API references instead of outdated training data
- Current best practices and syntax
- Version-specific documentation
- Real code examples that actually work

Context7 helps eliminate hallucinated APIs and outdated code patterns by retrieving the most current documentation directly from the source.

## Combining All Services

Claude can leverage all six services together for maximum capabilities:

- "Research current state management libraries using Brave Search, find the most active repositories on GitHub, analyze the tradeoffs using Sequential Thinking, remember our decision criteria, extract example code from documentation with Context7, and automate some testing with Puppeteer"

- "Use Context7 to get the latest React Router documentation, help me implement it in our project step-by-step with Sequential Thinking, remember this implementation approach for our future work, and show me how it integrates with our GitHub repository structure"

- "Use Puppeteer to extract data from competitor websites, analyze the UX patterns methodically, search for implementation approaches with Brave Search, find code examples with Context7, and document the findings in our GitHub repository"

## Security Considerations

- Always review changes before committing them to your repository
- Be careful about sharing sensitive repository information
- Remember that your GitHub token grants Claude the same permissions you have

## Troubleshooting

If you encounter issues:

1. Run `node test-mcp.js` to verify your configuration
2. Check that your API keys and tokens are valid and have the correct permissions
3. Ensure the MCP server packages are properly installed
4. Restart your Cursor application if needed

---

For more information, refer to the official documentation:
- [Brave Search API](https://brave.com/search/api/)
- [GitHub API](https://docs.github.com/en/rest)
- [MCP Protocol](https://github.com/anthropics/anthropic-cookbook/tree/main/mcp) 