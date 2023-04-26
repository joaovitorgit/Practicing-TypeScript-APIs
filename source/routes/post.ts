import express from "express";
import controller from '../constrollers/post'

const router = express.Router();

router.get('/posts', controller.getPosts);
export = router;