const attendence=(se)=>{

if(se > 28700000){
    return 'Present'
}
else if(se > 14700000 && se < 28700000){
    return 'Half day'
}
else{
    return 'Absent'
}
}
export {attendence}