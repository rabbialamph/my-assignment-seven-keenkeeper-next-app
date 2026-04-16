import Chart from "@/components/Chart/Chart";

export const metadata = {
  title: "Friendship Analytics | Keen Keeper",
  description: "Friends and stats of the user",
};

const statPage = () => {
  return (
    <div>
      <Chart></Chart>
    </div>
  );
};

export default statPage;