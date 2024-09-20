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
        className="w-[100%] h-[100%] absolute right-0"
      ></iframe>
    </div>
  );
}

export default VideoIframe;
