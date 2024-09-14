const express = require("express")
const routs = express.Router()

const person = require("./../models/person")


routs.post('/', async (req, res) => {

    try{
        const data = req.body;

        const newPerson = new person(data);

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
        const data = await person.find()
        console.log('Data fetched')
        res.status(200).json(data)
    }catch(err){
        console.log('Error saving data', err)
        res.status(500).json(err, 'internal server error')
    }
})

routs.get('/:workType', async(req, res) => {
    try{
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'waiter' || workType == 'cook'){
            const response = await person.find({work: workType})
            console.log('Data fetched')
            res.status(200).json(response)

        }else{
            res.status(404).json({error: 'Invalid work type'})
        }
        
    }catch(err){
        console.log('Error saving data', err)
        res.status(500).json(err, 'internal server error')
    }
})

routs.put('/:id', async(req, res) => {
    try{
        const personId = req.params.id
        const updatedData = req.body


        const response = await person.findByIdAndUpdate(personId, updatedData, {
            new : true,
            runValidators:true,
        })
            

        if (!response)
        return    res.status(404).json({error: 'Invalid Person Id'})
        
        console.log('Person Data fetched')
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


        const response = await person.findByIdAndDelete(personId, updatedData, {
            new : true,
            runValidators:true,
        })
            

        if (!response)
        return    res.status(404).json({error: 'Invalid Person Id'})
        
        console.log('Person Data Deleted')
        res.status(200).json(response)
        
    }catch(err){
        console.log('Error saving data', err)
        res.status(500).json(err, 'internal server error')
    }
})

module.exports = routs