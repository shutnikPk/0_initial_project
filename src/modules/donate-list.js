import $ from '../core/util/createElem'
import {
    body
} from '../core/constants/globalVars'
import {
    Settings
} from '../core/constants/settings'
export default class DonateList {
    #donates = []
    constructor(donates) {
        this.#donates = donates
        this.donatesContainer = $('div', 'donates-container__donates')
    }
  
    updateDonates(updateDonates) {
        if (updateDonates.length === 0) return
        while (this.donatesContainer.firstChild) {

            this.donatesContainer.firstChild.remove()
        }
        updateDonates.map(e => {
            const item = this.#createDonteItem(e.date, e.amount)
            this.donatesContainer.append(item)
        })
    }

    #createDonteItem(when, amount) {
        const donateItem = $('div', 'donate-item')
        donateItem.textContent = `${when}`
        const money = $('b')
        money.textContent = `${amount}$`
        donateItem.append(money)
        return donateItem
    }

    getTotalAmount() {
        const tmpArr = this.#donates.map(e => e.amount)
        return tmpArr.reduce((summ, current) => summ + current, 0)

    }

    render() {
        const mainContainer = $('div', 'donates-container')
        body.append(mainContainer)

        const donateTitle = $('h2', 'donates-container__title')
        donateTitle.textContent = 'Список донатов'
        mainContainer.append(donateTitle)
        mainContainer.append(this.donatesContainer)

        this.updateDonates(this.#donates)
    }

}