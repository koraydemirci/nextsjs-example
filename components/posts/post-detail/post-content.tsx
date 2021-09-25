import ReactMarkdown, { Components } from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import PostHeader from './post-header';
import classes from './post-content.module.css';
import type { PostProps } from '../../../pages/posts/[slug]';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent({ post }: PostProps) {
  const { slug, image, title, content } = post;
  const imagePath = `/images/posts/${slug}/${image}`;

  const customComponents: Components = {
    p(paragraph) {
      const { node } = paragraph;

      const firstChildren = node.children[0];
      if (
        firstChildren.type === 'element' &&
        firstChildren.tagName === 'img' &&
        firstChildren?.properties?.src &&
        firstChildren?.properties?.alt
      ) {
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${firstChildren.properties.src}`}
              alt={firstChildren.properties.alt as string}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className?.split('-')[1];
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customComponents}>{content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
