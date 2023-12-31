export interface ResponseBase<T = any> {
  code: number
  msg?: string | undefined | null
  data?: T
  status: boolean
}

export interface ParamsNetwork {
  url: string
  params?: any
  query?: any
  body?: any
  baseUrl?: string
}
