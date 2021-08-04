import moment from 'moment'
export function getFormattedTime(date){
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}

export function calculateSumOfNumbers(arr){
    if(arr.length)return
    return arr.reduce((summ,current)=>summ+current,0)
}