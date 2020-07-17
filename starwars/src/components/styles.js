import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'};
    width: ${(props) => props.width || '100%'};
    background-color: ${(props) => props.background || 'white'};
`