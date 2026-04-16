import CTVhistory from '../../components/Timeline/Timeline';

export const metadata = {
  title: "Timeline | Keen Keeper",
  description: "Friends and stats of the user",
};


const page = () => {
  return (
    <div>
      <CTVhistory></CTVhistory>
    </div>
  );
};

export default page;