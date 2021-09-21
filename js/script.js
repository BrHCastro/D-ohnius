let order = []
let clickedOrder = []
let score = 0;

const green = document.querySelector('.genius-space-green')
const blue = document.querySelector('.genius-space-blue')
const yellow = document.querySelector('.genius-space-yellow')
const red = document.querySelector('.genius-space-red')
const all = document.querySelectorAll('.genius > div')

let shuffleOrder = () => {
    let randomColor = Math.floor(Math.random() * 4)
    order[order.length] = randomColor
    clickedOrder = []

    for(let i in order) {
        let elemnetColor = createElementColor(order[i])
        lightUpTheColor(elemnetColor, Number(i) + 1)
    }
}

let lightUpTheColor = (element, number) => {
    number = number * 500

    setTimeout(() => {
        element.classList.add('selected')
    }, number - 500)
    setTimeout(() => {
        element.classList.remove('selected')
    }, number - 250)
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            createElementColor().forEach(element => {
                element.classList.add('bad-choice')
            })

            setTimeout(() => {
                lose()
            }, 250)
            
            break
        }
    }
    if(clickedOrder.length == order.length && clickedOrder.length != 0) {
        
        createElementColor().forEach(element => {
            element.classList.add('good-choice')
        })
        
        setTimeout(() => { 
            createElementColor().forEach(element => {
                element.classList.remove('good-choice')
            })
            nextLevel()
        }, 1000)
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color

    createElementColor(color).classList.add('selected')

    setTimeout(() => {
        createElementColor(color).classList.remove('selected')
        checkOrder()
    }, 250)
}

let createElementColor = (color) => {
    switch (color) {
        case 0: return green
        case 1: return blue
        case 2: return yellow
        case 3: return red
        default:
            return all
    }
}

let nextLevel = () => {
    score++
    setTimeout(() => {
        shuffleOrder();
    },1000)
}

let lose = () => {
    alert(`Pontuação: ${score} \n Você perdeu! 😢 \n Clique em OK para inciar um novo jogo 🎮`)
    order = []
    clickedOrder = []

    createElementColor().forEach(element => {
        element.classList.remove('bad-choice')
    })

    playGame()
}

let playGame = () => {
    score = 0;
    alert(`Bem-vindo(a) ao Genius!! Iniciando um novo jogo 🔥`)
    setTimeout(() => {
        nextLevel()
    }, 1000)
}

green.addEventListener('click', () => click(0))
blue.addEventListener('click', () => click(1))
yellow.addEventListener('click', () => click(2))
red.addEventListener('click', () => click(3))

playGame()