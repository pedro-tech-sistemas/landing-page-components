import { ImgHTMLAttributes } from "react";

export interface ImageProps extends ImgHTMLAttributes<HTMLImage> {
  width?: string;
  height?: string;
  url
}

export default function Image({}: ImageProps) {
  return (
    <img src={} width={} height={}
  )
}