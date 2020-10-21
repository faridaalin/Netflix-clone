import React from "react";
import { ThumbnailStyled } from "./styles/ThumbnailStyled.style";
import noImage from "../../../images/noimage.png";

function Thumbnail({ movie }) {
    // const imageUrl = `${IMAGE_BASE_URL}${THUMBNAIL_SIZE}${item}`;

    return (
        <ThumbnailStyled>
            <img src={noImage} alt="title" />
        </ThumbnailStyled>

    );
}

export default Thumbnail;
