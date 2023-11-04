
import { fetchPosts } from '../../store/posts'
import { store } from '../../store/store'

export const postsLoader = async () => {
    return store.dispatch(fetchPosts())
  }