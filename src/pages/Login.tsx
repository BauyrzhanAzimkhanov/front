import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import classNames from 'classnames'
import HeroImage from '../assets/login-hero.png'
import Logo from '../assets/Lookscout-login.png'
import { COLORS } from '../utils/colors'
import LoginInput from '../components/LoginInput'
import Button from '../components/Button'
import ButtonIcon from '../assets/login-button-chevron.png'
import { useNavigate } from 'react-router-dom'

const Login = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className={classNames('d-flex flex-row justify-content-between', css(styles.container))}>
      <div className={classNames('p-5', css(styles.leftContainer))}>
        <div className={classNames('d-flex flex-row justify-content-start')}>
          <img src={Logo} alt={'logo'} className={classNames(css(styles.logo))}/>
        </div>

        <div className={'p-5'}>
          <div className={'p-5'}>
            <div className={classNames(css(styles.title), 'roboto-regular')}>
              Войти
            </div>

            <LoginInput
              placeholder={'Телефон номер *'}
              wrapper={'mt-4'}
            />

            <LoginInput
              placeholder={'Пароль *'}
              wrapper={'mt-4'}
            />

            <div className={classNames('d-flex flex-row justify-content-between align-items-center mt-4')}>
              <Button
                title={'Войти'}
                icon={ButtonIcon}
                background={COLORS.blue}
                iconWrapper={'ms-3'}
                width={'33%'}
                roboto={true}
                fontSize={15}
                titleColor={COLORS.loginButtonTextColor}
                onClick={() => { navigate('/subjects') }}
              />

              <Button
                title={'Забыли пароль?'}
                width={'45%'}
                onClick={() => { navigate('/forget-password') }}
              />
            </div>

            <Button
              title={'Создать аккаунт'}
              width={'100%'}
              wrapper={'mt-4'}
              background={COLORS.welcomeCardButton}
              fontSize={15}
              titleColor={COLORS.loginButtonTextColor}
            />
          </div>
        </div>
      </div>

      <div className={classNames('d-flex justify-content-center', css(styles.hero))}>
        <img src={HeroImage} alt={'hero'} className={classNames(css(styles.image))}/>
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
  hero: {
    backgroundColor: COLORS.loginHeroBackground,
    width: '55%'
  },
  logo: {
    width: '35%'
  },
  title: {
    fontSize: 30,
    color: COLORS.loginTitleText
  },
  leftContainer: {
    width: '45%'
  }
})

export default Login
