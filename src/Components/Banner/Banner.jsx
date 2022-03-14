import React, { useState, useEffect } from 'react';

import BannerCursor from '../BannerCursor/BannerCursor';
import BannerHeader from '../BannerHeader/BannerHeader';
import './Banner.scss';

export default function Banner (props) {

    const [cursorX, setCursorX] = useState(null);
    const [cursorY, setCursorY] = useState(null);
    const [cursorOpacity, setCursorOpacity] = useState(0);
    const [bannerTiles, setBannerTiles] = useState([]);
    const [screenWidth, setScreenWidth] = useState(0);

    // Update state to show aura behind cursor
    function handleCursorMovement(e) {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
        setCursorOpacity(1);
    }

    // Update state to hide the cursor aura
    function handleHideCursor() {
        setCursorOpacity(0);
    }

    // Fill array with coordinates for each of the tile
    function populateBannerTileArray (screenWidth) {
        const tileSize = 50;
        const bannerHeight = 300;
        const newTileLayout = [];

        for (let i = 0; i < bannerHeight; i += tileSize) {
            for (let j = 0; j < screenWidth; j += tileSize) {
                newTileLayout.push([j, i]);
            }
        }
        setBannerTiles(newTileLayout);
    }

    function updateScreenWidth () {
        setScreenWidth(window.innerWidth);
    }

    useEffect(() => {
        updateScreenWidth();
    }, [])

    useEffect(() => {
        populateBannerTileArray(screenWidth);
    }, [screenWidth])

    

    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth !== screenWidth ? window.innerWidth : screenWidth);
    })

    return (
        <header 
            className="banner-container"
            onMouseMove={handleCursorMovement}
            onMouseLeave={handleHideCursor}
        >
            <BannerCursor x={cursorX} y={cursorY} opacity={cursorOpacity} />

            <div className="banner-highlight"></div>

            {
                bannerTiles.map((tile, index) => {
                    return (
                        <div
                            key={index}
                            className="banner-tile"
                            style={{
                                top: tile[1],
                                left: tile[0]
                            }}
                        ></div>
                    )
                })
            }

            <BannerHeader main={props.main} sub={props.sub} />
        </header>
    )
}