import { fetchUsers } from '../../store/users'
import { store } from '../../store/store'

export const usersLoader = async () => {
  return await store.dispatch(fetchUsers())
}
