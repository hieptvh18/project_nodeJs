// nhan all route -> export ra dung
const newRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');
const uploadRouter = require('./upload');

function route(app) {
    app.use('/news', newRouter);
    app.use('/', siteRouter);
    app.use('/course', coursesRouter);
    app.use('/me', meRouter);
    app.use('/upload', uploadRouter);
}

module.exports = route;