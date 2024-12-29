import { useRoutes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Respice from '../pages/respice/Respice'
import AboutComponent from '../pages/about/About'
import Charts from '../pages/charts/Charts'
import Carousel from '../pages/corousel/Carousel'

const Routes = () => {
  return (
    <>
      {useRoutes([
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              path: '/',
              element: <Home />
            },
            {
              path: '/hero',
              element: <Carousel />
            },
            {
              path: '/respice',
              element: <Respice />
            },
            {
              path: '/about',
              element: <AboutComponent />
            },
            {
              path: '/charts',
              element: <Charts />
            }
          ]
        }
      ])}
    </>
  )
}

export default Routes
