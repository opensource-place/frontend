import React, { useState, useEffect } from 'react'
import { NavBar } from '../components'
import Markdown from 'markdown-to-jsx'
import mdDocument from '../docs/hello.md'

const Doc = () => {
  const [content, setContent] = useState('')

  useEffect(() => {
    getMarkdown()
  })

  const getMarkdown = async () => {
    const res = await fetch(mdDocument)
    setContent(await res.text())
  }

  return (
    <div>
    <div className='min-h-screen flex flex-col items-center dark:bg-gray-800 bg-gray-200'>
      <NavBar />
      <h1>Documents</h1>
      <div>
        <Markdown>
          {content}
        </Markdown>
      </div>
    </div>
  )
}

export default Doc
