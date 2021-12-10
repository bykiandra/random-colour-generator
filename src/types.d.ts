type Color = {
  hex: string,
  rgb: string,
  hsl: string,
  hsv: string,
  cmyk: string
}

type HandleClick = () => void

type CopyColor = (format: string) => void