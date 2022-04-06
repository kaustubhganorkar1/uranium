const printDate = ()=>
{
    console.log(new Date().getDate());
}

// module.exports.printDate = printDate()


const printMonth = ()=>{
    console.log(new Date().getMonth()+1);
}

// module.exports.printMonth = printMonth();

const getBatchInfo = ()=>{
    console.log("Uranium, W3D3, the topic for today is Node js and NPM");
}

module.exports = {printDate, printMonth, getBatchInfo}