
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './LayOut/Main/Main';
import Shop from './component/Shop/Shop';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Shop></Shop>
        }
      ]

      
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
