var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/social', function () {})
    .then(() => {
     console.log('mongo is running')
    })
    .catch(err => { 
        console.error('App starting error:', err.stack);
        process.exit(1);
    });
module.exports= mongoose;