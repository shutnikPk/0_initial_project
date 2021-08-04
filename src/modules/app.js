import DonateList from '../modules/donate-list'
import DonateForm from '../modules/donate-form'
import*  as Utils from '../core/util/index'

const     mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
  ];

export default class App {
    constructor() {
        this.state = {
        donates: mockDonates,
        totalAmount: 0,
        }
        this.state.totalAmount = Utils.calculateSumOfNumbers(this.state.donates.map((donate) => donate.amount));
        this.donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
        this.donateList = new DonateList(this.state.donates);
        }

    createNewDonate(newDonate){
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
            donate.date=Utils.getFormattedTime(new Date())
            this.donateForm.callback(donate)
        })
    }
}


