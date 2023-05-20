import React, { useState } from 'react'
import { css, StyleSheet } from 'aphrodite'
import { COLORS } from '../utils/colors'
import classNames from 'classnames'
import MySubjectTableListDetail from './MySubjectTableListDetail'
const MySubjectTable = (): JSX.Element => {
  const [lecture, setLecture] = useState<boolean>(true)

  return (
    <div className={classNames(css(styles.container), 'px-4 py-4')}>
      <div className={classNames(css(styles.header), 'd-flex row align-items-center')}>
        <div className={classNames(css(styles.headerPart), 'd-flex justify-content-between align-items-center')}>
          <div
            onClick={() => { setLecture(true) }}
            className={classNames(lecture ? css(styles.headerTitleActive) : css(styles.headerTitle),
              'py-3 text-center pointer roboto-regular')}>
            Лекция
          </div>

          <div
            onClick={() => { setLecture(false) }}
            className={classNames(!lecture ? css(styles.headerTitleActive) : css(styles.headerTitle),
              'py-3 text-center pointer roboto-regular')}>
            Практика
          </div>
        </div>
      </div>

      <div
        className={classNames(css(styles.dashboardHeader),
          'p-3 mt-4 d-flex flex-row justify-content-between align-items-center')}>

        <div className={'d-flex flex-row'}>
          <div className={classNames(css(styles.numberCategory), 'roboto-regular')}>
            #
          </div>

          <div className={classNames(css(styles.numberCategory), 'roboto-regular ms-5')}>
            Тема занятия
          </div>
        </div>

        <div className={classNames(css(styles.numberCategory), 'roboto-regular')}>
          Дата занятия
        </div>
      </div>

      { lecture
        ? (
          <div>
            <MySubjectTableListDetail
              name={'Содержание и сущность науки об операционных системах. ' +
              'Понятие операционной системы. Классификация компьютерных систем.'}
            />

            <MySubjectTableListDetail
              name={'Содержание и сущность науки об операционных системах. ' +
                'Понятие операционной системы. Классификация компьютерных систем.'} />

            <MySubjectTableListDetail
              name={'Содержание и сущность науки об операционных системах. ' +
                'Понятие операционной системы. Классификация компьютерных систем.'} />

            <MySubjectTableListDetail
              name={'Содержание и сущность науки об операционных системах. ' +
                'Понятие операционной системы. Классификация компьютерных систем.'} />

            <MySubjectTableListDetail
              name={'Содержание и сущность науки об операционных системах. ' +
                'Понятие операционной системы. Классификация компьютерных систем.'} />

            <MySubjectTableListDetail
              name={'Содержание и сущность науки об операционных системах. ' +
                'Понятие операционной системы. Классификация компьютерных систем.'} />
          </div>)
        : (
          <div>
            <MySubjectTableListDetail
              name={'Содержание и сущность науки об операционных системах. ' +
                'Понятие операционной системы. Классификация компьютерных систем.'}
              button={false}
            />

            <MySubjectTableListDetail
              name={'Содержание и сущность науки об операционных системах. ' +
                'Понятие операционной системы. Классификация компьютерных систем.'}
              button={false}
            />

            <MySubjectTableListDetail
              name={'Содержание и сущность науки об операционных системах. ' +
                'Понятие операционной системы. Классификация компьютерных систем.'}
              button={false}
            />

            <MySubjectTableListDetail
              name={'Содержание и сущность науки об операционных системах. ' +
                'Понятие операционной системы. Классификация компьютерных систем.'}
              button={false}
            />

            <MySubjectTableListDetail
              name={'Содержание и сущность науки об операционных системах. ' +
                'Понятие операционной системы. Классификация компьютерных систем.'}
              button={false}
            />

            <MySubjectTableListDetail
              name={'Содержание и сущность науки об операционных системах. ' +
                'Понятие операционной системы. Классификация компьютерных систем.'}
              button={false}
            />
          </div>)
      }

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
  name: {
    fontSize: 14,
    fontWeight: 400,
    color: COLORS.black
  },
  header: {
    width: '30%'
  },
  headerPart: {},
  headerTitle: {
    width: '50%',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: COLORS.subjectTableHeaderBorder
  },
  headerTitleActive: {
    width: '50%',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: COLORS.blue
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
export default MySubjectTable
