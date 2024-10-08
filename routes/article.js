const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const articleAdminController = require('../controllers/admin/articles')

router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);

router.post('/admin/article/create', articleAdminController.createArticle);
router.all('/admin/article/edit/:id', articleAdminController.updateArticle);
router.all('/admin/article/delete/:id', articleAdminController.deleteArticle);

module.exports = router;