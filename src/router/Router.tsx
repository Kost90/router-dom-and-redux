import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { RootLayout } from '../layouts/RootLayout/RootLayout'
import { EditUser } from '../pages/EditUser/EditUser'
import { PageNotFound } from '../pages/PageNotFound/PageNotFound'
import { Photos } from '../pages/Photos/Photos'
import { photosLoader } from '../pages/Photos/photosLoader'
import { UserDetails } from '../pages/UserDetails/UserDetails'
import { Users } from '../pages/Users/Users'
import { usersLoader } from '../pages/Users/usersLoader'
import { Posts } from '../pages/Posts/Posts'
import { Comments } from '../pages/Comments/Comments'
import { postsLoader } from '../pages/Posts/postsLoader'
import { commentsLoader } from '../pages/Comments/CommentsLoader'
import PostDetails from '../pages/PostsDetails/PostDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Photos />,
        loader: photosLoader,
      },
      {
        path: 'posts',
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: 'posts/:id',
        element: <PostDetails />,
      },
      {
        path: 'comments',
        element: <Comments />,
        loader: commentsLoader,
      },
      {
        path: 'users',
        element: <Users />,
        loader: usersLoader,
      },
      {
        path: 'users/:id',
        element: <UserDetails />,
      },
      {
        path: 'users/:id/destroy',
      },
      {
        path: 'users/:id/edit',
        element: <EditUser />,
      },
    ],
  },
])

const Router = () => <RouterProvider router={router} />

export { Router }
