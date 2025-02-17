require('dotenv').config();

async function reviewPR() {
  // Dynamically import ESM modules
  const { Octokit } = await import('@octokit/rest');
  const OpenAI = (await import('openai')).default;

  // Initialize instances after import
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const [owner, repo] = 'The-Boring-Education/TBE-Web'.split('/');

  // Get the latest open PR
  const { data: pulls } = await octokit.pulls.list({
    owner,
    repo,
    state: 'open',
    per_page: 1,
  });
  if (pulls.length === 0) return console.log('No open PRs found.');

  const pr = pulls[0];
  const { data: files } = await octokit.pulls.listFiles({
    owner,
    repo,
    pull_number: pr.number,
  });

  let diffText = files
    .map((file) => `File: ${file.filename}\n\n${file.patch}`)
    .join('\n\n');

  if (!diffText) return console.log('No changes detected in PR.');

  // GPT Code Review Request (Updated API Format)
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content:
          'You are an experienced software engineer reviewing code. Provide constructive feedback and best practices.',
      },
      { role: 'user', content: diffText },
    ],
  });

  // Post the GPT review as a comment on the PR
  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: pr.number,
    body: response.choices[0].message.content,
  });

  console.log('PR Review Completed!');
}

// Run the function
reviewPR();
