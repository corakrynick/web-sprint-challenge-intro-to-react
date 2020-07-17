import React from 'react'
import Character from './Character'

export default function CharacterList(props) {

    const {characters} = props

    return(
        <div>
            {
                characters.map((fr) => {
                    return <Character 
                    key={fr.id}
                    character={fr} />
                })
            }
        </div>
    )
}