export function Cadastro(){
    document.getElementById('Componet').style.height = '460px'
    document.getElementById('Login').style.display = 'none'
    document.getElementById('Login').style.opacity = '0'
    setTimeout(() => {
        document.getElementById('Cadastro').style.display = 'inline'
        setTimeout(() => {
            document.getElementById('Cadastro').style.opacity = '1'
        }, 100);
    }, 1200);
    
} 
export function Login(){
    document.getElementById('Cadastro').style.display = 'none'
    document.getElementById('Componet').style.height = '330px'
    setTimeout(() => {
        document.getElementById('Login').style.display = 'inline'
        document.getElementById('Cadastro').style.opacity = '0'
        setTimeout(() => {
            document.getElementById('Login').style.opacity = '1'
        }, 100);
    }, 1000);
} 

export function CardCss() {
    document.getElementById('Card').style.display = 'inline'
    setTimeout(() => {
        document.getElementById('Card').style.opacity = 1
    }, 100);
}

export function CardNone() {
    document.getElementById('Card').style.opacity = 0
    setTimeout(() => {
        document.getElementById('Card').style.display = 'none'
    }, 500);
}

export let borderBottom = (cor,id) => document.getElementById(`${id}`).style.borderBottom = `3px solid ${cor}`


