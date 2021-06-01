import Download from "./Download";
import Video from "./Video";
import Intro from "./Intro";
import Features from "./Features";

function Home() {
  return (
    <div className="pt-5">
      <Intro />
      <Video />
      <Features />
      <Download />
    </div>
  );
}

export default Home;
