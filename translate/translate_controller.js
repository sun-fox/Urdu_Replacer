const pool = require('../config/db_config')

var textSplit = null
var textLength = null

exports.main = (req,res) => {
        
        let text = "ashish apple"  //use text as input field
        if(text.length == 0)
        res.status(400).json({
                "message" : "input fields empty"
        })
     //function to split the text into array 
        else{
                textSplit =  splitStr(text)
                textLength = textSplit.length
                for(let i=0; i< textLength; i++)
                {
                        let data = textSplit[i]
                        pool.query("SELECT * FROM toHindi WHERE urdu IN (?)",[data],(err,result)=>{
                        replaceArr(result,i,res)
                        })
                }
       }
}

//replace the original array with new array
function replaceArr(data,i,res){
        if(data.length!=0)
       {
        textSplit[i] = data[0].hindi
       }
       if(i == textLength-1)
       {
        res.status(200).json({"string":textSplit.join(" ")})
       }
}

// to split the text
function splitStr(str){
        var string = str.split(" ")
        return string
     }