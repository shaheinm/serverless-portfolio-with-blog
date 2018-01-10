'use strict';

// Public API
module.exports.getPosts = (event, context, cb) => {
    cb(null, { message: 'Welcome to our Public API!' });
};

// Private API
module.exports.postPosts = (event, context, cb) => {
    cb(null, { message: 'Only logged in users can see this' });
};