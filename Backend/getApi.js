const express = require("express");
const axios = require("axios");

const app = express();
let existingFruits = [];

//fetch all fruits
async function getFruits(dataFruits) {
  try {
    const response = await axios.get(
      `https://www.fruityvice.com/api/fruit/all?${dataFruits}`
    );
    const responseFruits = response.data;
    const isDuplicate = existingFruits.some((fruit) => fruit.name === responseFruits.name); 
    if (!isDuplicate) {
      existingFruits.push(responseFruits);
    } else {
      console.log("Fruit already exists.");
    }
    return existingFruits;
  } catch (error) {
    console.log("Error: ", error);
  }
}

app.get('/', (req, res) => {
     res.send('welcome koxy b');
})


app.get('/api/fruits', async (req, res) => {
  try {
    const fruits = await getFruits(existingFruits)
    console.log(fruits);
    res.send(JSON.stringify(fruits))
    console.log(res);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send("Server Error");
  }
})

// Delete a fruit by ID and name
app.delete("/api/fruits/:id/", async (req, res) => {
  const fruitId = req.params.id;
  const fruitName = req.query.name;
  try {
    const fruits = await getFruits(existingFruits);
    const updatedFruits = fruits.filter(
      (e, i) => i !== fruitId && e.name !== fruitName
    );
    res.json(updatedFruits);
    console.log("Fruit deleted successfully.");
  } catch (error) {
    console.error("Error: ", error);
  }
});

// read data by name or id
app.get("/api/fruits/:id", async (req, res) => {
  const fruitId = req.params.id;
  const fruitName = req.query.name;
  try {
    const fruits = await getFruits(existingFruits);
    const fruit = fruits.filter(
      (e, i) => i === fruitId || e.name === fruitName
    );
    res.json(fruit);
    console.log("Fruit read successfully.");
  } catch (error) {
    console.error("Error: ", error);
  }
});

app.listen(3000, () => console.log("listening on port 3000"));
