import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Button from '../../Components/Button'

export default function ForgotPassword() {
  return (
    <div className='ForgotPassword'>
      <Header />

      <h2>Esqueci a Senha</h2>

      <p>Input Senha</p>

      <Button text={'RECUPERAR SENHA'} />

      <Footer />
    </div>
  )
}
