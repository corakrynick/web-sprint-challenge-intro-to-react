// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const StyledDetails = styled.div`
background-color: black;
color: orange;
width: 60%;
margin: auto;
padding: 1%;
border: 2px solid orange;
opacity: 0.8;


`

export default function Character(props) {
    
    const {character} = props;

    return (
        <StyledDetails>
            <h2>{character.name}</h2>
            <p>Gender: {character.gender}</p>
            <p>Born: {character.birth_year}</p>
        </StyledDetails>
    )
}
