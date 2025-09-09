import './PlayerRPS.scss'
import clsx from 'clsx'

export default (props) => {
  const { className } = props

  return (
    <div className={clsx('player-rps', className)}>
      <div className="player-rps__display">
        <span className="player-rps__result">
          <svg className="player-rps__result-svg">
            <use
              data-js-rps-player-display=""
              href="#rock"
              width="64"
              height="64"
            ></use>
          </svg>
        </span>
      </div>
      <div className="player-rps__radio">
        <label className="player-rps__label">
          <input
            defaultChecked
            type="radio"
            id="rock"
            name="value-radio"
            data-js-rps-radio=""
            value="rock"
          />
          <svg className="player-rps__icon">
            <use href="#rock"></use>
          </svg>
          <span className="visually-hidden">rock</span>
        </label>

        <label className="player-rps__label">
          <input
            type="radio"
            id="paper"
            name="value-radio"
            data-js-rps-radio=""
            value="paper"
          />
          <svg className="player-rps__icon">
            <use href="#paper"></use>
          </svg>
          <span className="visually-hidden">paper</span>
        </label>

        <label className="player-rps__label">
          <input
            type="radio"
            id="scissors"
            name="value-radio"
            data-js-rps-radio=""
            value="scissors"
          />
          <svg className="player-rps__icon">
            <use href="#scissors"></use>
          </svg>
          <span className="visually-hidden">scissors</span>
        </label>
      </div>
    </div>
  )
}
