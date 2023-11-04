import { store } from '../../store/store'
import { fetchPhotos } from '../../store/photos'

export const photosLoader = async () => {
  return store.dispatch(fetchPhotos())
}
