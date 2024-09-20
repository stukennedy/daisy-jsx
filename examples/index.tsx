import { Hono } from 'hono'
import { showRoutes } from 'hono/dev'
import { jsxRenderer } from 'hono/jsx-renderer'
import Home from './Home';

const app = new Hono();

const RootHtml = jsxRenderer(({children}) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="descrition" content="My App"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" type="text/css" />
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
      <title>Document</title>
    </head>
    <body class="w-full h-screen">
      {children}
    </body>
    <div id="toast-queue" className="toast toast-end w-96"></div>
    <div id="modal"></div>
  </html>
))

app.get('*', RootHtml)
app.get('/', (c) => c.render(<Home />))

const port = process.argv[2] || 3000;
if (port !== 3000) {
  showRoutes(app, { verbose: true })
}
export default {
  port,
  fetch: app.fetch,
}
