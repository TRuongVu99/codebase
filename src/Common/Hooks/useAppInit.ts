import { appInit } from '@/Store/Slices'
import { useState, useEffect } from 'react'
import { useAppDispatch } from './useRTK'

export default function useAppInit() {
  const dispatch = useAppDispatch()
  const [appLoadingComplete, setAppLoadingComplete] = useState(false)

  const onAppInit = async () => {
    try {
      await dispatch(appInit())
    } catch (err) {
      console.log(err)
    } finally {
      setAppLoadingComplete(true)
    }
  }

  useEffect(() => {
    onAppInit()
  }, [])

  return { appLoadingComplete }
}
