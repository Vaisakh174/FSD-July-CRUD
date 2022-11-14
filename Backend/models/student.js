const mongoose = require("mongoose");
const schema = mongoose.Schema;

const studentschema = new schema({
    name: { type: String, requied: true },
    age: { type: Number, requied: true },
    date:{type:Date,default:Date.now()}

});
let studentDATA = mongoose.model("studentdetail", studentschema);
module.exports = studentDATA;