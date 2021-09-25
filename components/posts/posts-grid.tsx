import PostItem from './post-item';
import classes from './posts-grid.module.css';
import type { PostsProps } from '../../pages';

function PostsGrid({ posts }: PostsProps) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
