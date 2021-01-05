import styled from 'styled-components'

function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}

export const Container = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
`

export const Value = styled.h1`
    text-align: center;
    color: white;

    >h1{
        color: ${generateRandomColor};
        font-size: 190px;
    }
`

export const Increment = styled.button`
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    width: 140px;
    height: auto;
    outline: none;
    box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    cursor: pointer;
    transition: 0.2s;

    :hover{
        color: #FFF;
        box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 1);
        background-color: rgba(255, 255, 255, 0.4);
    }

    
`