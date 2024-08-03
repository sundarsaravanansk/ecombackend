const orderModel = require('../modle/ordermodels')
const productModel = require('../modle/Productsmodels')

exports.createorder = async (req , res , next) => {

    const cardItem = req.body;
    const amount = Number(cardItem.reduce((acc ,item)=> (acc + item.product.price * item.qty) , 0)).toFixed(2);
    const status = 'pending';
    const order =  await orderModel.create(
        {
            cardItem,
            amount,
            status
        }
    );
    //update stock item 
    // cardItem.forEach(async (item)=>{
    //    const product= await productModel.findById(item.product._id);
    //     product.stock = product.stock - item.qty;
    //     await product.save();
    // })
    res.json(
        {
            success : true,
            order
        }
    )
}