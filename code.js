valores = []
enviar = () => {
    let nome = document.querySelector('.texto').value
    let dia = document.querySelector('.dia').value
    let valor = document.querySelector('.valorr').value
    let local_nota = document.querySelector('.local_nota')

    user = {
        nome: nome,
        dia: dia,
        valor: valor
    }
    valores.push(user)

    let bloco = document.createElement('div')
    let nome_user = document.createElement('p')
    let dia_user = document.createElement('p')
    let valor_user = document.createElement('p')
    let x = document.createElement("div")


    nome_user.innerHTML = user.nome
    dia_user.innerHTML = user.dia
    valor_user.innerHTML = `RS${valor}`



    x.innerHTML = 'X'
    x.classList.add('x')
    bloco.classList.add('notas')
    bloco.append(nome_user)
    bloco.append(dia_user)
    bloco.append(valor_user)
    bloco.append(x)

    x.addEventListener('click', fechar = () => {
        bloco.remove()

    })
    local_nota.insertAdjacentElement("afterend", bloco)

}