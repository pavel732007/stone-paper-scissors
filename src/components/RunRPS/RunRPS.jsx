import './RunRPS.scss'
import clsx from "clsx"
import Button from "@/components/Button";

export default (props) => {
  const {className} = props

  return (
    <Button
      className={clsx('run-rps', className)}
      data-js-rps-runing-game=''
    >
      Играть
    </Button>
  )
}
