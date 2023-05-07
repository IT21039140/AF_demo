const mongoose=require('mongoose')

const schema=mongoose.Schema

const mealSchema=new schema({
   foodItem:{
    type:String,
    require:true
   },
   weightPrePerson:{
    type:Number,
    require:true
   }
},{timestamps:true})
module.exports=mongoose.model('meal',mealSchema)
