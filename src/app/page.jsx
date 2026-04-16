import Banner from "../components/Homepage/Banner.jsx";
import FriendsSection from "../components/Homepage/FriendSection/FriendsSection.jsx";
import StatsCard from "../components/Homepage/StatsCard.jsx";


export default function Home() {
  return (
     <div className="bg-base-200 p-5">
       <Banner />
       <StatsCard />
       <FriendsSection></FriendsSection>
     </div>
  );
}
