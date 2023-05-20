import React, { useState } from 'react'
import { css, StyleSheet } from 'aphrodite'
import classNames from 'classnames'
import { COLORS } from '../utils/colors'

interface LoginInputProps {
  width?: string | number
  placeholder?: string
  wrapper?: string
  wrapperWidth?: string | number
  paddingRight?: string | number
  paddingLeft?: string | number
  paddingTop?: string | number
  paddingBottom?: string | number
  fontSize?: number
  style?: string
  icon?: string | null
}

const LoginInput = ({
  width = '100%',
  placeholder,
  wrapper,
  wrapperWidth,
  paddingRight = 7,
  paddingLeft = 7,
  paddingBottom = 10,
  paddingTop = 10,
  fontSize = 14,
  style = 'login-input',
  icon = null
}: LoginInputProps): JSX.Element => {
  const [active, setActive] = useState(false)
  return (
    <div className={classNames(css(styles.container), wrapper)} style={{ position: 'relative', width: wrapperWidth }}>
      <input
        style={{ width, paddingLeft, paddingRight, paddingTop, paddingBottom, fontSize }}
        className={classNames(css(styles.input), style)}
        placeholder={ active ? '' : placeholder }
        onFocus={() => { setActive(true) }}
        onBlur={() => { setActive(false) }}
      />

      <label>{placeholder}</label>

      {icon !== null
        ? <img src={icon} alt={'icon'} className={classNames(css(styles.icon))}/>
        : ''}
    </div>
  )
}

const styles = StyleSheet.create({
  container: {},
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.loginInputBorderColor,
    borderRadius: 4,
    placeholderTextColor: COLORS.loginInputPlaceholderColor
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: '3%',
    top: '20%'
  }
})

export default LoginInput
