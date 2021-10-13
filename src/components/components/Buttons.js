import styled from 'styled-components'



export const ButtonContainer = styled.button`
    test-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: transparent;
    color: var(--lightBlue);
    padding: 5px 5px;
    cursor:pointer;
    margin: 5px 10px 5px 0px;
    border-radius: 3px;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus{
        outline:none;
    }
`;