const mongoose = require("mongoose")
//mongoose url handy 
// mongodb+srv://farooqytworld:MCmsI1ZfOMxGYAB3@cluster0.wrgm2.mongodb.net/
mongoose.connect("mongodb+srv://farooqytworld:MCmsI1ZfOMxGYAB3@cluster0.wrgm2.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
