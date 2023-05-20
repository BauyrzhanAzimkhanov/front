import React from 'react'
import StudentMainDetailHeader from './StudentMainDetailHeader'
import { css, StyleSheet } from 'aphrodite'
import { COLORS } from '../utils/colors'
import classNames from 'classnames'
import GroupsListDetail from './GroupsListDetail'

const MyGroups = (): JSX.Element => {
  return (
    <div className={classNames(css(styles.container), 'px-4 py-4')}>
      <StudentMainDetailHeader />

      <div
        className={classNames(css(styles.dashboardHeader),
          'p-3 mt-4 d-flex flex-row justify-content-between align-items-center')}>
        <div className={'d-flex flex-row'}>
          <div className={classNames(css(styles.numberCategory), 'roboto-regular')}>
            #
          </div>

          <div className={classNames(css(styles.numberCategory), 'roboto-regular ms-5')}>
            Группы
          </div>
        </div>

        <div className={classNames(css(styles.numberCategory), 'roboto-regular')}>
          Коли-во учеников
        </div>

        <div className={classNames(css(styles.numberCategory), 'roboto-regular pe-5')}>
          Задания
        </div>
      </div>

      <div>
        <GroupsListDetail number={1} subject={'Сетевая безопасность'} name={'Ismoilov Bekzod'} />
        <GroupsListDetail number={1} subject={'Сетевая безопасность'} name={'Ismoilov Bekzod'} />
        <GroupsListDetail number={1} subject={'Сетевая безопасность'} name={'Ismoilov Bekzod'} />
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

export default MyGroups
