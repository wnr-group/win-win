import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function Card({
  children,
  className,
  hover = true,
  padding = true,
  animate = true,
  onClick,
  ...props
}) {
  const Component = animate ? motion.div : 'div'

  const motionProps = animate ? {
    whileHover: hover ? { y: -4, transition: { duration: 0.2 } } : {},
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  } : {}

  return (
    <Component
      className={clsx(
        'bg-white rounded-2xl',
        hover && 'transition-shadow duration-300 hover:shadow-card-hover',
        padding && 'p-6',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  )
}

export function CardHeader({ children, className }) {
  return (
    <div className={clsx('mb-4', className)}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className }) {
  return (
    <h3 className={clsx('text-xl font-semibold text-gray-900', className)}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className }) {
  return (
    <p className={clsx('text-gray-600 mt-1', className)}>
      {children}
    </p>
  )
}

export function CardContent({ children, className }) {
  return (
    <div className={clsx('', className)}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className }) {
  return (
    <div className={clsx('mt-4 pt-4 border-t border-gray-100', className)}>
      {children}
    </div>
  )
}
