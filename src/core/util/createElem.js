export default function createElem(tag='div',className='',atr=undefined){
    const el=document.createElement(tag)
    if(className){el.classList.add(className)}
    if(atr){        
        const keys = Object.keys(atr)
        const values = Object.values(atr)
        keys.map((key,index)=>{
            el.setAttribute(key,values[index])
        })
    }
    return el
}