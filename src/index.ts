import { defineTheme, mount } from 'frame3'
import { App } from './comps/app/app'
import './index.css?skip'
import * as theme from './theme'

defineTheme(theme)

mount(App, document.querySelector('.root')!)
