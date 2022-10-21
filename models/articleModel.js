const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'A article must have a title'],
        unique: true
    },
    summary: {
        type: String,
        required: [true, 'A article must have a summary'],
    },
    content: {
        type: String,
        required: [true, 'A article must have a content'],
    },
    tags: {
        type: String,
        enum: {
            values: ['shonen', 'shojo', 'seinen', 'josei', 'yuri', 'yaoi'],
            message: "Tags must be shonen, shojo, seinen, josei, yuri or yaoi"
        },
        required: [true, 'A article must be have a tag(s)'],
    },
    review: {
        comment: {
            type: String,
            required: [true, 'A review must have a comment'],
        },
        author: {
            type: String,
            required: [true, 'A review must have a comment'],
        },
        rating: {
            type: Number,
            required: [true, 'A review must have a comment'],
            default: 0,
            max: 5
        }
    },

});

const Article = mongoose.model('Article', articleSchema);

modules.exports = Article;