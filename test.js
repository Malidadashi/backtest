const express = require('expresss')

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
router.listen(3000, () => {
    console.log('logged')
})