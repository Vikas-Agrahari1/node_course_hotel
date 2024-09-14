const express = require("express")
const routs = express.Router()

const menu = require("./../models/menu")


routs.post('/', async (req, res) => {

    try{
        const data = req.body;

        const newPerson = new menu(data);

        const response = await newPerson.save()
        console.log('Data saved')
        res.status(200).json(response)

    }catch(err){
        console.log('Error saving data', err)
        res.status(500).json(err, 'internal server error')
    }

})

routs.get('/', async(req, res) => {
    try{
        const data = await menu.find()
        console.log('Data fetched')
        res.status(200).json(data)
    }catch(err){
        console.log('Error saving data', err)
        res.status(500).json(err, 'internal server error')
    }
})

routs.get('/:menuType', async(req, res) => {
    try{
        const menuType = req.params.menuType;
        if(menuType == 'Sweet' || menuType == 'Soure' || menuType == 'Spicy'){
            const response = await menu.find({taste: menuType})
            console.log('Data fetched')
            res.status(200).json(response)

        }else{
            res.status(404).json({error: 'Invalid taste type'})
        }
        
    }catch(err){
        console.log('Error saving data', err)
        res.status(500).json(err, 'internal server error')
    }
})

routs.put('/:id', async(req, res) => {
    try{
        const menuId = req.params.id
        const updatedData = req.body


        const response = await menu.findByIdAndUpdate(menuId, updatedData, {
            new : true,
            runValidators:true,
        })
            

        if (!response)
        return    res.status(404).json({error: 'Invalid Munu Id'})
        
        console.log('Menu Data fetched')
        res.status(200).json(response)
        
    }catch(err){
        console.log('Error saving data', err)
        res.status(500).json(err, 'internal server error')
    }
})

routs.delete('/:id', async(req, res) => {
    try{
        const personId = req.params.id
        const updatedData = req.body


        const response = await menu.findByIdAndDelete(personId, updatedData, {
            new : true,
            runValidators:true,
        })
            

        if (!response)
        return    res.status(404).json({error: 'Invalid Menu Id'})
        
        console.log('Menu Data Deleted')
        res.status(200).json(response)
        
    }catch(err){
        console.log('Error saving data', err)
        res.status(500).json(err, 'internal server error')
    }
})

module.exports = routs
 