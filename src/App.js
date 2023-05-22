import {useState} from 'react';
import './styles.css'

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [nome, setNome] = useState("")
  return (
    <div className='container'>
      <div className='container-cadastro'>
        <div className='bloco-cadastro'>
          <div className='avatar-usuario'></div>

          <div className='texto'>

            <div className='texto-esc1'>
            <input className= { (email.length > 0 ? 'has-val ' : '') + 'input'} 
              type='nome'
              value={nome}
              onChange={e=>setNome(e.target.value)}/>
              <span className='focus-input' data-placeholder='Nome'></span>
            </div>

            <div className='texto-esc1'>
            <input className= { (email.length > 0 ? 'has-val ' : '') + 'input'} 
              type='email'
              value={email}
              onChange={e=>setEmail(e.target.value)}/>
              <span className='focus-input' data-placeholder='Email'></span>
            </div>

            <div className='texto-esc1'>
              <input className= { (senha.length > 0 ? 'has-val ' : '') + 'input'} 
              type='password'
              value={senha}
              onChange={e=>setSenha(e.target.value)}/>
              <span className='focus-input' data-placeholder='Senha'></span>
            </div>

            <div className='btn-entar'>
              <button className='botao-entrar'>Finalizar</button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
