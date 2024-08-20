import useMounted from "@/shared/hooks/useMounted";

export default function Video({
  className,
}: {
  className?: string;
}): React.ReactNode {
  const mounted = useMounted();
  const isSafari = mounted
    ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    : false;
  if (!isSafari) {
    return (
      <video autoPlay loop muted playsInline className={className}>
        <track src="../../captions.vtt" kind="captions" label="English" />
        <source src="dogBgPreview.webm" type="video/webm" />
        <source src="dogBgPreview.mp4" type="video/mp4" />
      </video>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/img-redundant-alt
    <img
      className={className}
      src="/dogBgPreview.mp4"
      alt="Poster image for the video"
    />
  );
}
