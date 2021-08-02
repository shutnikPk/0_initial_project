import './index.css'
import App from './src/modules/app'

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
 ];

const app = new App()
app.run()
setTimeout(app.createNewDonate({ amount: 1, date: new Date() }),10)
