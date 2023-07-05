const mongoose = require('mongoose');

const product=require('./model/products')
mongoose.connect('mongodb+srv://Manoj-Bisht:asdfghjkl@cluster0.a1bfmfa.mongodb.net/product_test?retryWrites=true&w=majority').then( ()=> {
    console.log('connected succesfully')
}).catch(()=>{
console.log('unable to connect')
});

const createProduct=async(req,res,next)=>{
const createProduct=new product({
name:req.body.name,
price:req.body.price
});
const result= await createProduct.save();
res.json(result);

}

const getProduct=async(req,res,next )=>{
const getProduct=await Product.find().exec();
res.json(getProduct);
}

exports.createProduct=getProduct;
exports.createProduct=createProduct;

