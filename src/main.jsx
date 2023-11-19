import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import AboutMe from './routes/AboutMe';
import MyWork from './routes/MyWork';
import ContactMe from './routes/ContactMe';
import WorkExp from './routes/WorkExp';

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: 'my-work',
        element: <MyWork />,
      },
      {
        path: 'contact-me',
        element: <ContactMe />,
      },
      {
        path: 'work-experience',
        element: <WorkExp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route} />
);
