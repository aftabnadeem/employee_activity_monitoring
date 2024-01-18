const currdate=()=>{
const ctdate=new Date()
let mm=ctdate.getMonth()+Number(1)
return ctdate.getFullYear()+"-"+mm+"-"+ctdate.getDate()
}

const crtime=()=>{
    const itdate=new Date()
    return(itdate.getHours() + ':' + itdate.getMinutes() + ':' + itdate.getSeconds())
}
export{currdate, crtime}
