import { css } from 'styled-components'

export type TCustomStyles = string | ReturnType<typeof css>

export type TCustomStylesMixin = {
  customStyles?: TCustomStyles,
}

export const customStylesMixin = css<TCustomStylesMixin>`
  ${({ customStyles }) => customStyles}
`
