import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
}

function DietTypeButton({ children, className }: Props) {
  return (
    <Button
      className={cn(
        'rounded-xl cursor-pointer bg-[#D8EDD3] text-[#3BA324] h-12 w-[98%] m-1 hover:bg-[#017438] hover:text-[#B3FF00] font-medium text-xl',
        className
      )}
    >
      {children}
    </Button>
  )
}

export default DietTypeButton
