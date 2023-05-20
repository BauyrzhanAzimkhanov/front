import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { COLORS } from '../utils/colors'
import classNames from 'classnames'
import Logo from '../assets/Lookscout-login.png'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const ForgetPasswordWithEmail = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className={classNames('d-flex flex-row', css(styles.container))}>
      <div className={classNames('p-5', css(styles.leftContainer))}>
        <div className={classNames('d-flex flex-row justify-content-start')}>
          <img src={Logo} alt={'logo'} className={classNames(css(styles.logo))}/>
        </div>

        <div className={'d-flex flex-row justify-content-center'}>
          <div className={'p-5'} style={{ width: '50%' }}>
            <div className={'p-5'}>
              <div className={classNames(css(styles.title), 'roboto-regular')}>
                СМС для восстановления отправлено!
              </div>

              <div className={classNames(css(styles.subtitle), 'roboto-regular')}>
                Проверьте свою телефон номер, чтобы узнать о следующих <br/> шагах по сбросу пароля.
              </div>

              <Button
                title={'Контактная поддержка'.toUpperCase()}
                width={'50%'}
                wrapper={'mt-4'}
                background={COLORS.welcomeCardButton}
                fontSize={13}
                titleColor={COLORS.loginButtonTextColor}
                onClick={() => { navigate('/forget-password-with-email') }}
              />

              <Button
                title={'войти'.toUpperCase()}
                width={'100%'}
                wrapper={'mt-4'}
                background={COLORS.blue}
                fontSize={13}
                titleColor={COLORS.loginButtonTextColor}
                onClick={() => { navigate('/reset-password') }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100vh'
  },
  image: {
    transform: 'scale(0.8)'
  },
  logo: {
    width: '15%'
  },
  title: {
    fontSize: 18,
    color: COLORS.loginTitleText
  },
  leftContainer: {
    width: '100%'
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.loginTitleText
  }
})

export default ForgetPasswordWithEmail
