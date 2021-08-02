import $  from '../core/util/createElem'
import {body} from '../core/util/globalVars'
export default class DonateForm{

    constuctor(totalAmount){
        this.totalAmount=totalAmount
    }
    updateTotalAmount(newAmount){
        if(newAmount){
            return`${newAmount}$`
        }
        return '0$'
    }

    render(){        
        const donateForm = $('form','donate-form')
        body.append(donateForm)

        const titleForm = $('h1','',{'id':'total-amount'})
        titleForm.textContent=this.updateTotalAmount(this.totalAmount)
        donateForm.append(titleForm)

        const labelForm = $('label','donate-form__input-label')
        labelForm.textContent='Введите сумму в $'
        donateForm.append(labelForm)

        const inputForm = $('input','donate-form__donate-input',{
               name:"amount",
               type:"number",
               max:"100",
               min:"0",
               required:"",
        })
        labelForm.append(inputForm)

        const confirmButton = $('button','donate-form__submit-button',{type:'submit'})
        confirmButton.textContent='Задонатить'
        donateForm.append(confirmButton)
    }

}