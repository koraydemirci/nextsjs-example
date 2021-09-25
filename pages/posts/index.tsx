import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import type { PostsProps } from '../index';
import { getAllPosts } from '../../lib/posts-util';

const Posts: NextPage<PostsProps> = ({ posts }: PostsProps) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default Posts;
