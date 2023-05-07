const Meal=require('../models/mealPlaneModels')
const mongoose=require('mongoose')

//get all meals
const getMeals=async(req,res)=>{
    const meals=await Meal.find({}).sort({createdAT:-1})
    res.status(200).json(meals)
}
//get a single meal
const getOneMeal = async(req,res)=>{
    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such meal information'})
    }

    const oneMeal=await Meal.findById(id)
    
    if(!oneMeal){
        return res.status(400).json({error:'No such meal information'})
    }
    res.status(200).json(oneMeal)
}

//add new meal
const addMeal = async(req,res)=> {
    const {foodItem,weightPrePerson}=req.body

    //add meal to db
    try{
        const meal=await Meal.create({foodItem,weightPrePerson})
        res.status(200).json(meal)
    }
    catch (error) {
        res.status(400).json({error:error.message})
    }
}

//delete a meal
const deleteMeal=async(req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such meal information'})
    }
    
    const meal=await Meal.findOneAndDelete({_id: id})

    if(!meal){
        return res.status(400).json({error:'No such meal information'})
    }

    res.status(200).json(meal)
}
//udate meal
const updateMeal=async(req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such meal information'})
    }
    const meal=await Meal.findByIdAndUpdate({_id:id},{
        ...req.body
    })
    if(!meal){
        return res.status(400).json({error:'No such meal information'})
    }
    res.status(200).json(meal)
}

module.exports={
    getMeals,
    getOneMeal,
    deleteMeal,
    updateMeal,
    addMeal
}