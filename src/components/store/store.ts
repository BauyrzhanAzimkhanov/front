import { SubjectListSlice } from './features/subjectListSlice'
import { configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ActiveMenuSlice } from './features/activeMenuSlice'
import { SetTitleSlice } from './features/setTitleSlice'
import { SetTestSlice } from './features/setTestSlice'
import { TeacherActiveMenuSlice } from './features/teacherActiveMenuSlice'
import { SetTeacherTitleSlice } from './features/setTeacherTitleSlice'
import { TeacherSubjectListSlice } from './features/teacherSubjectListSlice'

export const store = configureStore({
  reducer: {
    subjectList: SubjectListSlice.reducer,
    menuList: ActiveMenuSlice.reducer,
    title: SetTitleSlice.reducer,
    setTest: SetTestSlice.reducer,
    teacherMenuList: TeacherActiveMenuSlice.reducer,
    teacherTitle: SetTeacherTitleSlice.reducer,
    teacherSubjectList: TeacherSubjectListSlice.reducer
  }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
