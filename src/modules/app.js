import DonateList from '../modules/donate-list'
import DonateForm from '../modules/donate-form'
export default class App {
        state={
        donates:[],
        totalAmount:0
    }

    donateForm = new DonateForm(this.state.totalAmount)        
    donateList = new DonateList(this.state.donates)

    createNewDonate (newDonate){
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
            const input=document.querySelector('input')
            const donate={}
            donate.amount=Number(input.value)
            input.value=''
            donate.date=new Date()
            this.createNewDonate(donate)
        })   
    }


}


