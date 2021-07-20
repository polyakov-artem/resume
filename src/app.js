// Styles
import './app.scss'

// Common js
import importAll from '~js/importAll'

// Pages
import './pages/index/index'

// SVG images
importAll(require.context('svg-sprite-loader?sprite!~assets/svg/', true, /\.svg$/))