const mongoose = require('mongoose');

mongoose.connect(process.env.MongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});