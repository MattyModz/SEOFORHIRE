import ReactPlayer from "react-player/youtube";

const YoutubeVideoPlayer = (props) => {
  const { id, playing } = props;
  const url = `https://www.youtube.com/watch?v=${id}`;
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        playing={playing}
        width="100%"
        height="100%"
      />
    </div>
  );
};
export { YoutubeVideoPlayer };
