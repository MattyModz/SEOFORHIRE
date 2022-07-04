import Layout from "../src/componants/Layout/Layout";
import { useState } from "react";
import Image from "next/image";
import { YoutubeVideoPlayer } from "../src/componants/Podcast/youtubePlayer";
export default function Podcasts({ results }) {
  console.log(results);
  const [currentVideo, setCurrentVideo] = useState(results[0]);
  const [playing, setPlaying] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout Herotitle={"Podcasts"}>
      <div className="w-full">
        <h1 my={8} as="h1" textAlign="center">
          YouTube Video Gallery{" "}
        </h1>
        <div className="">
          <YoutubeVideoPlayer
            id={currentVideo.snippet.resourceId.videoId}
            playing={playing}
          />
        </div>

        <div className="grid cols-3">
          {results &&
            results.map((video) => {
              return (
                <div key={video.id}>
                  <Image
                    src={
                      video.snippet.thumbnails.maxres?.url ||
                      "https://via.placeholder.com/300"
                    }
                    layout="intrinsic"
                    width={1280}
                    height={720}
                    alt={video.snippet.title}
                  />
                  <h1 className="text-black">{video.snippet.title}</h1>
                  <div>
                    <button
                      className="text-black"
                      onClick={() => {
                        setCurrentVideo(video);
                        setPlaying(true);
                        scrollTop();
                      }}
                    >
                      Watch Now
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLddfICrcF15Erloc1JRHMghdqxONKmiDP&key=AIzaSyAII8CfbChK6ZZHAQH-r1hdorxVmPXB3kE&maxResults=15`;
  const response = await fetch(REQUEST_URL);
  const results = await response.json();

  return {
    props: { results: results.items },
    revalidate: 10,
  };
}
