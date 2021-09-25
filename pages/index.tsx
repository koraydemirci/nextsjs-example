import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

export type Post = {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
};

export type PostsProps = {
  posts: Post[];
};

const Home: NextPage<PostsProps> = ({ posts }: PostsProps) => {
  return (
    <Fragment>
      <Head>
        <title>Max Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default Home;
