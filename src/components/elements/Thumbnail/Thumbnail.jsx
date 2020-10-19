import React from "react";
import { ThumbnailStyled } from "./styles/ThumbnailStyled.style";
import { IMAGE_BASE_URL, THUMBNAIL_SIZE } from "../../../config";
import noImage from "../../../images/noimage.png";

function Thumbnail({ item, title }) {
    const imageUrl = `${IMAGE_BASE_URL}${THUMBNAIL_SIZE}${item}`;

    return (
        <ThumbnailStyled>
            <img src={imageUrl ? imageUrl : noImage} alt={title} />
        </ThumbnailStyled>

    );
}

export default Thumbnail;
