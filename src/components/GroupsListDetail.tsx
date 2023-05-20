import React, { useState } from 'react'
import { css, StyleSheet } from 'aphrodite'
import classNames from 'classnames'
import { COLORS } from '../utils/colors'
import Button from './Button'
import ChoseIcon from '../assets/chose.png'
import DownloadIcon from '../assets/download-blue-icon.png'

interface SubjectListDetailProps {
  number: string | number
  subject: string
  name: string
}
const GroupsListDetail = ({ number, subject, name }: SubjectListDetailProps): JSX.Element => {
  const [chose, setChose] = useState(false)
  return (
    <div className={classNames(css(styles.container),
      'd-flex flex-row justify-content-between align-items-center px-3 py-4')}>
      <div className={'d-flex flex-row'}>
        <div className={classNames(css(styles.name), 'roboto-regular')}>
          { number }
        </div>

        <div className={classNames(css(styles.name), 'roboto-regular ms-5')}>
          { subject }
        </div>
      </div>

      <div className={classNames(css(styles.name), 'roboto-regular pe-5 me-4')}>
        { name }
      </div>

      <div className={classNames('pe-4 me-3')}>
        <div className={'d-flex flex-column justify-content-between'}>
          <div className={classNames('roboto-regular', css(styles.downloadText))}>
            1-задача
          </div>

          <Button
            title={chose ? '1-задача.docx' : 'Загрузить файл'}
            fontSize={14}
            titleColor={chose ? COLORS.blue : COLORS.black}
            background={COLORS.white}
            iconLeft={chose ? DownloadIcon : ChoseIcon}
            iconHeight={20}
            iconWidth={20}
            iconWrapper={'me-2'}
            roboto={true}
            borderWidth={1}
            borderStyle={'solid'}
            borderColor={chose ? COLORS.blue : COLORS.choseButton}
            onClick={ () => { setChose(!chose) } }
          />
        </div>
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
  },
  downloadText: {
    fontSize: 12,
    fontWeight: 700,
    color: COLORS.black
  }
})

export default GroupsListDetail
