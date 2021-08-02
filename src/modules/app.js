import DonateList from '../modules/donate-list'
export default class App {
    run(){
        const mockDonates = [
            { amount: 4, date: new Date() },
            { amount: 20, date: new Date() },
            { amount: 3, date: new Date() },
            { amount: 1, date: new Date() },
         ];
        const donateList = new DonateList(mockDonates)
        donateList.render()
    }
}
