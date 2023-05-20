import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import classNames from 'classnames'
import { COLORS } from '../utils/colors'
import SubjectLogo from '../assets/Lookscout-subjects.png'
import HeaderAvatar from '../assets/card-avatar.png'
import ChooseIcon from '../assets/choose-subject.png'
import ChooseIconActive from '../assets/choose-subjetc-active.png'
import SubjectsIcon from '../assets/subjects.png'
import SubjectsIconActive from '../assets/subjects-active.png'
import TableIcon from '../assets/table.png'
import TableIconActive from '../assets/table-active.png'
import TestIcon from '../assets/test.png'
import TestIconActive from '../assets/test-active.png'
import MenuItem from '../components/MenuItem'
import ChooseSubjects from '../components/ChooseSubjects'
import MySubjects from '../components/MySubjects'
import Arrow from '../assets/subject-tilte-arrow.png'
import { useAppDispatch, useAppSelector } from '../components/store/store'
import { changeSubjectList } from '../components/store/features/subjectListSlice'
import { changeActiveMenu } from '../components/store/features/activeMenuSlice'
import { changeTitle } from '../components/store/features/setTitleSlice'
import TableFile from '../components/TableFile'
import StudentTest from '../components/StudentTest'

const StudentMain = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const subjectListState = useAppSelector(state => state.subjectList)
  const activeMenu = useAppSelector(state => state.menuList)
  const title = useAppSelector(state => state.title)

  return (
    <div className={classNames(css(styles.container))}>
      <div className={classNames(css(styles.header), 'd-flex flex-row justify-content-between align-items-center px-4 py-3')}>
        <img src={SubjectLogo} alt={'logo'} className={classNames(css(styles.image), 'pointer')}/>

        <div className={classNames('d-flex flex-row justify-content-between align-items-center')}>
          <img src={HeaderAvatar} alt={'header-avatar'} className={classNames(css(styles.headerAvatar))}/>

          <div className={'ms-3'}>
            <div className={classNames(css(styles.userName), 'inter-regular')}>Axatov Saidahror</div>

            <div className={classNames(css(styles.userEmail), 'inter-regular')}>axatovsaidahror@.com</div>
          </div>
        </div>
      </div>

      <div className={'d-flex flex-row roboto-regular'}>
        <div className={classNames(css(styles.menu), 'p-3')}>
          <div className={classNames(css(styles.menuTitle), 'roboto-regular')}>
            {'меню'.toUpperCase()}
          </div>

          <div className={'mt-3 pointer'}>
            <MenuItem
              icon={ activeMenu.menuList.choose ? ChooseIconActive : ChooseIcon }
              title={'Выбор предметов'}
              titleColor={ activeMenu.menuList.choose ? COLORS.blue : COLORS.welcomeMainSubtitle }
              onClick={() => {
                dispatch(changeActiveMenu({
                  choose: true,
                  subjects: false,
                  table: false,
                  test: false
                }))
                dispatch(changeTitle('Выбор предметов'))
              }}
            />

            <MenuItem
              icon={ activeMenu.menuList.subjects ? SubjectsIconActive : SubjectsIcon }
              title={'Мои предметы'}
              titleColor={ activeMenu.menuList.subjects ? COLORS.blue : COLORS.welcomeMainSubtitle }
              onClick={() => {
                dispatch(changeActiveMenu({
                  choose: false,
                  subjects: true,
                  table: false,
                  test: false
                }))
                dispatch(changeTitle('Мои предметы'))
              }}
            />

            <MenuItem
              icon={ activeMenu.menuList.table ? TableIconActive : TableIcon }
              title={'Расписание'}
              titleColor={ activeMenu.menuList.table ? COLORS.blue : COLORS.welcomeMainSubtitle }
              onClick={() => {
                dispatch(changeActiveMenu({
                  choose: false,
                  subjects: false,
                  table: true,
                  test: false
                }))
                dispatch(changeTitle('Расписание'))
              }}
            />

            <MenuItem
              icon={ activeMenu.menuList.test ? TestIconActive : TestIcon }
              titleColor={ activeMenu.menuList.test ? COLORS.blue : COLORS.welcomeMainSubtitle }
              title={'Итоговый тест'}
              onClick={() => {
                dispatch(changeActiveMenu({
                  choose: false,
                  subjects: false,
                  table: false,
                  test: true
                }))
                dispatch(changeTitle('Итоговый тест'))
              }}
            />
          </div>
          <br className="clear"/>
        </div>

        <div className={classNames(css(styles.rightContainer))}>
          <div className={classNames(css(styles.title), 'p-3 d-flex d-row align-items-center')}>
            { !subjectListState.subjectList.main
              ? (
                <div onClick={() => {
                  if ((subjectListState.subjectList.activity ||
                    subjectListState.subjectList.table) &&
                    !subjectListState.subjectList.detail) {
                    dispatch(changeSubjectList(
                      { main: true, activity: false, table: false }))
                  } else if (subjectListState.subjectList.detail) {
                    dispatch(changeSubjectList(
                      { ...subjectListState.subjectList, table: true, detail: false }))
                  }
                }}>
                  <img src={Arrow} alt={'arrow'} className={classNames(css(styles.arrow), 'pointer')}/>
                </div>)
              : ''}
            <div>{ title }</div>
          </div>

          <div className={classNames(css(styles.main), 'px-2 py-3')}>
            { activeMenu.menuList.choose
              ? <ChooseSubjects />
              : activeMenu.menuList.subjects
                ? <MySubjects/>
                : activeMenu.menuList.table
                  ? <TableFile />
                  : <StudentTest />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    backgroundColor: COLORS.subjectBackground
  },
  header: {
    width: '100vw',
    backgroundImage: COLORS.mainLinearGradient
  },
  image: {
    width: '10%'
  },
  headerAvatar: {
    width: 40,
    height: 40
  },
  userName: {
    fontSize: 13,
    color: COLORS.white
  },
  userEmail: {
    fontSize: 12,
    color: COLORS.white
  },
  menu: {
    width: '15.5%',
    backgroundColor: COLORS.white
  },
  menuTitle: {
    color: COLORS.welcomeMainSubtitle,
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 1
  },
  title: {
    fontSize: 26,
    color: COLORS.black,
    width: '100%',
    fontWeight: 700,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.subjectTitleContainerBorder,
    backgroundColor: COLORS.loginHeroBackground
  },
  main: {

  },
  rightContainer: {
    width: '100%'
  },
  arrow: {
    width: 32,
    height: 32
  }
})
export default StudentMain
