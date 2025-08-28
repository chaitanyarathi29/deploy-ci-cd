import express from 'express';
import { prismaClient } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  console.log('hi');
  res.send('Hello World');
});

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  const user = await prismaClient.user.create({
    data: { username, password }
  });

  res.json({
    message: "signup successful",
    id: user.id
  });
});

app.listen(3002);
