import $ from '../core/util/createElem'
import {body} from '../core/util/globalVars'
export default class DonateList{

    constructor(donates){
        this.donates=donates
    }

    #createDonteItem(when,amount){
        const donateItem = $('div','donate-item')
        donateItem.textContent=`${when}`
        const money = $('b')
        money.textContent=`${amount}$`
        console.log(money)
        donateItem.append(money)
        return donateItem
    }



    render(){
        const mainContainer = $('div','donates-container')
        body.append(mainContainer)

        const donateTitle = $('h2','donates-container__title')
        donateTitle.textContent = 'Список донатов'
        mainContainer.append(donateTitle)

        const donatesContainer = $('div','donates-container__donates')
        mainContainer.append(donatesContainer)

        this.donates.map(e=>{
            const item = this.#createDonteItem(e.date,e.amount)
            donatesContainer.append(item)
        })

    }

}