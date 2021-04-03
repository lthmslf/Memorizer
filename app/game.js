document.addEventListener('DOMContentLoaded', () => {

    const wordInput = document.getElementById('wordInput')
    const translateInput = document.getElementById('translateInput')
    const wordSaver = document.getElementById('wordSaver')
    const saver = document.getElementById('saver')
    const wordCounter = document.querySelector('.words-counter')

    let gameArr = [                                 // test array, need to be empty 
        {word: 'word a', translate: 'translate a'},
        {word: 'word b', translate: 'translate b'},
        {word: 'word c', translate: 'translate c'},
        {word: 'word d', translate: 'translate d'},
        {word: 'word e', translate: 'translate e'},
        {word: 'word f', translate: 'translate f'}
    ]

    

    wordSaver.addEventListener('submit', (e) => {
        e.preventDefault()

        gameArr.push({word: wordInput.value, translate: translateInput.value})
        console.log(gameArr)


        wordSaver.reset()
        wordCounter.textContent = `Words in storage: ${gameArr.length}`
    })    

    const arrayShuffler = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const s = Math.round(Math.random() * (i + 1))
            let arr = [array[i], array[s]] = [array[s], array[i]] 
        } 
    }   

    arrayShuffler(gameArr)

    const gameStart = document.getElementById('gameStart')
    const preGame = document.getElementById('preGame')
    const game = document.getElementById('game')

    const hide = (element) => element.classList.add('hidden')
    const show = (element) => element.classList.remove('hidden')

    const gameWord = document.querySelector('.game__word')

    gameStart.addEventListener('click', () => {
        hide(preGame)
        show(game)
        gameWord.innerHTML = gameArr[0].word
    })


    const check = document.getElementById('game__field')
    const playersTranslate = document.querySelector('.game__translate')

    const addOne = () => {
        let counter = 0

        return () => {
            return counter += 1 
        }
    }
    const nextItem = addOne()
    
    const postGame = document.getElementById('postGame')
    const results = document.querySelector('.results')
    const checkoutArr = [] //array for inputed words

    const span = document.createElement('span')

    check.addEventListener('submit', (e) => {
        e.preventDefault()

        const span = document.createElement('span')
        span.textContent = playersTranslate.value
        results.insertAdjacentElement('afterbegin', span)
        
        gameWord.innerHTML = gameArr[nextItem()].word
        console.log(gameArr)
        check.reset()


        setTimeout(() => {
            hide(game)
            show(postGame)
            window.alert('GAME OVER')
        }, 3000)
    })
     
    


})