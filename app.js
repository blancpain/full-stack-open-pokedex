const express = require('express')
const app = express()

// Changed to port 3000 as 5000 is used internally by macOS...
const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 3000')
})
