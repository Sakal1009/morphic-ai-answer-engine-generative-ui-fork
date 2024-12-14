'use client'
import { cn } from '@/lib/utils'

type IconLogoProps = React.ComponentProps<'img'> & {
  className?: string
}

function IconLogo({ className, ...props }: IconLogoProps) {
  return (
    // <svg
    //   fill="currentColor"
    //   viewBox="0 0 256 256"
    //   role="img"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={cn('h-4 w-4', className)}
    //   {...props}
    // >
    //   <circle cx="128" cy="128" r="128" fill="black"></circle>
    //   <circle cx="102" cy="128" r="18" fill="white"></circle>
    //   <circle cx="154" cy="128" r="18" fill="white"></circle>
    // </svg>
    <img
      src="/favicon.png"
      className={cn('w-10 h-10', className)}
      alt="favicon"
      {...props}
    />
  )
}

export { IconLogo }
