const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: '🔐'
  });
});

router.post('/signup', (req, res) => {
  console.log(req.body);
  res.json({
    message: 'signup'
  });  
})

module.exports = router;
