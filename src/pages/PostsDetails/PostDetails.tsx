import { redirect, useParams, useNavigate } from 'react-router-dom'

import { Button, List, ListItem, ListItemText, Typography } from '@mui/material'

import { Posts } from '../../api/JsonPlaceholderAPI/JsonPlaceholderAPI'
import { useAppDispatch } from '../../hooks/hooks'
import { useAppSelector } from '../../hooks/hooks'
import { selectPost } from '../../store/posts'
import { deletePost } from '../../store/posts'

const FIELDS = [
  { name: 'Titel', key: 'title' },
  { name: 'Body', key: 'body' },
] satisfies { name: string; key: keyof Pick<Posts, 'userId' | 'id' | 'title' | 'body'> }[]

function PostDetails() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const post = useAppSelector((state) => selectPost(state, Number(id)))
  const navigate = useNavigate()

  const handelDelete = () => {
    if (post) {
      dispatch(deletePost(post.id))
    }
    navigate('/posts')
    // redirect('/posts') не могу понять почему не работает
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Post Details
      </Typography>
      {post && (
        <List>
          {FIELDS.map((field) => (
            <ListItem key={field.key}>
              <ListItemText primary={field.name} secondary={post[field.key]} />
            </ListItem>
          ))}
        </List>
      )}
      <Button variant="contained" color="error" onClick={handelDelete}>
        Delete post
      </Button>
    </>
  )
}

export default PostDetails
