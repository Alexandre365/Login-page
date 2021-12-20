import {borderBottom,CardCss,Login} from './css.js'

export function LoginInp() {
    let Email = document.getElementById('EmailLogin').value
    let Senha = document.getElementById('SenhaLogin').value
    if (Email != '' && Senha != '') {
        LoadingLogin(Email,Senha)
    }else{
        if (Email == '' && Senha == '') {
            borderBottom('red','EmailLogin')
            borderBottom('red','SenhaLogin')
        } else if(Email == ''){
            borderBottom('red','EmailLogin')
        }else{
            borderBottom('red','SenhaLogin')
        }
    }
}

function LoadingLogin(Email,Senha) {
    let Dados = JSON.parse(localStorage.getItem('Dados'))

    let newDados = Dados.filter((user) => user.Email == `${Email}`)
    let NewDados = newDados.some((user) => user.Senha == `${Senha}`)
    let txt = newDados.filter((user) => user.Senha == `${Senha}`)
    
    if (NewDados == true) {
        Card(`
        <h2> Olá, seja bem-vindo ${txt[0].Nome}</h2>
        <p>
            Email: ${txt[0].Email} <br>
            Senha: ${txt[0].Senha}
        </p>
        `)
        clearInput()
    }else{
        Card(`
        <h2>Notificação</h2>
        <p>
            Erro
        </p>
        `)
    }

}



function clearInput() {
    document.getElementById('EmailLogin').value      = ''
    document.getElementById('SenhaLogin').value     = ''
    borderBottom('var(--Cinza)','EmailLogin')
    borderBottom('var(--Cinza)','SenhaLogin')
}

function Card(txt) {
    document.getElementById('txt').innerHTML = `
    ${txt}
    ` 
    CardCss()
    Login()
}