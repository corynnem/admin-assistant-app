let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1' :
        APIURL = 'http://localhost:3001';
        break;
    case 'fourofour.herokuapp.com' :
        APIURL = 'https://admin-assistant-server.herokuapp.com/'
}

export default APIURL;