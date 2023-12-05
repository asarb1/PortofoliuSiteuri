const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const findOrCreate = require("mongoose-find-or-create");
const bcrypt = require('bcrypt');

pp.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.set("strictQuery", true);

var db = mongoose.connect("mongodb+srv://andreeasarb96:andreeasarb21072018@cluster0.61szlim.mongodb.net/Portofolii");
const portofoliuSchema = new mongoose.Schema({
  id: Integer,
  imagine: String,
  titlu: String,
  descriere: String,
  link: String
});

const Portofoliu = mongoose.model("Portofoliu", portofoliuSchema);

const imagineSchema = new mongoose.Schema({
  id: Integer,
  src: String,
  alt: String
});

const Imagine = mongoose.model("Imagine", imagineSchema);

const userSchema = new mongoose.Schema({
  email: String,
  parola: String,

});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);

// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy());

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

app.use(function(req, res, next){
  res.setHeader('Acces-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Acces-Control-Allow-Methods', 'GET', 'POST', 'OPTION', 'PUT', 'PATCH', 'DELETE');
  res.setHeader('Acces-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Acces-Control-Allow-Credentials', true);
  next();
});

app.get("/home", function(req, res){
  res.render("home");
});

app.get("/user", function(req, res){
  res.render("user");
});

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/admin", function(req, res){
  res.render("admin");
});

app.get("/edit", function(req, res){
  res.render("edit");
});

app.post("/home", function(req, res){
  bcrypt.hash(req.body.parola, saltRounds, function(err, hash){
    const newUser = new User({
      email: req.body.email,
      parola: hash
    });
    newUser.save(function(err){
      if(err){
        console.log(err);
      }else{
        res.render("admin");
      }
    });
  });
});