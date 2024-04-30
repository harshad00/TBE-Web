import React from 'react';
import MarkdownIt from 'markdown-it';

const MDXRenderer = ({ mdxSource }: any) => {
  const md = new MarkdownIt({
    html: true,
  });

  // Add class names to specific tags
  md.renderer.rules.heading_open = (tokens: any[], idx: number) => {
    const { tag } = tokens[idx];
    return `<${tag} class="md-1 mt-2">`;
  };

  md.renderer.rules.list_open = () => {
    return `<ol class="md-list bg-red">`;
  };

  md.renderer.rules.paragraph_open = () => {
    return '<p class="my-2">';
  };

  md.renderer.rules.link_open = (tokens: any, idx: any) => {
    const token = tokens[idx];
    const href = token.attrGet('href');
    if (href.includes('youtube.com') || href.includes('youtu.be')) {
      return `<iframe width="560" height="315" class="rounded" src="${href}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    }
    return `<a href=${href} target="_blank" class="text-primary underline strong-text">`;
  };

  md.renderer.rules.html_block = (tokens: any, idx: any) => {
    const token = tokens[idx];
    const href = token.attrGet('href');

    return `<a href=${href} target="_blank">${href}</a>`;
  };

  md.renderer.rules.fence = (tokens, idx) => {
    const token = tokens[idx];
    const lang = token.info.trim();
    const code = token.content;

    return `<pre class="bg-accent hover:bg-greyLight transition border px-2 py-1 rounded"><code class="language-${lang}">${md.utils.escapeHtml(
      code
    )}</code></pre>`;
  };

  const mdxHTML = md.render(mdxSource);

  return <div dangerouslySetInnerHTML={{ __html: mdxHTML }} />;
};

export default MDXRenderer;
