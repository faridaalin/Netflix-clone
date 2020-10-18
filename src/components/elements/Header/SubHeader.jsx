import React from 'react'
import { StyledSubHeader } from './style/StyledSubHeader.style'

function SubHeader({ children }) {
    return (
        <StyledSubHeader>
            {children}
        </StyledSubHeader>
    )
}

export default SubHeader
