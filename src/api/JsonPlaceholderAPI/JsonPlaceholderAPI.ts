import { JSON_PLACEHOLDER_BASE_URL } from '../../constants'
import { API } from '../API/API'

export interface FetchArg<Updates = Record<string, unknown>> {
  signal: AbortSignal
  userId?: number
  updates?: Updates
  id?: number
}

export interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Posts {
  userId: number
  id: number
  title: string
  body: string
}

export interface Comments {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

class JsonPlaceholderAPI extends API {
  async getPhotos({ signal }: FetchArg) {
    const response = await this.fetch<Photo[]>({ path: 'photos', signal })

    return response.slice(0, 20)
  }

  async getUsers({ signal }: FetchArg) {
    return await this.fetch<User[]>({ path: 'users', signal })
  }

  async getUser({ signal, id }: FetchArg) {
    return await this.fetch<User>({ path: `users/${id}`, signal })
  }

  async getPosts({ signal }: FetchArg) {
    const response = await this.fetch<Posts[]>({ path: 'posts', signal })
    return response.slice(0, 20)
  }

  async getPost({ signal, id }: FetchArg) {
    return await this.fetch<Posts>({ path: `posts/${id}`, signal })
  }

  async getComments({ signal }: FetchArg) {
    const response = await this.fetch<Comments[]>({ path: 'comments', signal })
    return response.slice(0, 20)
  }

  async deleteUser({ signal, id }: FetchArg) {
    return await this.fetch({ path: `users/${id}`, signal, method: 'DELETE' })
  }

  async deletePost({ signal, id }: FetchArg) {
    return await this.fetch({ path: `posts/${id}`, signal, method: 'DELETE' })
  }

  async updateUser({ signal, id, updates }: FetchArg) {
    return await this.fetch({ path: `users/${id}`, signal, method: 'PATCH', body: updates })
  }
}

export default new JsonPlaceholderAPI(JSON_PLACEHOLDER_BASE_URL)
