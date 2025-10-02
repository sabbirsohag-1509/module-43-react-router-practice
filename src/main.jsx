import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Roots from './components/roots/Roots.jsx';
import Home from './components/home/Home.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import users from './components/users/users.jsx';
import Posts from './components/posts/Posts.jsx';
import Comments from './components/comments/Comments.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import About from './components/About/About.jsx';





const router = createBrowserRouter([
  {
    path:'/',
    Component: Roots,
    children: [ 
      {index: true, Component: Home},
      {
        path:'navbar',
        Component: Navbar
      },
      {
        path:'users',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        Component: users
      },
      {
        path:'users/:userId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path:'posts',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
        Component: Posts
      },
      {
        path:'posts/:postId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      },
      {
        path:'comments',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/comments`),
        Component: Comments
      },
      {
        path:'about',
        Component: About
      }
      
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
