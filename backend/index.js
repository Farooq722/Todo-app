const express = require("express");
const { createTodo, updateTodo } = require("./types"); // Ensure these are properly defined schemas
const { todo } = require("./db"); // MongoDB collection
const app = express();

app.use(express.json());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(400).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }
    // Add the todo item to MongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });

    res.json({
        msg: "Todo created",
    });
});

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});
    res.json({
        todos,
    });
});

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(400).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }

    await todo.updateOne(
        {
            _id: req.body.id,
        },
        {
            completed: true,
        }
    );

    res.json({
        msg: "Todo marked as completed",
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});