import { json } from 'body-parser';
import express from 'express';
import db from './db';

const router = express.Router();

// API ping route.
router.get('/ping', function (req, res) {
  res.send('OK');
});

router.get('/docs', async (req, res, next) => {
  try {
    db.all('select * from docs', (error, rows) => {
      res.json(rows);
    });
  } catch (err) {
    next({ status: 400, message: 'failed to get docs' });
  }
});

router.post('/docs', (req, res, next) => {
  const { author, content } = req.body;
  db.run(`INSERT INTO docs(author, content) VALUES(?, ?)`, [author, content], function (error) {
    if (error) {
      next({ status: 400, message: 'failed to create docs' });
    }
  });
  res.send({ content });
});

router.put('/docs/:id', async (req, res, next) => {
  const { author, content } = req.body;
  const { id } = req.params;
  db.run(`UPDATE docs set author=?, content=? WHERE id=?`, [author, content, id], function (error) {
    if (error) {
      next({ status: 400, message: 'failed to update docs' });
    }
  });
  res.send({ content });
});

router.delete('/docs/:id', async (req, res, next) => {
  const { id } = req.params;

  db.run(`DELETE FROM docs WHERE id = ?`, [id], function (err) {
    if (err) {
      next({ status: 400, message: 'failed to delete docs' });
    }
  });
  res.send('OK');
});
export default router;
