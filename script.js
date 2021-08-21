function Data() {

    var time = new Date()
    var hora = time.getHours()
    var minutos = time.getMinutes()
    var segundos = time.getSeconds()

    var relogio = document.querySelector('.relogio')
    relogio.innerText = ` ${hora}h : ${minutos}m : ${segundos}s`
}

setInterval(Data, 1000)

let conteudo = document.querySelector('.conteudo')
var animation = {
    nclasses: ['leftup', 'leftdown', 'rightup', 'rightdown'],
    classes: {

        leftup: 'actlup',
        leftdown: 'actldown',
        rightup: 'actrup',
        rightdown: 'actrdown',
    }
}

setInterval(() => {

    //Sorteia o efeito
    function sortear() {
        var numberClass = Math.floor(Math.random() * (animation.nclasses.length))
        var fClass = animation.nclasses[numberClass]
        var aniClass = animation.classes[fClass]
        return aniClass

    }

    //Aplica o efeito
    function aplEffect(effect) {

        function adiciona() {
            conteudo.classList.add(effect)
            setTimeout(() => {
                conteudo.classList.remove(effect)
            }, 6490)

        }
        adiciona()
    }
    aplEffect(sortear())
}, 6500)