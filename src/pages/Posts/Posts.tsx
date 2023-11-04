import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link} from 'react-router-dom'
import { useAppSelector } from "../../hooks/hooks";

const Posts = () => {
  const posts = useAppSelector(state => state.posts.posts)


  return (
    <>
    <Typography variant="h4" gutterBottom>
      Posts
    </Typography>
    <List>
      {posts.map((post) => (
        <ListItem key={post.id} component={Link} to={`/posts/${post.id}`}>
          <ListItemText primary={post.title} secondary={post.body} />
        </ListItem>
      ))}
    </List>
</>
  )
 
};

export { Posts };
