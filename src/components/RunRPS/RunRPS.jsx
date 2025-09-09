import './RunRPS.scss'
import clsx from 'clsx'
import Button from '@/components/Button'

export default (props) => {
  const { className } = props

  return (
    <button
      className={clsx('run-rps', 'button', className)}
      data-js-rps-running-game=""
      type="button"
    >
      Играть
    </button>
  )
}
