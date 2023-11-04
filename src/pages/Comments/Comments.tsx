import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/hooks'
import { Loader } from '../../components/Loader/Loader'

const Comments = () => {
  const comments = useAppSelector((state) => state.comments.comments)
  const loading = useAppSelector((state) => state.comments.loading)

  return (
    <>
      {loading === true ? (
        <Loader />
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            Comments
          </Typography>
          <List>
            {comments.map((coment) => (
              <ListItem key={coment.id} alignItems="flex-start">
                <ListItemText
                  primary={coment.name}
                  secondary={
                    <>
                      <Typography variant="subtitle1">{coment.email}</Typography>
                      {coment.body}
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </>
  )
}

export { Comments }
