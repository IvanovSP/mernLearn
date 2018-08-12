const express = require('express');
const User = require('../../modules/User');

const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: 'Users works' }));

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email });
})

module.exports = router;
