document.addEventListener('DOMContentLoaded', () => {

    const wordInput = document.getElementById('wordInput')
    const translateInput = document.getElementById('translateInput')
    const wordSaver = document.getElementById('wordSaver')
    const wordCounter = document.querySelector('.words-counter')

    let gameArr = [                                 // test array, need to be empty 
        // {word: 'merc', translate: 'наемник'},
        // {word: 'tamer', translate: 'укротитель'},
        // {word: 'pine', translate: 'сосна'},
        // {word: 'womit', translate: 'рвота'},
        // {word: 'sour', translate: 'кислый'},
        // {word: 'persist', translate: 'сопротивляться'},
        // {word: 'seasoning', translate: 'приправа'},
        // {word: 'convinience', translate: 'удобство'},
        // {word: 'flacid', translate: 'вялый'},
        // {word: 'overwhelming', translate: 'подавляющий'},
        // {word: 'curious', translate: 'любопытный'},
        // {word: 'morgage', translate: 'ипотека'},
        // {word: 'binge', translate: 'выпивка'},
        {word: 'interrogation', translate: 'допрос'},
        {word: 'virgule', translate: 'косая черта'},
    ]

    const arrayShuffler = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const s = Math.round(Math.random() * (i + 1))
            let arr = [array[i], array[s]] = [array[s], array[i]] 
        } 
    }   
    arrayShuffler(gameArr)

    wordSaver.addEventListener('submit', (e) => {
        e.preventDefault()


        gameArr.push({word: wordInput.value, translate: translateInput.value})

        wordSaver.reset()
        wordCounter.textContent = `Words in storage: ${gameArr.length}`
    })    
    

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

        setTimeout(() => {
            hide(game)
            show(postGame)
            alert('GAME OVER')
        }, 50000)
    })


    const check = document.getElementById('game__field')
    const playersTranslate = document.querySelector('.game__translate')

    const postGame = document.getElementById('postGame')
    const results = document.querySelector('.results')

    let addOne = () => {
        let counter = 0

        return () => {
            return counter+=1
        }
    }

    const incrementWord = addOne()
    const incrementTranslate = addOne()
    const yourTranslate = addOne()
    const valueCounter = addOne()
    const hiddenCounter = addOne()

    const value = document.querySelector('.results__number')
    
    check.addEventListener('submit', (e) => {
        e.preventDefault()

        const nextWord = gameArr[(incrementWord() - 1)].word
        const nextTranslate = gameArr[(incrementTranslate() - 1)].translate
        
        const span = document.createElement('span')
        span.textContent = `${nextWord} / ${nextTranslate} VS ${playersTranslate.value}`
        results.insertAdjacentElement('beforeend', span)
        
        if (gameArr.length === hiddenCounter()) {
            hide(game)
            show(postGame)
            alert('GAME OVER')
        } else {
            gameWord.innerHTML = gameArr[yourTranslate()].word 
        }

        if (nextTranslate.trim().toLowerCase() === playersTranslate.value.trim().toLowerCase()) {
            value.textContent = `You have ${valueCounter()} right answers`
        } 

        check.reset()
    })
     
    


})