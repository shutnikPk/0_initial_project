import './index.css'
import DonateForm from './src/modules/donate-form'
import App from './src/modules/app'

const donateForm = new DonateForm()
donateForm.render()

const app = new App()
app.run()
