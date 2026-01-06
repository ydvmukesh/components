export const buttonCode = `import React from "react"
import { Loader2 } from "lucide-react"
import Link from "next/link"

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "link"

type ButtonSize = "sm" | "md" | "lg" | "icon"

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  href?: string
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 active:scale-95"

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-slate-900 text-white hover:bg-slate-800",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  outline:"border border-slate-200 bg-transparent hover:bg-slate-100 text-slate-900",
  ghost: "hover:bg-slate-100 text-slate-600",
  danger: "bg-red-600 text-white hover:bg-red-700",
  link: "bg-transparent underline-offset-4 hover:underline text-slate-900",
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3",
  md: "h-10 px-4 py-2",
  lg: "h-11 px-8 text-base",
  icon: "h-10 w-10",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      className = "",
      children,
      href,
      disabled,
      ...props
    },
    ref
  ) => {
   // 1. Update the Link part of the condition
if (href) {
  return (
    <Link
      href={href}
      className={\`\${baseStyles} \${variantStyles[variant]} \${sizeStyles[size]} \${className}\`}
       ref={ref as React.ForwardedRef<HTMLAnchorElement>}
      {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ms-2">{rightIcon}</span>}
    </Link>
  )
}
    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={\`\${baseStyles} \${variantStyles[variant]} \${sizeStyles[size]} \${className}\`}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
           {!isLoading && rightIcon && <span className="ms-2">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }

`
