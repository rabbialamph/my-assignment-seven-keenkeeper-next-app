import Banner from "@/components/Homepage/Banner";
import FriendsSection from "@/components/Homepage/FriendSection/FriendsSection";
import StatsCard from "@/components/Homepage/StatsCard";
import Image from "next/image";

export default function Home() {
  return (
     <div className="bg-base-200 p-5">
       <Banner />
       <StatsCard />
       <FriendsSection></FriendsSection>
     </div>
  );
}
