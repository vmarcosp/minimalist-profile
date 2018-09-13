import React from 'react'
import { render } from 'react-dom'
import { App } from './app'
import '~node_modules/font-awesome/css/font-awesome.min.css';

// import './scss/all.scss'

const $app = document.querySelector('#app')

render(<App />, $app)
