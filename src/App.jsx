import Album from './pages/Album'
import PhotoAlbum from './pages/PhotoAlbum'
import './style/App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'




const router = createBrowserRouter ([
  {path: '/', element: <PhotoAlbum/>},
  {path:'/album', element: <Album/>},
 
])


function App() {
  return <RouterProvider router = {router}/>
}

export default App
