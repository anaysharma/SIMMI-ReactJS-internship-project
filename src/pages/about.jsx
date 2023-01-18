import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import docs from '../data/documentation.md'
import remarkGfm from 'remark-gfm'

function About() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(docs)
      .then((res) => res.text())
      .then((text) => setContent(text))
  }, [])

  console.log(content)

  return (
    <ReactMarkdown
      children={content}
      className="prose mx-auto max-w-4xl px-8 pt-20 md:px-4"
      remarkPlugins={[remarkGfm]}
    />
  )
}

export default About
