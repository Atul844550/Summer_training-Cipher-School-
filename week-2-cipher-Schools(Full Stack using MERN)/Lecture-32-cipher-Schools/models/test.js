const mongoose = require('mongoose');
const { expect } = require('chai');
const connectDB = require('../database');
const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');

describe('CRUD Operations', () => {
  before(async () => {
    await connectDB();
  });

  let userId, categoryId, productId;

  // Create tests
  it('should create a user', async () => {
    const user = new User({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      country: 'USA'
    });
    const savedUser = await user.save();
    userId = savedUser._id;
    expect(savedUser.name).to.equal('John Doe');
    expect(savedUser.email).to.equal('john.doe@example.com');
  });

  it('should create a category', async () => {
    const category = new Category({
      categoryName: 'Fiction'
    });
    const savedCategory = await category.save();
    categoryId = savedCategory._id;
    expect(savedCategory.categoryName).to.equal('Fiction');
  });

  it('should create a product', async () => {
    const product = new Product({
      productName: 'Book Title',
      description: 'A great book',
      price: 19.99,
      category: categoryId,
      quantity: 100
    });
    const savedProduct = await product.save();
    productId = savedProduct._id;
    expect(savedProduct.productName).to.equal('Book Title');
    expect(savedProduct.price).to.equal(19.99);
  });

  // Read tests
  it('should read a user', async () => {
    const user = await User.findById(userId);
    expect(user.name).to.equal('John Doe');
  });

  it('should read a product', async () => {
    const product = await Product.findById(productId).populate('category');
    expect(product.productName).to.equal('Book Title');
    expect(product.category.categoryName).to.equal('Fiction');
  });

  it('should read categories', async () => {
    const categories = await Category.find();
    expect(categories).to.have.lengthOf(1);
    expect(categories[0].categoryName).to.equal('Fiction');
  });

  // Update tests
  it('should update user country', async () => {
    const user = await User.findById(userId);
    user.country = 'Canada';
    const updatedUser = await user.save();
    expect(updatedUser.country).to.equal('Canada');
  });

  it('should update product quantity', async () => {
    const product = await Product.findById(productId);
    product.quantity = 200;
    const updatedProduct = await product.save();
    expect(updatedProduct.quantity).to.equal(200);
  });

  it('should update product price', async () => {
    const product = await Product.findById(productId);
    product.price = 29.99;
    const updatedProduct = await product.save();
    expect(updatedProduct.price).to.equal(29.99);
  });

  // Delete tests
  it('should delete a user', async () => {
    await User.findByIdAndDelete(userId);
    const user = await User.findById(userId);
    expect(user).to.be.null;
  });

  it('should delete a product', async () => {
    await Product.findByIdAndDelete(productId);
    const product = await Product.findById(productId);
    expect(product).to.be.null;
  });

  after(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });
});
