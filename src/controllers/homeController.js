import db from '../models/index'

let getHomePage = async (req,res)=>{
    try {
        let data = await db.User.findAll()
        console.log(JSON.stringify(data))
        return res.render('homepage',{
            data: JSON.stringify(data)
        })
    } catch (err) {
        console.log(err)
    }
    
    
}
module.exports = {
    getHomePage: getHomePage
}