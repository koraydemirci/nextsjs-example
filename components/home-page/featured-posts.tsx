import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';
import type { PostsProps } from '../../pages';

function FeaturedPosts({ posts }: PostsProps) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
