import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

export type PostProps = {
  post: {
    slug: string;
    image: string;
    title: string;
    content: string;
  };
};

const Post: NextPage<PostProps> = ({ post }: PostProps) => {
  return <PostContent post={post} />;
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params as { slug: string };

  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
