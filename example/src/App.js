import React from 'react'

import {  Button } from 'buttonneww'
import 'buttonneww/dist/index.css'

const App = () => {
  return (
    <>
    <Button text="Primary Button" type="primary"/>
    <Button text="Default Button " type="default"/>
    <Button text="Dashed Button" type="dashed"/>
    <Button text="Text Button" type = "text"/>
    <Button text="Link Button" type = "link"/>
    </>
  )
  
}

export default App
