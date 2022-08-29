const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class

const Schema = mongoose.Schema;
	
const groceriesSchema = new Schema ({
    item : String,
    category : String,
    money : Number
});
