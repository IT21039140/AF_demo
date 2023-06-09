const express=require('express')

const {
    getMeals,
    getOneMeal,
    deleteMeal,
    updateMeal,
    addMeal
}=require('../controllers/mealController')

const router =express.Router()

//get all dat
router.get('/',getMeals)

//get ine data
router.get('/:id',getOneMeal)

//post a new data
router.post('/',addMeal)

//delete data
router.delete('/:id',deleteMeal)

//update data
router.patch('/:id',updateMeal)

module.exports = router 
