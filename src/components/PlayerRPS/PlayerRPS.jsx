import './PlayerRPS.scss'
import clsx from "clsx"

export default (props) => {
  const {className} = props

  return (<div
    className={clsx('player-rps', className)}
  >
    <div className="player-rps__display">
      <span className="player-rps__result">
        <svg className="player-rps__result-svg">
          <use href="#rock" width='64' height='64'></use>
        </svg>
      </span>
    </div>
    <div className="player-rps__radio">
      <label className="player-rps__label">
        <input
          defaultChecked type="radio" id="rock" name="value-radio"
        />
        <svg className="player-rps__icon">
          <use href="#rock"></use>
        </svg>
      </label>

      <label className="player-rps__label">
        <input type="radio" id="paper" name="value-radio" />
        <svg className="player-rps__icon">
          <use href="#paper"></use>
        </svg>
      </label>

      <label className="player-rps__label">
        <input type="radio" id="scissors" name="value-radio" />
        <svg className="player-rps__icon">
          <use href="#scissors"></use>
        </svg>
      </label>
    </div>
  </div>)
}
