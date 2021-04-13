import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

// anything with **FOO** is a template to replace in python
// /images/L/01.JPG
// X01

const imageSize = [130, 1000, 400, 320, 180]
class ClonableRoute extends React.Component {
  
  public render(): JSX.Element {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1>Cloned Route X01</h1>
        <div>
          <Link href="/test/X02">X02</Link>|
          <Link href="/test/X02">X02</Link>
        </div>
        {imageSize.map(size => {
          return <Image key={"_" + size + "_"}src="/images/L/01.JPG" alt="" width={size} height={size} objectFit={'contain'} />
        })}
      </div>
    )
  }
}

export default ClonableRoute;