import React from 'react'
import classNames from 'classnames'
import { css, StyleSheet } from 'aphrodite'
import { COLORS } from '../utils/colors'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import TestCompletedList from './TestCompletedList'

ChartJS.register(ArcElement, Tooltip, Legend)
export const data = {
  labels: ['Правильные', 'Неправильные'],
  datasets: [
    {
      label: '# баллы',
      data: [40, 60],
      backgroundColor: [
        COLORS.blue,
        COLORS.welcomeCardButton
      ],
      borderColor: [
        COLORS.blue,
        COLORS.welcomeCardButton
      ],
      borderWidth: 1
    }
  ]
}

const TestCompleted = (): JSX.Element => {
  return (
    <div className={classNames(css(styles.container), 'px-4 py-4')}>
      <div className={'d-flex flex-row justify-content-center align-items-center pt-2'}>
        <div className={classNames(css(styles.headerDescription), 'pe-1')}>Предмет:</div>
        <div className={classNames(css(styles.headerTitle), 'ps-1')}>Сетевая безопасность</div>
      </div>

      <div className={'d-flex flex-row justify-content-between align-items-start'}>
        <div>
          <Doughnut data={data} />
        </div>

        <div style={ { width: '100%' } }>
          <div className={classNames(css(styles.dashboardHeader), 'p-3 mt-4 d-flex flex-row justify-content-between align-items-center')}>

            <div className={classNames(css(styles.numberCategory), 'roboto-regular')}>
              Показатель
            </div>

            <div className={classNames(css(styles.numberCategory), 'roboto-regular')}>
              Значение
            </div>
          </div>

          <div>
            <TestCompletedList category={'Количество баллов (правильных ответов)'} description={'8'} />
            <TestCompletedList category={'Максимально возможное количество баллов'} description={'20'} />
            <TestCompletedList category={'Процент'} description={'40%'} />
          </div>
        </div>
      </div>
    </div>
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
  numberCategory: {
    color: COLORS.numberCategory,
    fontWeight: 600,
    fontSize: 14,
    width: '100%'
  },
  headerDescription: {
    color: COLORS.numberCategory,
    fontWeight: 600,
    fontSize: 14
  },
  headerTitle: {
    color: COLORS.black,
    fontWeight: 600,
    fontSize: 14
  },
  dashboardHeader: {
    backgroundColor: COLORS.subjectBackground,
    width: '100%'
  }
})
export default TestCompleted
