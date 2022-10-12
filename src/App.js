import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Quizzes from './components/Quizzes/Quizzes';
import ErrorPage from './components/utilities/ErrorPage';
import Root from './components/utilities/Root';


const router = createBrowserRouter([
  {
    path: '/', element: <Root></Root>, errorElement: <ErrorPage></ErrorPage>, children: [
      { path: '/', element: <Home></Home>, index: true },
      { path: '/home', element: <Home></Home> },
      { path: '/blogs', element: <Blogs></Blogs> },
      { path: '/quizzes', loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Quizzes></Quizzes> }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
