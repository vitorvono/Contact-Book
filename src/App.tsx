import { Provider } from 'react-redux'

import ListaContatos from './containers/index'
import { Container, EstiloGlobal } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <ListaContatos />
      </Container>
    </Provider>
  )
}

export default App
