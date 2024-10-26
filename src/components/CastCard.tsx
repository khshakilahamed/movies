import { CastMember } from "@/types/GlobalTypes";
import Image from "next/image";
import NotFoundImage from "./../assets/image-not-found.jpg"

const CastCard = ({ castMember }: { castMember: CastMember }) => {
  return (
    <div className="border border-gray-300 dark:border">
      <div>
        {castMember?.profile_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w200${castMember?.profile_path}`}
            width={100}
            height={80}
            alt={castMember?.name}
            className="w-full h-auto"
          />
        ) : (
          <Image
            src={NotFoundImage}
            width={100}
            height={80}
            alt={castMember?.name}
            className="w-full h-auto"
          />
        )}
        <h2>{castMember?.name}</h2>
      </div>
      <div>
        <p className="text-wrap">Character: {castMember?.character}</p>
      </div>
    </div>
  );
};

export default CastCard;
