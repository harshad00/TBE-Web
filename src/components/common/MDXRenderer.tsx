import React from 'react';
import MarkdownIt from 'markdown-it';

const MDXRenderer = ({ mdxSource }: any) => {
  const md = new MarkdownIt();
  const mdxHTML = md.render(mdxSource);

  console.log('HERE', mdxHTML);

  return <div dangerouslySetInnerHTML={{ __html: mdxHTML }} />;
};

export default MDXRenderer;
