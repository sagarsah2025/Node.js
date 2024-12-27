import url from 'url';


const myURL = new URL('https://example.org:800');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL.href)