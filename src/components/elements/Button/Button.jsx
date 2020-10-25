import React from 'react';
import FontAwesome from 'react-fontawesome';
import { StyledButton } from './style/StyledButton.style'

export default function Button({ children, ...props }) {
    return (
        <StyledButton><FontAwesome className={props.fontAwesoneClass} name={props.name} /> {children}</StyledButton>
    )
}
