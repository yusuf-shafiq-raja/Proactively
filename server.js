const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');
const connectDB = require('./config/db');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH']
  }
});

// Connect to DB
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/forms', formRoutes);

// WebSocket setup
const formSocket = require('./sockets/formSocket');
formSocket(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
