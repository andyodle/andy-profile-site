const ImageSVG = ({ width, height, fill, viewBox, pathData }) => {
    return (
        <svg
            width={width}
            height={height}
            fill={fill}
            viewBox={viewBox}
        >
            <path 
                d={pathData}
            />
        </svg>
    )
}

export default ImageSVG
