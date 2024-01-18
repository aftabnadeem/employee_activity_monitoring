import {KeyReaderLogger} from "key-reader-logger";

import { currdate,crtime } from './datetime.js'
import inactive_model from "./models/inactive.js";
const k = new KeyReaderLogger();
const kLog = new KeyReaderLogger();
kLog.startAll();
let s=0;
let count=0;
let x=0;
let c=0;
const stop=()=>{
    c=1;
}
const work=()=>{
    let t=setTimeout(async()=>{
        
    if(count==0){
    if(x==1){
        console.log("InActive");
    }    
    else if(x==0){
    const indt=new inactive_model({
        date:currdate(),
        inactive_start:crtime(),
        inactive_end:''
    })
    await indt.save()
    s=1;
    x=1;
    }
    
    }
    count=0;
    work()
        }, 5000);
        if(c==1){
            clearTimeout(t)
        }
    }
kLog.on('keyData',async()=>{
    
    count=count+1
    if(s==1){
        await inactive_model.findOneAndUpdate({date:currdate()},{$set:{inactive_end:crtime()}})
        s=0;
         }
       
    });
kLog.on('mouseData',async()=>{
    
        count=count+1
        if(s==1){
            await inactive_model.findOneAndUpdate({date:currdate()},{$set:{inactive_end:crtime()}})
            s=0;
             }
           
        });    

        work()

export {work,stop}

