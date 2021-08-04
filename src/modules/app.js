import DonateList from '../modules/donate-list'
import DonateForm from '../modules/donate-form'
import {getFormattedTime} from '../core/util/index'
export default class App {
        state={
        donates:[],
        totalAmount:0
    }

    myNewDonate(){
        const input=document.querySelector('input')
        const donate={}
        donate.amount=Number(input.value)        
        donate.date=getFormattedTime(new Date())
        return donate
    }
            
    donateList = new DonateList(this.state.donates)
    donateForm = new DonateForm(this.state.totalAmount,this.createNewDonate(this.myNewDonate()))

    createNewDonate (newDonate){
        if(newDonate)return
        this.state.donates.push(newDonate)
        this.state.totalAmount=this.donateList.getTotalAmount()
        console.log(this.donateList.getTotalAmount())
        this.donateList.updateDonates(this.state.donates)
        this.donateForm.updateTotalAmount(this.state.totalAmount)
    }
    
    

    run(){
        this.donateForm.render()
        this.donateList.render()
        const donateForm = document.querySelector('.donate-form')
        donateForm.addEventListener('submit',event=>{
            event.preventDefault();
            input.value=''
            this.donateForm.newDonate.bind(this,donate)
        })   
    }


}


