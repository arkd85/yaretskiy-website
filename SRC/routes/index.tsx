import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/Home/index';
import AboutPage from '@/pages/About/index';
import ServicesPage from '@/pages/Services/index';
import FAQPage from '@/pages/FAQ/index';
import ContactPage from '@/pages/Contact/index';
import NotFoundPage from '@/pages/NotFound/index';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/services',
        element: <ServicesPage />,
      },
      {
        path: '/faq',
        element: <FAQPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);