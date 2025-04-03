import { Hono } from 'hono'

const app = new Hono()

app.get('/ping', (c) => {
  return c.json({ pong: 'Hello, World' })
})

export default app
