var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

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
