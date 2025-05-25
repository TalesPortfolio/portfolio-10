import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import store from './store'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import LoginRegister from './pages/Auth/LoginRegister'
import PrivateRoute from './components/PrivateRoute'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <LoginRegister />
  },
  {
    path: '/tarefas',
    element: (
      <PrivateRoute />
    ),
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
