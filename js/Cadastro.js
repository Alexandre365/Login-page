import {CardCss,Login,borderBottom} from './css.js'

export function CadastraSe(){
    let Nome    = document.getElementById('NomeCadas').value
    let Email   = document.getElementById('EmailCadas').value
    let Senha    = document.getElementById('SenhaCadas').value
    let ConfSenha    = document.getElementById('ConfSenhaCadas').value

    if (Nome != '' && Email != '' && Senha != '' && ConfSenha != '' ) {
        if (Senha == ConfSenha) {
            if (som(Senha) != true) {
                SetDados(Nome,Email,Senha)
            }else{
                Card(`
                    <h2> Err </h2>
                    <p>Já existe Essa Senha.</p>
                `)
                borderBottom('red','SenhaCadas')
                borderBottom('red','ConfSenhaCadas')
            }
        } else {
        
            Card(`
                <h2> Err </h2>
                <p>Confirme sua Senha.</p>
            `)
            borderBottom('red','ConfSenhaCadas')
        }
    } else {
        if (Email != '' && Senha != '' && ConfSenha != '' ) {
            borderBottom('red','NomeCadas')
            borderBottom('var(--Cinza)','EmailCadas')
            borderBottom('var(--Cinza)','SenhaCadas')
            borderBottom('var(--Cinza)','ConfSenhaCadas')
        }else if (Nome != '' && Senha != '' && ConfSenha != '' ) {
            borderBottom('var(--Cinza)','NomeCadas')
            borderBottom('red','EmailCadas')
            borderBottom('var(--Cinza)','SenhaCadas')
            borderBottom('var(--Cinza)','ConfSenhaCadas')
        }else if (Nome != '' && Email != '' && ConfSenha != '' ) {
            borderBottom('var(--Cinza)','NomeCadas')
            borderBottom('var(--Cinza)','EmailCadas')
            borderBottom('red','SenhaCadas')
            borderBottom('var(--Cinza)','ConfSenhaCadas')
        }else if (Nome != '' && Email != '' && Senha != '' ) {
            borderBottom('var(--Cinza)','NomeCadas')
            borderBottom('var(--Cinza)','EmailCadas')
            borderBottom('var(--Cinza)','SenhaCadas')
            borderBottom('red','ConfSenhaCadas')
        }else if (Nome != '' && Email != '' ) {
            borderBottom('var(--Cinza)','NomeCadas')
            borderBottom('var(--Cinza)','EmailCadas')
            borderBottom('red','SenhaCadas')
            borderBottom('red','ConfSenhaCadas')
        }else{
            borderBottom('red','NomeCadas')
            borderBottom('red','EmailCadas')
            borderBottom('red','SenhaCadas')
            borderBottom('red','ConfSenhaCadas')
        }
    }


}

function SetDados(Nome,Email,Senha) {
    let Dados = JSON.parse(localStorage.getItem('Dados')) || []

    let dados = {
        Nome:       Nome,
        Email:      Email,
        Senha:      Senha,
    }

    Dados.push(dados)

    localStorage.setItem('Dados', JSON.stringify(Dados)) 
    clearInput()
    Card(`
        <h2> Notificação</h2>
        <p>Olá, Seja bem vindo, sua conta ja foi criada.</p>
    `)
    Login()
}

function som(id){
    let Dados = JSON.parse(localStorage.getItem('Dados'))

    if (Dados != null) {
        let newDados = Dados.some((user) => user.Senha == `${id}`)

        return newDados
    }else{
        return false
    }
    
}

function clearInput() {
    document.getElementById('NomeCadas').value      = ''
    document.getElementById('EmailCadas').value     = ''
    document.getElementById('SenhaCadas').value     = ''
    document.getElementById('ConfSenhaCadas').value = ''
}

function Card(txt) {
    document.getElementById('txt').innerHTML = `
    ${txt}
    `  
    CardCss()
}