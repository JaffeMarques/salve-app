import React, { FC } from "react";

type Props = {
    color?: string
}

export const Favicon: FC<Props> = ({ color = '#FFF' }) => {
    return (
        <React.Fragment>
            <link 
                rel="apple-touch-icon" 
                sizes="57x57"
                href={`/favicon/apple-icon-57x57.png`}
            />
        </React.Fragment>
    );
}