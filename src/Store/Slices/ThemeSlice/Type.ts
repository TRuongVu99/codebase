import themes from '@/Theme/themes'

export type ThemeState = {
  theme: 'default' | keyof PropsWithoutDark<typeof themes>
  darkMode: boolean | null
}

type DarkProps<T> = {
  [K in keyof T]: K extends `${infer Prefix}_dark` ? K : never
}[keyof T]

type PropsWithoutDark<T> = Omit<T, DarkProps<T>>

export type ThemePayload = {
  payload: Partial<ThemeState>
}
