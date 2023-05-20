import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import classNames from 'classnames'
import { COLORS } from '../utils/colors'
import Button from './Button'
import DownloadIcon from '../assets/download-blue-icon.png'
interface ActivityListDetailProps {
  name: string
}
const MyActivityListDetail = ({ name }: ActivityListDetailProps): JSX.Element => {
  return (
    <div className={classNames(css(styles.container),
      'd-flex flex-row justify-content-between align-items-center px-3 py-4')}>

      <div className={classNames(css(styles.name), 'roboto-regular')}>
        { name }
      </div>

      <div className={'d-flex flex-column justify-content-between'}>
        <div className={classNames('roboto-regular', css(styles.downloadText))}>
          1-задача
        </div>

        <Button
          title={'1-задача.docx'}
          fontSize={14}
          titleColor={COLORS.blue}
          background={COLORS.white}
          iconLeft={DownloadIcon}
          iconHeight={20}
          iconWidth={20}
          iconWrapper={'me-2'}
          roboto={true}
          borderWidth={1}
          borderStyle={'solid'}
          borderColor={COLORS.blue}
          onClick={() => {}}
        />
      </div>

      <div className={classNames(css(styles.name), 'roboto-regular')}>
        01-04-2023 23:59:59
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

      <div className={classNames(css(styles.link), 'roboto-regular pointer')}>
        Лабараторная работа №3.docx
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
  },
  link: {
    fontSize: 14,
    fontWeight: 400,
    color: COLORS.blue,
    textDecorationLine: 'underline'
  }
})

export default MyActivityListDetail
