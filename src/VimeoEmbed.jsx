/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react-dom/no-missing-iframe-sandbox */
// there are two eslint rules are being disabled because otherwise the video will not work
import style from './VimeoEmbed.module.scss';

function VimeoEmbed() {
  return (
    <div className={style.container}>
      <iframe
        src="https://player.vimeo.com/video/1006144894?autoplay=1&amp;loop=1&amp;autopause=0&amp;badge=0&amp;controls=0&amp;muted=1&amp;playsinline=1&amp;background=1"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default VimeoEmbed;
