import express from 'express';
import path from 'path';

const app = express();
const PORT = 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/hello.html'));
});

app.listen(PORT, () => {
    console.log('Server listening on port 3000');
});