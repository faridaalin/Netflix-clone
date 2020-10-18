import React from 'react'
import { StyledFooter } from './style/Footer.style'

function Footer() {
    const today = new Date();
    const year = today.getFullYear(today)
    return (
        <StyledFooter>
            <section>{year} &copy; created by Farida Alin</section>
        </StyledFooter>
    )
}

export default Footer
