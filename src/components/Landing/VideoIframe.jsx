/* eslint-disable react/prop-types */

function VideoIframe({ videoHash }) {
  const src = `https://www.aparat.com/video/video/embed/videohash/${videoHash}/vt/frame`;

  return (
    <div>
      <iframe
        src={src}
        allowFullScreen
        webkitallowfullscreen="false"
        mozallowfullscreen="false"
        className="w-full h-full absolute top-0 left-0"
      ></iframe>
    </div>
  );
}

export default VideoIframe;
