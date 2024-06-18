import React from 'react'
import { BsTypeH1 } from 'react-icons/bs'
import Markdown from "react-markdown"
export default function MarkDownPreview({content, className}: {content: string, className?:string}) {


  return <Markdown components={{
    h1: ({node, ...props}) => {
        return <h1 {...props} className='text-3xl font-bold' />
    },
    h2: ({node, ...props}) => {
        return <h1 {...props} className='text-2xl font-bold' />
    },
    h3: ({node, ...props}) => {
        return <h1 {...props} className='text-xl font-bold' />
    }
  }}>
    {content}
  </Markdown>
}
