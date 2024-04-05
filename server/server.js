const express = require('express');
require('dotenv').config();
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { start } = require('repl');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { createServer } = require('http');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

//CORS
const httpServer = createServer(app);
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true
};

app.use(cors(corsOptions));



app.use(express.static(path.join(__dirname, '../PocketPorridge/dist')));

const startApolloServer = async () => {
    await server.start();
    
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    
    app.use(
        '/graphql',
        expressMiddleware(server, {
            context: authMiddleware,
        })
        );
        
        if (process.env.NODE_ENV === 'production') {
            app.use(express.static(path.join(__dirname, '../PocketPorridge/dist')));
        }
        
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../PocketPorridge/dist/index.html'));
        });
        
        db.once('open', () => {
            httpServer.listen(PORT, () => {
                console.log(`Server listening on port ${PORT}`);
                console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
            });
        });
    };
//Socket.io setup
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:3001',
        methods: ['GET', 'POST'],
        credentials: true
    }
});
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  })}
  
  );
    
    startApolloServer();