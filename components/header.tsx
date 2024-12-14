import React from 'react'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'
import HistoryContainer from './history-container'

export const Header: React.FC = async () => {
  return (
    <>
      <header className="fixed w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
        <div>
          <a href="/">
            <IconLogo className={cn('w-10 h-10')} />
            <span className="sr-only">Solange</span>
          </a>
        </div>
        <div className="flex gap-0.5">
          <ModeToggle />
          <HistoryContainer location="header" />
        </div>
      </header>
      <div className="w-full flex justify-center items-center">
        <img src="/favicon.png" className="w-40 h-40" />
      </div>
    </>
  )
}

export default Header
