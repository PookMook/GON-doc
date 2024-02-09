import React, {useState} from 'react'
import GON from 'graph-object-notation'

import Centered from '../layout/centered'
import styles from './playground.module.scss'

export default () => {

  const defaultGONString = `{
  "data": {
    "queries":{
      "currentUser":@references.user.id1@,
      "users": [@references.user.id1@, @references.user.id2@],
      "events":[@references.event.id1@]
    }
  },
  "references":{
    "user":{
      "id1":{"name":"Alice", "id": "id1", "__typename": "user"},
      "id2":{"name":"Bob", "id": "id2", "__typename": "user"},
      "id3":{"name":"Charlie", "id": "id3", "__typename": "user"}
    },
    "event": {
       "id1":{
         "__typename": "event",
         "name": "My first event", 
         "userList":[@references.user.id1@, @references.user.id3@]
      }
    }
  }
}`
  const [string,setString] = useState(defaultGONString)

  let parsedGon
  try{
    parsedGon = GON.parse(string)
    delete parsedGon.references
  }
  catch(e){
    parsedGon = {error:e.toString()}
  }

  let stringifiedJson
  try {
    stringifiedJson = JSON.stringify(parsedGon, null, 1)
    
  } catch (error) {
    stringifiedJson = error.toString()
  }

  //Stringification should never fail
  let stringifiedGon = GON.stringify(parsedGon,null,1)



  return(
    <Centered>
      <article className={styles.playground}>
        <h1>GON string</h1>
        <textarea value={string} onChange={e=>setString(e.target.value)} />
        <h1>JSON stringified object</h1>
        <pre>{stringifiedJson}</pre>
        <h1>GON stringified object</h1>
        <pre>{stringifiedGon}</pre>
        <p>Feel free to play and try to break the GON parse, if you see something that doesn't feel quite right, <a href="https://github.com/MakeItHappenDev/Graph-Object-Notation/issues" rel="noopener noreferrer" target="_blank">reach out in the issues</a></p>
      </article>
    </Centered>
  )
}