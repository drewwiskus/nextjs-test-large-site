import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

// anything with **FOO** is a template to replace in python
// **IMAGE**
// **NAME**

const imageSize = [130, 1000, 400, 320, 180]
class ClonableRoute extends React.Component {
  
  public render(): JSX.Element {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1>Cloned Route **NAME**</h1>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          **ROUTES**
        </div>
        {imageSize.map(size => {
          return <Image src="**IMAGE**" alt="" width={size} height={size} objectFit={'contain'} />
        })}
      </div>
    )
  }
}

export default ClonableRoute;