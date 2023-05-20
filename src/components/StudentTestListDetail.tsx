import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import classNames from 'classnames'
import { COLORS } from '../utils/colors'
import Button from './Button'
import ChoseIcon from '../assets/play-icon.png'
import { useAppDispatch } from './store/store'
import { changeTestState } from './store/features/setTestSlice'

interface SubjectListDetailProps {
  number: string | number
  subject: string
  name: string
}
const StudentTestListDetail = ({ number, subject, name }: SubjectListDetailProps): JSX.Element => {
  const dispatch = useAppDispatch()
  return (
    <div className={classNames(css(styles.container),
      'd-flex flex-row justify-content-between align-items-center px-3 py-4')}>
      <div className={'d-flex flex-row'}>
        <div className={classNames(css(styles.name), 'roboto-regular')}>
          { number }
        </div>

        <div className={classNames(css(styles.name), 'roboto-regular ms-3')}>
          { subject }
        </div>
      </div>

      <div className={classNames(css(styles.name), 'roboto-regular')}>
        { name }
      </div>

      <div className={classNames(css(styles.name), 'roboto-regular')}>
        01-04-2023
      </div>

      <div className={classNames(css(styles.name), 'roboto-regular')}>
        09:00
      </div>

      <div className={classNames('d-flex flex-row align-items-center')}>
        <Button
          title={'7.5'}
          fontSize={14}
          titleColor={COLORS.blue}
          background={COLORS.white}
          roboto={true}
          borderWidth={1}
          borderStyle={'solid'}
          borderColor={COLORS.blue}
          onClick={() => {}}
          borderBottomRightRadius={0}
          borderTopRightRadius={0}
          paddingX={3}
        />

        <Button
          title={'10'}
          fontSize={14}
          titleColor={COLORS.white}
          background={COLORS.blue}
          roboto={true}
          borderWidth={1}
          borderStyle={'solid'}
          borderColor={COLORS.blue}
          onClick={() => {}}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          paddingX={3}
        />
      </div>

      <div>
        <Button
          title={'Начать'}
          fontSize={14}
          titleColor={COLORS.white}
          background={COLORS.choseButton}
          iconLeft={ChoseIcon}
          iconHeight={20}
          iconWidth={20}
          iconWrapper={'me-2'}
          roboto={true}
          borderWidth={1}
          borderStyle={'solid'}
          borderColor={COLORS.choseButton}
          onClick={ () => { dispatch(changeTestState('test-started')) } }
        />
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomStyle: 'solid',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.welcomeCardBorderColor
  },
  name: {
    fontSize: 14,
    fontWeight: 400,
    color: COLORS.black
  }
})

export default StudentTestListDetail
