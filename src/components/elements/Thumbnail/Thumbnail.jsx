import React from "react";
//import { Link } from 'react-router-dom'
import { ThumbnailStyled } from "./styles/ThumbnailStyled.style";
import { IMAGE_BASE_URL, THUMBNAIL_SIZE } from "../../../config";

function Thumbnail({ discover, title }) {
    const imageURL = `${IMAGE_BASE_URL}${THUMBNAIL_SIZE}${discover}`;
    const noImage = `SOMEURL`;

    return (
        <ThumbnadivilStyled>
            <img src={imageURL} alt={title} />
        </ThumbnadilStyled>
    );
}

export default Thumbnail;
