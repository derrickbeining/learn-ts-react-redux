interface RequestConfig {
  body?: {[key: string]: any}
  method: string
  headers: {[key: string]: string}
  url: string
  query?: string
}
