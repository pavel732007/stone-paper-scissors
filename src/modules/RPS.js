class RPS {
  selectors = {
    root: '[data-js-rps]',
    resultGame: '[data-js-rps-result]',
    botDisplay: '[data-js-rps-bot-display]',
    playerDisplay: '[data-js-rps-player-display]',
    radio: '[data-js-rps-radio]',
    runningGame: '[data-js-rps-running-game]',
  }

  stateRPS = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
  }

  stateClasses = {
    isInaction: 'is-inaction',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.resultGameElement = this.rootElement.querySelector(
      this.selectors.resultGame
    )
    this.botDisplayElement = this.rootElement.querySelector(
      this.selectors.botDisplay
    )
    this.playerDisplayElement = this.rootElement.querySelector(
      this.selectors.playerDisplay
    )
    this.radioElements = this.rootElement.querySelectorAll(this.selectors.radio)
    this.runningGameElement = this.rootElement.querySelector(
      this.selectors.runningGame
    )

    if (!this.rootElement) {
      return
    }

    this.bindEvents()
  }

  onPlayerDisplay = (event) => {
    this.playerDisplayElement.setAttribute('href', `#${event.target.value}`)
  }

  randomPRS(obj) {
    const keys = Object.keys(obj)
    const randomKey = keys[Math.floor(Math.random() * keys.length)]

    if (keys.length === 0) {
      return null
    }

    return obj[randomKey]
  }

  onPlayGame = () => {
    this.resultGameElement.textContent = '?'

    let randomTimer = setInterval(() => {
      this.botDisplayElement.setAttribute(
        'href',
        `#${this.randomPRS(this.stateRPS)}`
      )
    }, 80)

    this.rootElement.classList.add(this.stateClasses.isInaction)
    setTimeout(() => {
      clearInterval(randomTimer)

      const resultPlayer = this.playerDisplayElement.getAttribute('href')
      const resultBot = this.botDisplayElement.getAttribute('href')

      this.rootElement.classList.remove(this.stateClasses.isInaction)

      if (resultPlayer === resultBot) {
        this.resultGameElement.textContent = '='
      } else if (
        (resultPlayer === '#rock' && resultBot === '#scissors') ||
        (resultPlayer === '#scissors' && resultBot === '#paper') ||
        (resultPlayer === '#paper' && resultBot === '#rock')
      ) {
        this.resultGameElement.textContent = '>'
      } else {
        this.resultGameElement.textContent = '<'
      }
    }, 1500)
  }

  bindEvents() {
    this.radioElements.forEach((radio) => {
      radio.addEventListener('change', this.onPlayerDisplay)
    })
    if (this.runningGameElement) {
      this.runningGameElement.addEventListener('click', this.onPlayGame)
    }
  }
}

export default RPS
