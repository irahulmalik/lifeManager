const xpress = require('express');
const connectDb = require('./connection')
const app =xpress();

connectDb();

app.use(xpress.json({extended:false}))
app.use('/api/userModel',require('./API/User'));
app.use('/app/note/addnote',require('./API/notes'))
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('server Started'));
//to start server type node server