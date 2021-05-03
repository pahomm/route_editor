import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import 'normalize.css'

import { rootStore } from 'stores'
import { App } from 'features/App'

const rootElement = document.getElementById('root')

if (rootElement !== null) {
  ReactDOM.render(
    <Provider {...rootStore}>
      <App />
    </Provider>,
    rootElement,
  )
}
