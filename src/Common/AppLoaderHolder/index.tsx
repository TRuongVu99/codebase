import { AppLoaderRef } from '@/Components/Loader/Type'
import { createRef } from 'react'

export const appLoaderHolder = createRef<AppLoaderRef>()

export const showMessage = () => {
  appLoaderHolder.current?.show()
}

export const hideMessage = () => {
  appLoaderHolder.current?.hide()
}
