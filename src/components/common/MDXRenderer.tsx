import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXContentProps } from '@/interfaces';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect, useState } from 'react';

const MDXRenderer = ({ mdxSource }: MDXContentProps) => {
  const [content, setContent] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    const mdx = async () => {
      const content = await serialize(mdxSource, {
        mdxOptions: { development: true },
      });
      setContent(content);
    };
    mdx();
  }, [mdxSource]);

  if (!content) return null;

  return (
    <div>
      <MDXRemote {...content} />
    </div>
  );
};

export default MDXRenderer;
