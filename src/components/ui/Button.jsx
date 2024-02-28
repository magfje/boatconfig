import React from 'react'

const Button = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 ${props.className || ''}`}
      {...props} // Spread additional props to the button element
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
