import React, { useState } from 'react'
import { css, StyleSheet } from 'aphrodite'
import ProgressBar from '@ramonak/react-progress-bar'
import { COLORS } from '../utils/colors'
import classNames from 'classnames'
import { test } from '../utils/testExample'
import TestCard from './TestCard'

const TestStarted = (): JSX.Element => {
  const [testNumber, setTestNumber] = useState<number>(0)
  return (
    <div className={classNames(css(styles.container), 'px-4 py-4')}>
      <div className={'d-flex flex-row justify-content-center align-items-center pt-2'}>
        <div className={classNames(css(styles.headerDescription), 'pe-1')}>Предмет:</div>
        <div className={classNames(css(styles.headerTitle), 'ps-1')}>Сетевая безопасность</div>
      </div>

      <div className={classNames('mt-4')}>
        <ProgressBar
          completed={60}
          isLabelVisible={false}
          bgColor={COLORS.welcomeCardButton}
          baseBgColor={COLORS.nonCompletedBar}
          height={'10px'}
        />
      </div>

      <div>
        { ((test?.length) !== 0)
          ? test
            .filter((item, index) => index === testNumber)
            .map((testItem, testIndex) => (
              <TestCard
                key={testIndex}
                number={testNumber + 1}
                question={testItem.question}
                answers={testItem.answers}
                testNumber={testNumber}
                setTestNumber={setTestNumber}
                testLength={test?.length}
              />
            ))
          : ''
        }
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
    fontSize: 14
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
  }
})

export default TestStarted
