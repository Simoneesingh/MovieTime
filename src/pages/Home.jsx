import Cards from "../Components/Cards";
import GenreSelector from "../Components/GenreSelector";
import HomeBanner from "../Components/HomeBanner";
import MyList from "../Components/MyList";
import NavBar from "../Components/NavBar";
import SubscribeBanner from "../Components/SubscribeBanner";
import requests from "../const/requests";
import { useList } from "../context/ListContext";

export default function Home() {
  const { list } = useList();
  return (
    <div className="overflow-x-hidden ">
      <NavBar />
      <HomeBanner />
      <div className="flex flex-col gap-4 mb-4">
        {list.length && <MyList />}
        <Cards url={requests.fetchTopRated} title="Top Rated" />
        <Cards url={requests.fetchTrending} title="Trending" />
        <SubscribeBanner />
        <GenreSelector />
      </div>
    </div>
  );
}
