const mongoose = require("mongoose")
//mongoose url handy 
// mongodb+srv://<db_username>:<db_password>@cluster0.wrgm2.mongodb.net/
mongoose.connect("mongodb+srv://<db_username>:<db_password>@cluster0.wrgm2.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
