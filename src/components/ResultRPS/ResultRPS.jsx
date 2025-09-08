import './ResultRPS.scss'
import clsx from "clsx"

export default (props) => {
  const {className} = props

  return (
    <span
      className={clsx('result-rps', className)}
      data-js-rps-result=''
    >
      ?
    </span>
  )
}
