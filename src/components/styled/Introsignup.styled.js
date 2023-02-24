import styled from "styled-components";

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:600px) {
        flex-direction: column;
    }
`
export const Styledintrosignup = styled(Hstackflexi)`
    width: 1100px;
    height: 550px;
    border-radius: 10px;
    @media screen and (max-width:1025px) {
        width: 90%;
        margin: 20px 10px 20px;
    }
    @media screen and (max-width:600px) {
        width: auto;
        height: auto;
        margin: 50px 30px;
    }
`
//Styled for leftside :
export const Leftside = styled(Vstack)`
    width: 550px;
    height: 550px;
    border-radius: 10px 0 0 10px;
    @media screen and (max-width:1025px) {
        width: 90%;
        margin: auto 20px;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width:600px) {
        width: auto;
        height: auto;
        margin: auto;
        text-align: center;
    }
`
//Styled for rightside:
export const Rightside = styled(Vstack)`
    width: 550px;
    height: auto;
    border-radius: 0 10px 10px 0;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:1025px) {
        width: 90%;
    }
    @media screen and (max-width:600px){
        width: auto;
        height: auto;
        margin: auto;
    }
`
export const Tryit7days = styled.div`
    width: 550px;
    height: 60px;
    border-radius: 10px;
    margin-bottom: 22px;
    background-color: var(--Blue);
    box-shadow: 0 8px 0 0 rgba(0,0,0,0.15);
    @media screen and (max-width:1025px) {
        width: 100%;
        height: auto;
        margin: 20px 0;
        text-align: center;
    }
    @media screen and (max-width:600px){
        width: 100%;
        height: auto;
        margin: 20px 0;
        text-align: center;
    }
`
//Styled for form inheritance of rightside:
export const Styledform = styled.form`
    width: 550px;
    height: auto;
    border-radius: 10px;
    background-color: #fff;
    text-align: center;
    @media screen and (max-width:1025px) {
        width: auto;
    }
`
export const Inputbox = styled.input`
    width: 80%;
    height: 45px;
    padding-left:30px;
    margin: 0 auto;
    border-radius: 5px;
    border: 1px solid var(--Grayish-Blue);
    font-size: .95em;
    font-weight: var(--bold);
    color:var(--Dark-Blue);
    @media screen and (max-width:1025px) {
        width: 80%;
        margin: 10px auto;
    }
`
export const InputboxFirstname = styled(Inputbox).attrs({
    id:'firstName',
    name:'firstName',
    type:'text',
    placeholder:'First Name',
})`
    color:var(--Blue);
    margin:10px auto 0;
    justify-content:center;
`
export const InputboxLastname = styled(Inputbox).attrs({
    id:'lastName',
    name:'lastName',
    type:'text',
    placeholder:'Last Name',
})`
    color:var(--Blue);
    margin:10px auto 0;
`
export const InputboxEmail = styled(Inputbox).attrs({
    id:'email',
    name:'email',
    type:'email',
    placeholder:'Email Address',
})`
    color:var(--Blue);
    margin:10px auto 0;
`
export const InputboxPassword = styled(Inputbox).attrs({
    id:'password',
    name:'password',
    type:'password',
    placeholder:'Password',
})`
    color:var(--Blue);
    margin:10px auto 0;
`
export const Buttonclaimtrial = styled.button`
    width: 475px;
    height: 50px;
    padding-top:6px;
    margin: 20px auto 10px;
    background-color:var(--Green);
    border-radius: 5px;
    border-style:none;
    font-size: .95em;
    font-weight: var(--bold);
    color:#fff;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 4px 0 0 var(--Dark-Green);
    &:hover{
        background-color:var(--Dark-Blue);
        box-shadow: 0 4px 0 0 rgba(0,0,0,0.8);
    }
    &:active{
        color:var(--Dark-Blue);
        background-color:var(--Grayish-Blue);
        box-shadow: 0 4px 0 0 var(--Dark-Blue);
    }
    @media screen and (max-width:1025px) {
        width: 90%;
        margin: 10px auto;
    }
    @media screen and (max-width:600px){
        width: 90%;
        margin: 10px auto;
    }
`
export const Termservices = styled.div`
    margin: 0 auto;
    span{
        color: var(--Red);
        margin: auto;
    }
    @media screen and (max-width:600px){
        text-align: center;
    }
`
//Styled for error icon:
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin:10px auto 0;
`
export const IconError = styled.img`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 24px;
    right: 70px;
    color: var(--Red);
    @media screen and (max-width:1025px){
        right: 30px;
    }
    @media screen and (max-width:600px){
        right: 30px;
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    margin: 10px auto 0;
    font-size: .9rem;
    text-align: center;
    cursor:none;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 0 20px 5px;
    }
`
export const AttributionA = styled(Attribution)`
    h4{
        margin-top:0;
        color: hsl(228, 45%, 44%);
    }
`