const express = require("express");
const sequelize = require("./config/database");
const Resource = require("./models/resources");

const app = express();
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Backend de EcoScan funcionando");
});

// CRUD de Resources
app.post("/resources", async (req, res) => {
  try {
    const resource = await Resource.create(req.body);
    res.status(201).json(resource);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/resources", async (req, res) => {
  try {
    const resources = await Resource.findAll();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/resources/:id", async (req, res) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    if (!resource) return res.status(404).json({ error: "No encontrado" });
    await resource.update(req.body);
    res.json(resource);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/resources/:id", async (req, res) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    if (!resource) return res.status(404).json({ error: "No encontrado" });
    await resource.destroy();
    res.json({ message: "Resource eliminated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

sequelize.sync().then(() => {
  app.listen(3000, () =>
    console.log("Servidor corriendo en http://localhost:3000")
  );
});
