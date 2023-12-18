import express from 'express';
import { handler } from './build/handler.js';
const app = express();
app.use(handler)

app.get('/ping', function(req, res) {
    res.send('Pong');
})

app.listen(5604, ()=> {
    console.log('Server started on 5604');
})
