import { Link } from 'react-router-dom'

import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/hooks'


const Users = () => {
  const users = useAppSelector(state => state.users.users)

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id} component={Link} to={`/users/${user.id}`}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export { Users }
