const express =require('express')
const router = express.Router();
const { Album } = require('../models')

router.get('/', async (req,res,next)=>{
    try{
        const albums = await Album.find()
        res.status(200).send({data:albums})
    }
    catch(error){
       res.status(404).send({error:'There is nothing here'}) 
    }
})

router.post('/', async (req,res,next)=>{
    try{
        await Album.create(req.body)
        res.sendStatus(201)
    }
    catch(error){ res.status(500).send({error: error.message})
}
})

router.get('/:id', async (req,res,next)=>{
    try{
        const { id } = req.params
        const abum = await Album.findById(id)
        res.status(200).send({data:album})
    }
        catch(error){
            res.status(404).send({error:'Could nor find this album'})
        }
    })

    router.put('/:id', async (req, res) => {
        try{
            await Album.findByIdAndUpdate(req.params.id, req.body)
            const updatedAlbum = await Album.findById(req.params.id)
            res.status(200).send({data: updatedAlbum})
        }
        catch(error){
            res.status(500).send({error:'Failed to update'})
        }
    })

    router.delete('/:id', async (req, res) => {
        try{
            await Album.findByIdAndRemove(req.params.id)
            res.sendStatus(204)
        }
        catch(error){
            res.status(500).send({error:'Failed to delete'})
        }
    })

    router.get('/album/:song', async (req,res,next)=>{
        try{
            const songTitle = req.params.song[0].toUpperCase() + req.params.song.slice(1)
            const album = await Album.find({"songs.title" : songTitle})
            res.status(200).send({data:album})
        }
        catch(error){
            res.status(404).send({error:'Could not find this album'})
        }
    })
    
module.exports = router
        
    
