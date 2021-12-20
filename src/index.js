const express = require('express');
const path = require('path');
const app = express();



//setings
app.use(express.static('src/public'));
app.set('port', 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes
app.use(require('./routes/index'));



app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));

});