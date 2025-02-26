import { QuillFormat } from 'projects/ngx-quill-v24/config/src/public_api'

export const getFormat = (format?: QuillFormat, configFormat?: QuillFormat): QuillFormat => {
  const passedFormat = format || configFormat
  return passedFormat || 'html'
}
