import Image from "next/image"

const ImageMdx = ({ src, alt, height, width }) => {
  const imageProps = {
    src,
    alt,
    height: 500,
    width: 750,
  }
  return <Image {...imageProps} style={{width: '100%',height: 'auto' }} />
}

export default ImageMdx
