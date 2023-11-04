import { Link, useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/hooks'
import { useAppSelector } from '../../hooks/hooks'
import { deleteUser, selectUser } from '../../store/users'

import { Box, Button, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'

import type { User } from '../../api/JsonPlaceholderAPI/JsonPlaceholderAPI'

const FIELDS = [
  { name: 'Name', key: 'name' },
  { name: 'Username', key: 'username' },
  { name: 'Email', key: 'email' },
  { name: 'Phone', key: 'phone' },
  { name: 'Website', key: 'website' },
] satisfies { name: string; key: keyof Pick<User, 'name' | 'username' | 'email' | 'phone' | 'website'> }[]

const UserDetails = () => {
  const { id } = useParams()
  const user = useAppSelector((state) => selectUser(state, Number(id)))
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  console.log(id)

  const handelDelete = () => {
    dispatch(deleteUser(Number(id)))
    navigate('/users')
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        User Details
      </Typography>
      {user && (
        <Card>
          <CardContent>
            <List>
              {FIELDS.map((field) => (
                <ListItem key={field.key}>
                  <ListItemText primary={field.name} secondary={user[field.key]} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
      <Box mt={2} display="flex" flexDirection="row">
        <Box mr={2}>
          <Button component={Link} variant="contained" color="primary" to="edit">
            Edit User
          </Button>
        </Box>
        <Button variant="contained" color="error" onClick={handelDelete}>
          Delete User
        </Button>
      </Box>
    </>
  )
}

export { UserDetails }
