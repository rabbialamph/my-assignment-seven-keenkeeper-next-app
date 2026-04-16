import Banner from "../components/Homepage/Banner";
import FriendsSection from "../components/Homepage/FriendsSection/FriendsSection";
import StatsCard from "../components/Homepage/StatsCard";

export const metadata = {
  title: "Home | Keen Keeper",
  description: "Friends and stats of the user",
};


export default function Home() {
  return (
     <div className="bg-base-200 p-5">
       <Banner />
       <StatsCard />
       <FriendsSection></FriendsSection>
     </div>
  );
}
