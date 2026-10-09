import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import { findRoute } from './routes'

const { Component } = findRoute(window.location.pathname)
const app = (
  <StrictMode>
    <Component />
  </StrictMode>
)

// Built pages arrive prerendered (scripts/prerender.mjs); the dev server serves an empty root.
const root = document.getElementById('root')
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
