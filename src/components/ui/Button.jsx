import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const variants = {
  primary: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 shadow-lg hover:shadow-xl',
  secondary: 'bg-navy-500 text-white hover:bg-navy-600 focus:ring-navy-500 shadow-lg hover:shadow-xl',
  outline: 'border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white focus:ring-navy-500',
  'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-navy-500 focus:ring-white',
  ghost: 'text-navy-500 hover:bg-navy-50 focus:ring-navy-500',
  'ghost-white': 'text-white hover:bg-white/10 focus:ring-white',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
}

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  as = 'button',
  animate = true,
  ...props
}, ref) => {
  const Component = animate ? motion.button : as

  const baseClasses = clsx(
    'inline-flex items-center justify-center font-semibold rounded-lg',
    'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  )

  const motionProps = animate ? {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.2 }
  } : {}

  return (
    <Component
      ref={ref}
      className={baseClasses}
      disabled={disabled || loading}
      {...motionProps}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="mr-2">{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className="ml-2">{icon}</span>
          )}
        </>
      )}
    </Component>
  )
})

Button.displayName = 'Button'

export default Button
