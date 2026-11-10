// Server entry used only at build time (scripts/prerender.mjs) to emit static HTML,
// so search engines get the full page content without running JavaScript.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { buildSchema } from './seo'

export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

export const schema = buildSchema
