const MongoClient=require('mongodb').MongoClient;
const url='mongodb+srv://Manoj-Bisht:<password>@cluster0.a1bfmfa.mongodb.net/products_test?retryWrites=true&w=majority';
const  createProduct=async(req,res,next)=>{
    const newProduct={
        name:req.body.name,
        price:req.body.price
    }

    const client =new MongoClient(url);

    try{
        await client.connect();
        const db=client.db();
        const result=db.collection('products').insertOne(newProduct);

    }catch(error){
        return res.json({message:'unable to store data'});
    };
    client.close();
    
};

const getProduct=async(req,res,next)=>{

};

exports.createProduct=createProduct;
exports.getProduct=getProduct;
