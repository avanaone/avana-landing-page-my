export function Picture(props) {
  const { src, srcWebp } = props;

  return (
    <picture>
      <source srcSet={srcWebp} type='image/webp' />
      <source srcSet={src} type='image/jpeg' />
      <img src={src} alt='' />
    </picture>
  );
}

export default Picture;
