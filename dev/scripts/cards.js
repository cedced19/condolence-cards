var message = window.location.hash.replace('#', '').replace(/%20/g, ' ').replace(/%21/g, '!').replace(/%C3%AB/g, 'ë');
document.getElementById('message').textContent = message;
document.title = 'Condolence Cards - ' + message;