import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/hooks'
import { useAppSelector } from '../../hooks/hooks'
import { selectUser } from '../../store/users'
import { updateUser } from '../../store/users'

import { Box, Button, Card, CardContent, FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material'

const EditUser = () => {
  const { id } = useParams()
  const user = useAppSelector((state) => selectUser(state, Number(id)))
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handelEdit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const updates = Object.fromEntries(formData.entries())
    dispatch(updateUser({id: Number(id), updates}))
    navigate('/users')
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Edit User
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={handelEdit}>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="name">Name</InputLabel>
                <OutlinedInput id="name" name="name" label="Name" fullWidth defaultValue={user?.name} />
              </FormControl>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="email">E-mail</InputLabel>
                <OutlinedInput id="email" name="email" label="E-mail" fullWidth defaultValue={user?.email} required />
              </FormControl>
            </Box>
            <Button variant={'contained'} color={'primary'} type="submit">
              Save
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

export { EditUser }
