document.addEventListener('DOMContentLoaded', () => {

    const wordInput = document.getElementById('wordInput')
    const translateInput = document.getElementById('translateInput')
    const wordSaver = document.getElementById('wordSaver')
    const wordCounter = document.querySelector('.words-counter')

    let gameArr = [                                 
        {word: 'merc', translate: 'наемник'},
        {word: 'tamer', translate: 'укротитель'},
        {word: 'pine', translate: 'сосна'},
        {word: 'womit', translate: 'рвота'},
        {word: 'sour', translate: 'кислый'},
        {word: 'persist', translate: 'сопротивляться'},
        {word: 'seasoning', translate: 'приправа'},
        {word: 'convinience', translate: 'удобство'},
        {word: 'flacid', translate: 'вялый'},
        {word: 'overwhelming', translate: 'подавляющий'},
        {word: 'curious', translate: 'любопытный'},
        {word: 'morgage', translate: 'ипотека'},
        {word: 'binge', translate: 'выпивка'},
        {word: 'interrogation', translate: 'допрос'},
        {word: 'virgule', translate: 'косая черта'},
        {word: 'collapse', translate: 'крах'},
        {word: 'unstage something', translate: 'отключить что-то'},
        {word: 'branch', translate: 'ветка'},
        {word: 'attitude', translate: 'отношение'},
        {word: 'share', translate: 'поделиться'},
        {word: 'ancient', translate: 'древний'},
        {word: 'anthem', translate: 'гимн'},
        {word: 'wank', translate: 'дрочить'},
        {word: 'attach 2 meanings', translate: 'прикреплять, придавать'},
        {word: 'string 2 meanings', translate: 'строка, струна'},
        {word: 'distract', translate: 'отвлекать'},
        {word: 'mellow', translate: 'мягкий'},
        {word: 'severe', translate: 'серьезный'},
        {word: 'slaughter', translate: 'резня'},
        {word: 'cliff', translate: 'утес'},
        {word: 'avenge', translate: 'отомстить'},
        {word: 'revenge', translate: 'месть'},
        {word: 'puppet', translate: 'марионетка'},
        {word: 'ponder', translate: 'обдумать'},
        {word: 'sanity', translate: 'здравомыслие'},
        {word: 'lure', translate: 'приманка'},
        {word: 'fuzzy', translate: 'нечеткий'},
        {word: 'mess', translate: 'беспорядок'},
        {word: 'temper', translate: 'нрав'},
        {word: 'justification', translate: 'оправдание'},
        {word: 'linger', translate: 'задерживается'},
        {word: 'mess up', translate: 'испортить'},
        {word: 'stare', translate: 'глазеть'},
        {word: 'neatly', translate: 'аккуратно'},
        {word: 'ease', translate: 'облегчать'},
        {word: 'provoke', translate: 'провоцировать'},
        {word: 'gaze', translate: 'взгляд'},
        {word: 'tender', translate: 'нежный'},
        {word: 'comprehension', translate: 'понимание'},
        {word: 'brough', translate: 'принести'},
        {word: 'reminisce', translate: 'вспоминать'},
        {word: 'dawn', translate: 'рассвет'},
        {word: 'underneath', translate: 'под'},
        {word: 'convince', translate: 'убеждать'},
        {word: 'heel 2 meanings', translate: 'пятка, каблук'},
        {word: 'vow', translate: 'клятва'},
        {word: 'shed', translate: 'пролить'},
        {word: 'sorrow', translate: 'скорбь'},
        {word: 'dazzle', translate: 'ослеплять'},
        {word: 'glimmer', translate: 'мерцать'},
        {word: 'endure', translate: 'терпеть'},
    ]

    

    const arrayShuffler = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const s = Math.round(Math.random() * (i + 1))
            let arr = [array[i], array[s]] = [array[s], array[i]] 
        } 
    }   

    wordSaver.addEventListener('submit', (e) => {
        e.preventDefault()

        gameArr.push({word: wordInput.value, translate: translateInput.value})

        wordSaver.reset()
        wordCounter.textContent = `Words in storage: ${gameArr.length}`
    })    


    const preGame = document.getElementById('preGame')
    const game = document.getElementById('game')
    const gameWord = document.querySelector('.game__word')
    const difficultySelect = document.getElementById('select__form')
    const selectors = document.querySelectorAll('.selector')
    const timeLine = document.querySelector('.timer')
    
    
    const hide = (element) => element.classList.add('hidden')
    const show = (element) => element.classList.remove('hidden')
    
    let timer 

    difficultySelect.addEventListener('submit', (e) => {
        e.preventDefault()
        
        if (gameArr.length > 0) {
            hide(preGame)
            show(game)
            arrayShuffler(gameArr)
            gameWord.innerHTML = gameArr[0].word

            if (selectors[0].checked === true) {
                timeLine.style.animation = `timer ${gameArr.length * 9}s linear forwards`
    
                timer = setTimeout(() => {
                    hide(game)
                    show(postGame)
                    alert('GAME OVER')
                }, (gameArr.length * 9000))
    
            } else if (selectors[1].checked === true) {
                timeLine.style.animation = `timer ${gameArr.length * 6}s linear forwards`
    
                timer = setTimeout(() => {
                    hide(game)
                    show(postGame)
                    alert('GAME OVER')
                }, (gameArr.length * 6000))
    
            } else if (selectors[2].checked === true) {
                timeLine.style.animation = `timer ${gameArr.length * 3}s linear forwards`
    
                timer = setTimeout(() => {
                    hide(game)
                    show(postGame)
                    alert('GAME OVER')
                }, (gameArr.length * 3000))
            } 
        }
    })


    const check = document.getElementById('game__field')
    const playersTranslate = document.querySelector('.game__translate')

    const postGame = document.getElementById('postGame')
    const results = document.querySelector('.results')

    let addOne = () => {
        let counter = 0

        return {
            increment() {
                return counter+=1
            },

            reset() {
                return counter = 0
            },

            getCounter() {
                return counter
            }
        }
    }

    const nextPair = addOne()
    const rightCounter = addOne()

    const value = document.querySelector('.results__number')
    
    check.addEventListener('submit', (e) => {
        e.preventDefault()

        const nextWord = gameArr[(nextPair.increment() - 1)].word
        const nextTranslate = gameArr[(nextPair.getCounter() - 1)].translate
        
        const paragraph = document.createElement('p')
        const spanLeft = document.createElement('span')
        spanLeft.textContent = `${nextWord} / ${nextTranslate} `
        const spanRight = document.createElement('span')
        spanRight.textContent = `${playersTranslate.value}`
        const versus = document.createElement('span')
        versus.textContent = 'VS'

        paragraph.insertAdjacentElement('afterbegin', spanLeft)
        paragraph.insertAdjacentElement('beforeend', spanRight)
        spanRight.insertAdjacentElement('beforebegin', versus)
        results.insertAdjacentElement('beforeend', paragraph)
        
        if (gameArr.length === nextPair.getCounter()) {
            clearTimeout(timer)
            hide(game)
            show(postGame)
            alert('GAME OVER')
        } else {
            gameWord.innerHTML = gameArr[nextPair.getCounter()].word 
        }

        if (nextTranslate.trim().toLowerCase() === playersTranslate.value.trim().toLowerCase()) {
            value.textContent = `You have ${rightCounter.increment()} right answers`
        } 

        check.reset()
    })
    
    
    const reset = document.querySelector('.game__reset')

    reset.addEventListener('click', () => {
        gameArr.length = 0

        alert('the storage has been reseted')
    })

    const backToMain = document.querySelector('.game__backToMain')

    backToMain.addEventListener('click', () => {
        show(preGame)
        hide(postGame)
        nextPair.reset()
        rightCounter.reset()
        check.reset()
        arrayShuffler(gameArr)
        
        results.innerHTML = ''
        wordCounter.textContent = `Words in storage: ${gameArr.length}`
        gameWord.innerHTML = gameArr[0].word 
    })

})