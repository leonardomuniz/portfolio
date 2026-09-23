import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import './Button.css'

type Variante = 'primary' | 'outline'

type ButtonProps = { variant?: Variante } & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
)


/**
 * Botão do site. Com `href` renderiza um <a> (navegação/download);
 * sem `href`, um <button> (ação). O visual é o mesmo nos dois casos.
 *
 * - `primary`: ação principal, preenchido.
 * - `outline`: ação secundária, só contorno.
 */
function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`.trim()

  if (props.href !== undefined) {
    return <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />
  }

  return <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />
}

export default Button
