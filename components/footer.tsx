import React from 'react'
import Link from 'next/link'
import { SiDiscord, SiGithub, SiX } from 'react-icons/si'
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-4">
      <div className="flex justify-end">
        {/* <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://discord.gg/zRxaseCuGq" target="_blank">
            <SiDiscord size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://x.com/morphic_ai" target="_blank">
            <SiX size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://git.new/morphic" target="_blank">
            <SiGithub size={18} />
          </Link>
        </Button> */}
        <Button
          variant={'link'}
        // size={'icon'}
        // className="text-muted-foreground/50"
        >
          <Link href="https://solange.io" target="_blank">
            {/* <SiGithub size={18} /> */}
            {'Back to web>'}
          </Link>
        </Button>
      </div>
    </footer>
  )
}

export default Footer
