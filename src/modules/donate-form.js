import $  from '../core/util/createElem'
import {body} from '../core/constants/globalVars'
import {Settings}from '../core/constants/settings'

export default class DonateForm{

    titleForm = $('h1','',{'id':'total-amount'})

    constuctor(totalAmount){
        this.totalAmount=totalAmount
    }
    updateTotalAmount(newAmount){
        if(newAmount){
        return this.titleForm.textContent=`${newAmount}${Settings.currency}`
        }
        return this.titleForm.textContent=`0${Settings.currency}`
    }

    render(){        
        const donateForm = $('form','donate-form')
        body.append(donateForm)

        this.titleForm.textContent=this.updateTotalAmount(this.totalAmount)
        donateForm.append(this.titleForm)

        const labelForm = $('label','donate-form__input-label')
        labelForm.textContent=`Введите сумму в ${Settings.currency}`
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