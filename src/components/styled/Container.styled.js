import styled from "styled-components";
import bgimage from '../images/bg-intro-desktop.png';

export const Container = styled.div`
    --Red: hsl(0, 100%, 74%);
    --Green: hsl(154, 59%, 51%);
    --Dark-Green: hsl(154, 59%, 45%);
    --Blue: hsl(248, 32%, 49%);
    --Dark-Blue: hsl(249, 10%, 26%);
    --Grayish-Blue: hsl(246, 25%, 77%);
    font-size: 16px;
    --semi-reguler:400;
    --reguler:500;
    --semibold:600;
    --bold:700;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width:100wh;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: var(--Red);
    background-image: url(${bgimage});
    background-size:cover;
    background-position: left;
    h1{
        font-size: 3.15em;
        font-weight: var(--bold);
        color: #fff;
        line-height: 1.1em;
        margin: 160px 0 15px;
        @media screen and (max-width:1025px){
            margin: 10px 0;
        }
        @media screen and (max-width:600px){
            font-size: 2.1em;
            margin: 20px 0;
        }
    }
    h2{
        font-size: 1em;
        font-weight: var(--reguler);
        color: #fff;
        line-height: 1.65em;
        @media screen and (max-width:1025px){
            margin: 10px 0;
        }
        @media screen and (max-width:600px){
            margin: 10px 0 40px;
        }
    }
    h3{
        font-size: 1em;
        font-weight: var(--semireguler);
        color: #fff;
        text-align: center;
        @media screen and (max-width:1025px){
            font-size: .9em;
        }
        @media screen and (max-width:600px){
            font-size: 1em;
        }
    }
    h4{
        font-size: .7em;
        font-weight: var(--semireguler);
        color: var(--Grayish-Blue);
        margin:5px auto 15px;
        @media screen and (max-width:1025px){
            margin: 10px 20px 20px;
        }
        @media screen and (max-width:600px){
            margin: 10px 20px 20px;
        }
    }
    h5{
        font-size: .75em;
        font-weight: var(--reguler);
        color: var(--Red);
        margin: 5px 40px 10px;
        text-align: right;
        @media screen and (max-width:1025px){
            margin: 0 22px;
        }
        @media screen and (max-width:600px){
            margin: 0 20px;
        }
    }
    span{
        font-weight: var(--bold);
        cursor: pointer;
        &:hover{
            color:var(--Green);
        }
        &:active{
            color:var(--Dark-Blue);
        }
    }
`