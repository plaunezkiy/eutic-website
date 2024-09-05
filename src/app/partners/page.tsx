import React from "react";

const SponsorCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="relative w-full md:w-52 h-48 border-2 border-yellow-400 rounded-lg overflow-hidden shadow hover:shadow-lg duration-300">
      <img
        className="w-full h-full object-contain"
        src={image}
        alt={`${name}_logo`}
      />
      <p className="absolute top-2 left-2 bg-gray-700/75 text-white px-2 py-1 rounded shadow-lg">
        {name}
      </p>
    </div>
  );
};

const PartnersPage = () => {
  const currentSponsors = [
    { name: "", image: "" },
    { name: "", image: "" },
  ];
  const prevSponsors = [
    {
      name: "Amplify Trading",
      image:
        "https://pbs.twimg.com/profile_images/1354092234803716097/TdFrqde3_400x400.jpg",
    },
    {
      name: "Barclays",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBVinVXDiU6RX7S3WI7Y8GfE5ajR3tUODdeQ&s",
    },
    {
      name: "BlackRock",
      image:
        "https://1000logos.net/wp-content/uploads/2021/09/BlackRock-logo.png",
    },
    {
      name: "BNP Paribas",
      image:
        "https://www.muhasebenews.com/wp-content/uploads/2018/01/bnp-paribas-logo.png",
    },
    {
      name: "Citi",
      image:
        "https://pentagram-production.imgix.net/wp/592ca89f19a1d/ps-citibank-01.jpg?rect=0%2C177%2C960%2C600&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548",
    },
    {
      name: "Credit Suisse",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-gQtfeiQ4x2Qj9_vTFuQOIi5t061oe_9RDg&s",
    },
    {
      name: "Deutsche Bank",
      image: "https://www.lsta.org/app/uploads/2019/05/Deutsche-Bank.jpg",
    },
    {
      name: "The Economist",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpxujN4fNbMgeOnuZoH_U0ykxT8pDjcgl1Q&s",
    },
    {
      name: "Goldman Sachs",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/2048px-Goldman_Sachs.svg.png",
    },
    {
      name: "J.P. Morgan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvYOxTe95dysK36fMUNxXUXzlu7PczhE5d3A&s",
    },
    {
      name: "Morgan Stanley",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Morgan_Stanley_Logo_1.svg/2560px-Morgan_Stanley_Logo_1.svg.png",
    },
    {
      name: "PwC",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGbwuaYZ07ALnJlOps4zSMD7jqU6aYw6_GA&s",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl font-medium text-center">
        EUTIC cordially thanks all current and previous sponsors for the help
        and support they have provided us with. We are proud to be sponsored by
        some of the biggest players in the industry.
        <br />
        We would not be where we are without you!
      </p>
      {/* current */}
      <p className="text-2xl font-medium">Current Sponsors:</p>
      <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-4">
        {prevSponsors.map((sponsor, idx) => (
          <SponsorCard name={sponsor.name} image={sponsor.image} />
        ))}
      </div>
      {/* previous */}
      <p>Previous sponsors</p>
    </div>
  );
};

export default PartnersPage;
