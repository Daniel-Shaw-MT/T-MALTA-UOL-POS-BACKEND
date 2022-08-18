var express = require('express');
var router = express.Router();

const productSchema = require('../schemas/productSchema');
const categorySchema = require('../schemas/categorySchema');
const customerSchema = require('../schemas/categorySchema');
const employeeSchema = require('../schemas/employeeSchema');
const loyaltySchema = require('../schemas/loyaltySchema');
const offersSchema = require('../schemas/offersSchema');
const transactionsSchema = require('../schemas/transactionsSchema');

/* GET home page. */

// API INFO ROUTE, just returns the git repo
router.get('/', async function(req, res, next) {
  res.redirect(200, 'https://github.com/Daniel-Shaw-MT/T-MALTA-UOL-POS-BACKEND')
});

router.get('/allProducts', async function(req, res, next) {
  if (req.body.Auth_level < 0) {
    res.send(403, "You don't have access to this functionality!");
  }
})

// Add product route
router.post('/addProduct', async(req, res) => {
  const data = new productSchema({
    catID: req.body.catID,
    Name: req.body.Name,
    Price: req.body.Price,
    Purchase_Price: req.body.Purchase_Price,
    Dimensions: req.body.Dimensions,
    Offer_ID: req.body.Offer_ID
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave)
  } 
  catch(error) {
    res.status(400).json({message: error.message})
  }
});

// Add category route
router.post('/addCategory', async(req, res) => {
  const data = new categorySchema({
   Description: req.body.Description
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave)
  } 
  catch(error) {
    res.status(400).json({message: error.message})
  }
});

// Add customer route
router.post('/newCustomer', async(req, res) => {
  const data = new customerSchema({
    Full_name: req.body.Full_name,
    Address: req.body.Address,
    DOB: req.body.DOB,
    Telephone_no: req.body.Telephone_no,
    Money_spent: req.body.Money_spent,
    Loyalty_card_ID: req.body.Loyalty_card_ID
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave)
  } 
  catch(error) {
    res.status(400).json({message: error.message})
  }
});

// Add employee route
router.post('/addEmployee', async(req, res) => {
  const data = new employeeSchema({
    Full_name: req.body.Full_name,
    Auth_level: req.body.Auth_level,
    DOB: req.body.DOB,
    Address: req.body.Address
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave)
  } 
  catch(error) {
    res.status(400).json({message: error.message})
  }
});

// Add a loyalty card
router.post('/newLoyaltyCard', async(req, res) => {
  const data = new loyaltySchema({
    Customer_ID: req.body.Customer_ID,
    Discount_Percentage: req.body.Discount_Percentage
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave)
  } 
  catch(error) {
    res.status(400).json({message: error.message})
  }
});

// Add an offer
router.post('/newOffer', async(req, res) => {
  const data = new offersSchema({
    Offer_description: req.body.Offer_description,
    Start_date: req.body.Start_date,
    End_date: req.body.End_date,
    Percent: req.body.Percent
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave)
  } 
  catch(error) {
    res.status(400).json({message: error.message})
  }
});

// Add a transaction (New transaction)
router.post('/newTransaction', async(req, res) => {
  const data = new transactionsSchema({
    Customer_ID: req.body.Customer_ID,
    Date: req.body.Date,
    Money_spent: req.body.Money_spent,
    Method_of_payment: req.body.Method_of_payment,
    Items_bought: req.body.Items_bought,
    Employee_ID: req.body.Employee_ID
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave)
  } 
  catch(error) {
    res.status(400).json({message: error.message})
  }
});

router.get('/getAllProducts', async(req, res) => {
  let products = await productSchema.find({}).exec();
  res.status(200).send(products);
});

router.get('/getAllCategories', async(req, res) => {
  let categories = await categorySchema.find({}).exec();
  res.status(200).send(categories);
});

router.get('/getAllTransactions', async(req, res)=>{
  let transactions = await transactionsSchema.find({}).exec();
  res.status(200).send(transactions);
});

router.get('/getAllCustomers', async(req, res) => {
  let customers = await customerSchema.find({}).exec();
  res.status(200).send(customers);
});

router.get('/getAllOffers', async(req, res) => {
  let offers = await offersSchema.find({}).exec();
  res.status(200).send(offers);
});

router.get('/getAllEmployees', async(req, res) => {
  let employees = await employeeSchema.find({}).exec();
  res.status(200).send(employees);
});

router.get('/getProdViaName/:id', async(req, res) => {
  var id = req.params.id;
  console.log(id);
  let product = await productSchema.find({Name: id}).exec();
  if (product.length>0) {
    res.status(200).send(product);
  }
  else {
    res.status(404).json({
      message: 'No product with that name found!'
    });
  };
  
});

router.get('/getEmployeeViaName/:id', async(req, res) => {
  var id = req.params.id;
  let employee = await employeeSchema.find({Full_name: id}).exec();
  if (employee.length>0) {
    res.status(200).send(employee);
  }
  else {
    res.status(404).json({
      message: 'No employee with that name found!'
    });
  };
  
});

router.get('/getCustomerViaName/:id', async(req, res) => {
  var id = req.params.id;
  let customer = await customerSchema.find({Full_name: id}).exec();
  if(customer.length>0){
    res.status(200).send(customer);
  }else {
    res.status(404).json({message: 'No customer by that name found!'});
  };
});

// router.get('/getTransaction/:id', async(req, res) => {
//   var id = req.params.id;
//   let customer = await transactionsSchema.find({Name: id}).exec();
//   if(customer.length>0){
//     res.status(200).send(customer);
//   }else {
//     res.status(404).json({message: 'No customer by that name found!'});
//   };
// });


module.exports = router;
