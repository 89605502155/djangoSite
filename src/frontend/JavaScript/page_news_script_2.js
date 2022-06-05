const url="127.0.0.1:4545";

const xhr=new XMLHttpRequest();

xhr.open('GET',url);

xhr.send('hello golang');
