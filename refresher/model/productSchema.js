const mongoose =require('mongoose');

const productSchema= new monoose.Schema({
name: {type:String, required:true},
price:{type:String, required:true}
});

module.exports=mongoose.model('products',productSchema);