const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors'); // Add this line

// Middleware to validate user input
const app = express()
app.use(express.json())
app.use(cors()); // Use CORS middleware

mongoose.connect('mongodb://localhost:27017/LGdata',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(
    () => console.log('Connected to MongoDB')
)
.catch(
    error => console.error('Error connecting to MongoDB:', error)
)

// User Schema

const userSchema = new mongoose.Schema({
    username: String,
    phoneno:Number,
    email: String,
    password: String,
    conpassword:String
});

const User = mongoose.model('User', userSchema);

// Endpoint to create a new user

app.post('/userdetails', async (req, res) => {
    User.findOne({ email: req.body.email }).then((data) => {
        if (data) {
            //err message
            res.send({ message: 'user alredy exists' })
        } else {
            //add the data

            // creating a new object
            let udata = new User({
                username: req.body.name,
                phoneno: req.body.phone,
                email: req.body.email,
                password: req.body.password,
                conpassword:req.body.confirmPassword                
            })

            // saving the data and displaying the message
            udata.save().then(() => {
                res.send({ message: "user registered succesfully" })
            }).catch(() => {
                res.send({ message: "user registraion failed. try after sometime" })
            })
        }
    })
});

app.post('/login',(req,res)=>{
    User.findOne({email:req.body.email})
    .then((userData)=>{
        if(userData){
          if(req.body.password === userData.password){
            res.send({message:"login succenfull" , status:200})
          }else{
            res.send({message:"invalid user id or passowrd"})
          }
        }
        else{
          res.send({message:'user not found'})
        }
      }
    )
  })

app.listen(5000, () => console.log(`Server running on port 5000`));
