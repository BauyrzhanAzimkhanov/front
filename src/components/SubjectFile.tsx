import React, { useRef, useEffect } from 'react'
import WebViewer from '@pdftron/webviewer'
const SubjectFile = (): JSX.Element => {
  const viewerDiv = useRef<HTMLDivElement>(null)

  useEffect(() => {
    void WebViewer({ path: 'lib', initialDoc: 'https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK' },
      viewerDiv.current as HTMLDivElement).then(instance => {})
  }, [])
  return (
    <div>
      <div ref={viewerDiv} style={{ height: '100vh', width: '50vw' }}></div>
    </div>
  )
}

export default SubjectFile
