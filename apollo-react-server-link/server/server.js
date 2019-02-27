import express from 'express';
import server from './src/schema';
import cors from 'cors';

const app = express();

app.use('*', cors({origin: 'http://localhost:3000'}));

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)