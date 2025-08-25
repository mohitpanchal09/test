import React from 'react'

type Props = {
  name: string
}

function SectionTitle({ name }: Props) {
  return (
    <h1 className="text-4xl md:text-5xl font-bold bg-[linear-gradient(90deg,_#03803F_0.04%,_#B3FF00_37.56%,_#055F30_72.31%)] bg-clip-text text-transparent leading-tight text-center mb-4 sm:mb-6 md:mb-8 px-4">
      {name}
    </h1>
  )
}

export default SectionTitle
