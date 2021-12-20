import {Cadastro,Login, CardNone} from './css.js'
import {LoginInp} from './Login.js'
import {CadastraSe} from './Cadastro.js'

document.getElementById('ConectaSe').onclick = () => LoginInp()

document.getElementById('seCadastra').onclick = () => Cadastro()

document.getElementById('CadastraSe').onclick = () => CadastraSe()

document.getElementById('JaSouCadas').onclick = () => Login()

document.getElementById('ok').onclick = () => CardNone()