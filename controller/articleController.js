const fs = require('fs');
const { get } = require('http');
const { nextTick } = require('process');
const Article = requrie('../models/articleModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

/* CONTROLLER */

/* -------------------------------------------------------------------------- */
/*                               GET ALL ARTICLES                               */
/* -------------------------------------------------------------------------- */
exports.getAllArticles = catchAsync(async(req, res) => {

    const articles = await Article.find();

    res.status(200).json({
        status: 'success',
        result: articles.length,
        data: { articles }
    });

})

/* -------------------------------------------------------------------------- */
/*                                 GET ARTICLE                                 */
/* -------------------------------------------------------------------------- */
exports.getArticle = catchAsync(async(req, res) => {

    const article = await Article.findById(req.params.id);
    if(!article){
        return next(
            new AppError('No article found with this ID !', 404)
        );
    }
    res.status(200).json({
        status: 'success',
        data: { article },
    });

});

/* -------------------------------------------------------------------------- */
/*                                CREATE ARTICLE                               */
/* -------------------------------------------------------------------------- */
exports.createArticle = catchAsync(async(req, res) => {
    const article = await Article.create(req.body);
    res.status(200).json({
        status: 'success',
        data: { article }
    });
});

/* -------------------------------------------------------------------------- */
/*                               UPDATE ARTICLE                               */
/* -------------------------------------------------------------------------- */
exports.updateArticle = catchAsync(async (req,res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        //runValidators: true,
    });
    if(!article){
        return next(
            new AppError('No article found with this ID !', 404)
        );
    }
    res.status(200).json({
        status: 'success',
        data: { article }
    });

}); 

/* -------------------------------------------------------------------------- */
/*                               DELETE ARTICLE                               */
/* -------------------------------------------------------------------------- */
exports.deleteArticle = catchAsync(async (req, res) => {

    const article = await Article.findByIdAndDelete(req.params.id);
    if(!product){
        return next(new AppError('No article found with this ID !', 404));
    }
    res.status(204).json({ status: 'success', data: null });
    
});