import React from 'react'
import { SignupForm } from './Signupform';
import { Container } from './styled/Container.styled'
import {
    Styledintrosignup,
    Leftside,
    Rightside,
    Tryit7days,
    Attribution,
    AttributionA,
} from './styled/Introsignup.styled';

export const Introsignupform = () => {
  return (
    <Container>
        <Styledintrosignup>
            <Leftside>
                <h1>
                    Learn to code by watching others
                </h1>
                <h2>
                    See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                    but understanding how developers think is invaluable.
                </h2>
            </Leftside>
            <Rightside>
                <Tryit7days>
                    <h3>
                        <span>Try it free 7 days</span>&nbsp; then $20/mo. thereafter
                    </h3>
                </Tryit7days>
                <SignupForm />
            </Rightside>
        </Styledintrosignup>
        <Attribution>
            <AttributionA>
                <h4>Challenge by<a href="https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1/" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Intro Sign Up Form.</a></h4>
            </AttributionA>
            <AttributionA>
                <h4>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></h4>
            </AttributionA>
        </Attribution>
    </Container>
  )
}
