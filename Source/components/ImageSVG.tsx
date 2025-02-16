interface ImageSVGProps{
    width: number, 
    height: number, 
    fill: string, 
    viewBox: string, 
    pathData: string,
}

const ImageSVG: React.FC<ImageSVGProps> = ({ width, height, fill, viewBox, pathData }) => {
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
