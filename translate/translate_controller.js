const pool = require('../config/db_config')

var emptyArr =[]

exports.main = (req,res) => {

        let text = "salam walekum"
        //function to split the text into array 
        let splitText =  splitStr(text)
        
        for(let i=0; i<splitText.length; i++)
        {
            let data = splitText[i]
            pool.query("SELECT * FROM toHindi WHERE urdu IN (?)",[data],(err,result)=>{
            emptyArr.push(result)
            })
        }
    console.log(emptyArr)
}

// to split the text
function splitStr(str){
   var string = str.split(" ")
   return string
}
