import express from 'express'

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(req, res) => {
    res.send("Users are coming soon")
})

const users = [
  {
    id: 1,
    name: "Rahim",
    email: "rahim@example.com"
  },
  {
    id: 2,
    name: "Karim",
    email: "karim@example.com"
  },
  {
    id: 3,
    name: "Fahad",
    email: "fahad@example.com"
  },
  {
    id: 4,
    name: "Sakib",
    email: "sakib@example.com"
  },
  {
    id: 5,
    name: "Nusrat",
    email: "nusrat@example.com"
  }
];

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})