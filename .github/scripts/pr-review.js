require('dotenv').config();

async function reviewPR() {
  const { Octokit } = await import('@octokit/rest');
  const OpenAI = (await import('openai')).default;

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const [owner, repo] = 'The-Boring-Education/TBE-Web'.split('/');

  try {
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

    // 🔥 Reduce token usage by limiting diffText to the first 1000 characters
    if (diffText.length > 1000) {
      diffText = diffText.slice(0, 1000) + '\n... (truncated)';
    }

    // GPT Code Review Request (Using `gpt-4o`)
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are an experienced software engineer reviewing code. \n' +
            'You are reviewing a PR for a web application. \n' +
            'You are reviewing the code for any security issues, code quality issues, and any other issues that you think are important. \n' +
            'Always suggest What is wrong and what is right with the code. \n' +
            'Always include a summary of the changes and the issues you found. \n' +
            'Do not overdo it but also make sure that Code Quality and Style is upto the Mark.',
        },
        { role: 'user', content: diffText },
      ],
    });

    await octokit.issues.createComment({
      owner,
      repo,
      issue_number: pr.number,
      body: response.choices[0].message.content,
    });

    console.log('PR Review Completed!');
  } catch (error) {
    console.error('Error fetching pull requests:', error);
    return;
  }
}

// Run the function
reviewPR();
