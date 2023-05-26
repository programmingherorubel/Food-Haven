import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AuthProvider from './Provider/AuthProvider';
import './index.css';
import router from './router';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster
            position="top-center"
            reverseOrder={false}
            />
    </AuthProvider>
)
