import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';
import type { PostsProps } from '../../pages';

function AllPosts({ posts }: PostsProps) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
