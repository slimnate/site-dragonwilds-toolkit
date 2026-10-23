type Props = {
  src: string;
  alt: string;
  title: string;
};

export function Shot({ src, alt, title }: Props) {
  return (
    <figure className='window'>
      <figcaption className='window-bar'>
        <span className='window-mark' aria-hidden='true' />
        {title}
      </figcaption>
      <img src={src} alt={alt} />
    </figure>
  );
}
