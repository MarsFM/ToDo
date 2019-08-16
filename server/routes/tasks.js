const express = require('express');
const connection = require('../db');
const bodyParser = require('body-parser');

const router = express.Router();
const queryGetAllTasks = 'SELECT * FROM tasks ORDER BY id DESC';

router.get('/', (req, res) => {
  connection.query(queryGetAllTasks, function(err, data) {
    if (err) return console.log(err);
    res.send(data);
  });
});

router.route('/').post((req, res) => {
  const name = req.body.name;
  const isActive = req.body.isActive;
  connection.query(
    'INSERT INTO tasks (name, isActive) VALUES (?, ?)',
    [name, isActive],
    function(err, data) {
      if (err) return console.log(err);
      res.send(data);
    }
  );
});

router.route('/:id').delete((req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM tasks WHERE id=?', [id], function(err, data) {
    if (err) return console.log(err);
    res.send(data);
  });
});

router.route('/:id').put((req, res) => {
  const id = req.body.id;
  const isActive = req.body.isActive;
  console.log(isActive);
  console.log(id);
  connection.query(
    `UPDATE tasks SET isActive= ? WHERE id = ?`,
    [isActive, id],
    (err, data) => {
      if (err) return console.log(err);
      res.send(data);
    }
  );
});

module.exports = router;
