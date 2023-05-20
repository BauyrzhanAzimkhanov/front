import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { COLORS } from '../utils/colors'
import classNames from 'classnames'
import StudentMainDetailHeader from './StudentMainDetailHeader'
import StudentTestListDetail from './StudentTestListDetail'
import { useAppSelector } from './store/store'
import TestStarted from './TestStarted'
import TestCompleted from './TestCompleted'

const StudentTest = (): JSX.Element => {
  const testState = useAppSelector(state => state.setTest)
  return (
    <>
      { testState === 'test-inactive'
        ? (
          <div className={classNames(css(styles.container), 'px-4 py-4')}>
            <StudentMainDetailHeader />

            <div
              className={classNames(css(styles.dashboardHeader),
                'p-3 mt-4 d-flex flex-row justify-content-between align-items-center')}>
              <div className={'d-flex flex-row'}>
                <div className={classNames(css(styles.numberCategory), 'roboto-regular')}>
                  #
                </div>

                <div className={classNames(css(styles.numberCategory), 'roboto-regular ms-5 ps-3')}>
                  Предметы
                </div>
              </div>

              <div className={classNames(css(styles.numberCategory), 'roboto-regular ms-5')}>
                Поток
              </div>

              <div className={classNames(css(styles.numberCategory), 'roboto-regular ps-5')}>
                Дата
              </div>

              <div className={classNames(css(styles.numberCategory), 'roboto-regular')}>
                Время начало
              </div>

              <div className={classNames(css(styles.numberCategory), 'roboto-regular pe-5')}>
                Балл
              </div>

              <div className={classNames(css(styles.numberCategory), 'roboto-regular pe-5')}>
                Тест
              </div>
            </div>

            <div>
              <StudentTestListDetail number={1} subject={'Сетевая безопасность'} name={'Ismoilov Bekzod'} />
              <StudentTestListDetail number={1} subject={'Сетевая безопасность'} name={'Ismoilov Bekzod'} />
              <StudentTestListDetail number={1} subject={'Сетевая безопасность'} name={'Ismoilov Bekzod'} />
              <StudentTestListDetail number={1} subject={'Сетевая безопасность'} name={'Ismoilov Bekzod'} />
              <StudentTestListDetail number={1} subject={'Сетевая безопасность'} name={'Ismoilov Bekzod'} />
              <StudentTestListDetail number={1} subject={'Сетевая безопасность'} name={'Ismoilov Bekzod'} />
            </div>
          </div>)
        : testState === 'test-started'
          ? <TestStarted />
          : testState === 'test-completed'
            ? <TestCompleted />
            : ''
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.subjectTitleContainerBorder
  },
  dashboardHeader: {
    backgroundColor: COLORS.subjectBackground,
    width: '100%'
  },
  numberCategory: {
    color: COLORS.numberCategory,
    fontWeight: 600,
    fontSize: 14
  }
})

export default StudentTest
