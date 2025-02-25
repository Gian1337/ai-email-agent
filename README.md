# AI Email Generator Agent

This project combines BaseAI, Langbase, and OpenAI to automatically generate personalized cover letters based on your CV and job descriptions. The agent analyzes your CV, extracts relevant information, and crafts a targeted cover letter highlighting your qualifications that match the specific job requirements you provide.

## Prerequisites

Before setting up this project, ensure you have:

- Node.js (v16 or higher)
- npm (v7 or higher)
- OpenAI API key
- Langbase API key

# Installation

## 1. Clone the repository

```bash
git clone <repository-url>
cd ai-email
```

## 2. Install dependencies

```bash
npm install
npm install -g baseai@latest langbase
```

## 3. Create .env file

```bash
OPENAI_API_KEY=your_openai_api_key
LANGBASE_API_KEY=your_langbase_api_key
```

# Project Setup

## Setting up OpenAI

Sign up at OpenAI and create an API key
Ensure your OpenAI account has access to the embedding models you plan to use
Add your OpenAI API key to the .env file

## Setting up Langbase

Create an account at Langbase
Get your API key from the dashboard
Add your Langbase API key to the .env file

## Setting up BaseAI

BaseAI is used for document embedding and memory management:

```bash
# Generate embeddings for your documents
npx baseai@latest embed -m email-generator-memory

# If you need to overwrite existing embeddings
npx baseai@latest embed -m email-generator-memory --overwrite
```

# Usage

1. Create a folder structure (if it doesn't exist):

```bash
mkdir -p baseai/email-generator-memory/documents
```

2. Drag and drop your CV file into the /baseai/email-generator-memory/documents folder

3. Process your CV to generate embeddings:
   bash:

```bash
npx baseai@latest embed -m email-generator-memory
```

# Running the project

1. Start the BaseAI development server:

```bash
npx baseai@latest dev
```

2. In a separate terminal window, run the memory agent:

```bash
npx tsx index.ts
```
