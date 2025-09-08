import './RockPaperScissors.scss'
import clsx from "clsx"
import PlayerRPS from "@/components/PlayerRPS";
import ResultRPS from "@/components/ResultRPS";
import RunRPS from "@/components/RunRPS";
import BotRPS from "@/components/BotRPS";
import SvgRPS from "@/components/SvgRPS";

export default (props) => {
  const {className} = props

  return (
    <div
      className={clsx('RPS', className)}
    >

      <SvgRPS />
      <div className="RPS__body">
        <PlayerRPS />
        <div className="RPS__res-run">
          <ResultRPS />
          <RunRPS />
        </div>
        <BotRPS />
      </div>
    </div>
  )
}
