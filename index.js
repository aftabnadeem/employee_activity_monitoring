import express from 'express'
import { currdate,crtime } from './datetime.js'
import { convertMsToTime } from './mstotime.js'
import { attendence } from './attendance.js'
import Stopwatch from 'statman-stopwatch'
import { work,stop } from './detect.js'
import { employeemodel } from './models/employeetrack.js'
import { con } from './connect.js'

const app=express()
const sw=new Stopwatch();
app.set('view engine','ejs')
con()
app.get('/checkin', async (req, resp) => {
    sw.start()
    work()
    const empdt=new employeemodel({
        date:currdate(),
        checkin:crtime(),
        checkout:'',
        total:'',
        attendence:''
    })
    await empdt.save()
    const data=await employeemodel.find()
    resp.render('index',{data})
    
})

app.get('/checkout', async (req,resp) => {
    stop()
    await employeemodel.findOneAndUpdate({date:currdate()},{$set:{checkout:crtime(),total:convertMsToTime(sw.read()),attendence:attendence(sw.read())}})
    const data=await employeemodel.find()
    resp.render('index',{data})
    
})
app.listen(8080);