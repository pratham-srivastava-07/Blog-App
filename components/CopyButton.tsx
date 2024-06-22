import React from 'react'
import { BsCopy } from 'react-icons/bs'

export default function CopyButton({id}: {id: any}) {
    const handleCopy = async () => {
        const text = document.getElementById(id)?.textContent;
        try{
          await  navigator.clipboard.writeText(text!)
        } catch(err) {
            console.log(err);
            
        }
    }
  return (
    <div onClick={handleCopy} className='hover:cursor-pointer'>
      <BsCopy/>
    </div>
  )
}
