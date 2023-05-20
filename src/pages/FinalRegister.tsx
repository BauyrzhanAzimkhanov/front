import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import { COLORS } from '../utils/colors'
import classNames from 'classnames'
import Logo from '../assets/Lookscout-login.png'
import LoginInput from '../components/LoginInput'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import HeroImage from '../assets/register-hero.png'

const FinalRegister = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className={classNames('d-flex flex-row justify-content-between', css(styles.container))}>
      <div className={classNames('p-5', css(styles.leftContainer))}>
        <div className={classNames('d-flex flex-row justify-content-start')}>
          <img src={Logo} alt={'logo'} className={classNames(css(styles.logo))}/>
        </div>

        <div className={'p-5'}>
          <div className={'p-5'}>
            <div className={'p-5'}>
              <div className={classNames(css(styles.title), 'roboto-regular')}>
                Введите свой пароль
              </div>
              <LoginInput
                placeholder={'Пароль'}
                wrapper={'mt-4'}
              />

              <LoginInput
                placeholder={'Подтвердите пароль'}
                wrapper={'mt-4'}
              />

              <Button
                title={'Зарегистрироваться'.toUpperCase()}
                width={'100%'}
                wrapper={'mt-4'}
                background={COLORS.welcomeCardButton}
                fontSize={13}
                titleColor={COLORS.loginButtonTextColor}
                onClick={() => { navigate('/final-register') }}
              />

              <Button
                title={'войти'.toUpperCase()}
                width={'100%'}
                wrapper={'mt-4'}
                background={COLORS.blue}
                fontSize={13}
                titleColor={COLORS.loginButtonTextColor}
              />
            </div>
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
    width: '40%'
  },
  logo: {
    width: '35%'
  },
  title: {
    fontSize: 30,
    color: COLORS.loginTitleText
  },
  leftContainer: {
    width: '60%'
  }
})

export default FinalRegister
