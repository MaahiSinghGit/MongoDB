const MongoClient = require('mongodb').MongoClient;

const url ='mongodb+srv://Manoj-Bisht:asdfghjkl@cluster0.a1bfmfa.mongodb.net/product_test?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price
  };
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('products').insertOne(newProduct);
  } catch (error) {
    return res.json({message: 'Could not store data.'});
  };
  client.close();
  res.json(newProduct);
};
const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);
  let product;

    try{
      await client.connect();
      const db=client.db();
      product= await db.collection('products').find().toArray();

    }
    catch(error){
      return res.json({message:'unable to get data'});
    }
    client.close();
    res.send(product);


};
exports.createProduct = createProduct;
exports.getProducts = getProducts;
