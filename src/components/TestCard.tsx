import React, { type SetStateAction } from 'react'
import classNames from 'classnames'
import Button from './Button'
import { COLORS } from '../utils/colors'
import { changeTestState } from './store/features/setTestSlice'
import { useAppDispatch } from './store/store'

interface TestCardProps {
  number: number | string
  question: string
  answers: Array<{ a?: string }>
  testNumber: number
  setTestNumber: React.Dispatch<SetStateAction<number>>
  testLength: number
}

const TestCard = ({ number, question, answers, testNumber, setTestNumber, testLength }: TestCardProps): JSX.Element => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className={classNames('mt-3 roboto-regular')}>{ number }. { question }</div>

      <div className={'d-flex flex-row'}>
        <input type={'radio'} name={testNumber.toString()}/>
        <div className={'ms-2 roboto-regular'}>{ answers[0].a }</div>
      </div>

      <div className={'d-flex flex-row'}>
        <input type={'radio'} name={testNumber.toString()}/>
        <div className={'ms-2 roboto-regular'}>{ answers[1].a }</div>
      </div>

      <div className={'d-flex flex-row'}>
        <input type={'radio'} name={testNumber.toString()}/>
        <div className={'ms-2 roboto-regular'}>{ answers[2].a }</div>
      </div>

      <div className={'d-flex flex-row'}>
        <input type={'radio'} name={testNumber.toString()}/>
        <div className={'ms-2 roboto-regular'}>{ answers[3].a }</div>
      </div>

      <div className={classNames('d-flex flex-row justify-content-end')}>
        {testNumber + 2 < testLength
          ? (
            <Button
              title={'Далее'}
              background={COLORS.choseButton}
              width={'10%'}
              wrapper={'me-2'}
              titleColor={COLORS.white}
              onClick={() => { setTestNumber(testNumber + 1) }}
            />)
          : ''}

        <Button
          title={'Завершить'}
          background={COLORS.welcomeCardButton}
          width={'10%'}
          titleColor={COLORS.white}
          onClick={() => { dispatch(changeTestState('test-completed')) }}
        />
      </div>
    </div>
  )
}

export default TestCard
