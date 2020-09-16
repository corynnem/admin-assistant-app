let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1' :
        APIURL = 'http://localhost:3001';
        break;
    case 'https://admin-assistant-server.herokuapp.com/' :
        APIURL = 'https://admin-assistant-app.herokuapp.com/'
}

export default APIURL;