// nhan all route -> export ra dung
const newRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newRouter);
    app.use('/', siteRouter);
    app.use('/course', coursesRouter);
    app.use('/me', meRouter);
}

module.exports = route;