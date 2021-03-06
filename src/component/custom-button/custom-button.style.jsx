import styled, {css} from 'styled-components';

const inverted = css`
     background-color: white;
      color:black;
      &:hover{
        background-color: black;
        color: white;
        border: none;
      }
`
const googleSigin =  css`
    background-color: #4285f4;
    color:#fff;
    &:hover{
    background-color: #357ae8;
    }
`

const buttonStyles = css`
    background-color: black;
    color: white;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
`

const getButtonStyles = (props)=>{
    if(props.isGoogleSigin){
        return googleSigin;
    }
    return props.inverted ? inverted : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 25px 0 25px;
    font-size: 15px;
    
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;     
    ${getButtonStyles}
`