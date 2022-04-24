import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Charities from '../pages/Charities'
import Disasters from '../pages/Disasters'
import QA from '../pages/QA'
import AboutUs from '../pages/AboutUs'

// 路由表
const routes = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/charities',
    element: <Charities />
  },
  {
    path: '/disasters',
    element: <Disasters />
  },
  {
    path: '/QA',
    element: <QA />
  },

  {
    path: '/aboutus',
    element: <AboutUs />
  },
  {
    path: '*',
    element: <Navigate to="/home" />
  },
]

export default routes;