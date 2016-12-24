import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {AppContainer} from 'react-hot-loader'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import LoginPage from './App/login.js'
import AdminPage from './App/admin.js'
import todoPage from './App/todolist.js'
import { ApolloProvider } from 'react-apollo'
import ApolloClient, { createNetworkInterface } from 'apollo-client'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:5000' })
})

const isLogin = true

const Appp = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App} >
      <Route path='admin' component={AdminPage} />
      <IndexRoute component={isLogin ? todoPage : LoginPage} />
    </Route>
  </Router>
)

ReactDOM.render(
  <ApolloProvider client={client}>
    <Appp />
  </ApolloProvider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
