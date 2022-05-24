const { publish } = require('gh-pages');
void publish('.', {
    src: [
        'index.html',
        'build/release.*',
        'build/debug.*'
    ]
});
