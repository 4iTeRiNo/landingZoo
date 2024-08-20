export default function Video({
  className,
}: {
  className?: string;
}): React.ReactNode {
  return (
    <video autoPlay loop muted className={className}>
      <track src="../../captions.vtt" kind="captions" label="English" />
      <source src="dogBgPreview.webm" type="video/webm" />

      <source src="dogBgPreview.mp4" type="video/mp4" />
    </video>
  );
}
