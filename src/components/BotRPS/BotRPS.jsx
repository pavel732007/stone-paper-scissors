import './BotRPS.scss'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return (
    <div className={clsx('bot-rps', className)}>
      <div className="bot-rps__display">
        <span className="bot-rps__result">
          <svg className="bot-rps__result-svg">
            <use
              data-js-rps-bot-display=""
              href="#rock"
              width="64"
              height="64"
            ></use>
          </svg>
        </span>
      </div>

      <div className="bot-rps__text">
        <p>Random</p>
      </div>
    </div>
  )
}
