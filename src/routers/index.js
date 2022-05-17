import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Charities from '../pages/Charities'
import Disasters from '../pages/Disasters'
import Calculator from '../pages/Calculator'
import Education from '../pages/Education'
import Quiz from '../pages/Quiz'
import QuizResult from '../pages/QuizResult'
import Quiz2 from '../components/QuizList/Quiz2'
import Quiz3 from '../components/QuizList/Quiz3'
import Quiz4 from '../components/QuizList/Quiz4'
import Quiz5 from '../components/QuizList/Quiz5'




// 路由表
const routes = [
  // {
  //   path: '/Quiz1',
  //   element: <Quiz1 />
  // },
  {
    path: '/Quiz2',
    element: <Quiz2 />
  },
  {
    path: '/Quiz3',
    element: <Quiz3 />
  },
  {
    path: '/Quiz4',
    element: <Quiz4 />
  },
  {
    path: '/Quiz5',
    element: <Quiz5 />
  },
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
    path: '/Calculator',
    element: <Calculator />
  },

  {
    path: '/education',
    element: <Education />
  },

  {
    path: '/Quiz',
    element: <Quiz />
  },

  {
    path: '/QuizResult',
    element: <QuizResult />
  },

  {
    path: '*',
    element: <Navigate to="/home" />
  },
]

export default routes;