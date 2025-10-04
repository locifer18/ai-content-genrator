'use client'
import React, { useRef, useEffect, useState } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface Props {
  output: string;
}

const OutputSection = ({output}: Props) => {
  const editorRef: any = useRef(null);
  const [copiedId, setCopiedId] = useState<boolean>(false); 
  
  
  useEffect(() => {
    if (output && editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      if (editorInstance) {
        // Set markdown content
        editorInstance.setMarkdown(output);
      }
    }
  }, [output]);
  

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5 border-b'>
        <h2 className='text-xl font-bold'>Your Result</h2>
        <Button onClick={()=>{navigator.clipboard.writeText(output),setCopiedId(true)}} className='cursor-pointer gap-2'>
          <Copy className='w-4 h-4' />
          { copiedId ?'Copied': 'Copy'}
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        height="450px"
        onChange={() => {}}
      />
    </div>
  )
}

export default OutputSection