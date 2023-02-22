import express from "express";

const router = express.Router();

const users = [
  {
    name: "Muaz",
    age: 25,
  },
  {
    name: "Luqman",
    age: 21,
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push(user);

  res.send(`User with the name ${user.name} added into the database!`);
});

export default router;
