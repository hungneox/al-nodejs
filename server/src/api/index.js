import express from 'express';

const router = express.Router();

// API ping route.
router.get('/ping', function (req, res) {
  res.send('OK');
});

router.get('/docs', async (req, res, next) => {
  try {
    // return success(res, docs);
    res.json([
      {
        id: 1,
        content: "Hello World",
      },
      {
        id: 2,
        content: "Hello World 1",
      },
      {
        id: 3,
        content: "Hello World 2",
      }
    ])
  } catch (err) {
    next({ status: 400, message: 'failed to get docs' });
  }
});

router.post('/docs', async (req, res, next) => {
  try {
  } catch (err) {
    next({ status: 400, message: 'failed to create docs' });
  }
});

router.put('/docs/:id', async (req, res, next) => {
  try {
    return success(res, docs);
  } catch (err) {
    next({ status: 400, message: 'failed to update docs' });
  }
});

router.delete('/docs/:id', async (req, res, next) => {
  try {
    return success(res, 'docs deleted!');
  } catch (err) {
    next({ status: 400, message: 'failed to delete docs' });
  }
});
export default router;
