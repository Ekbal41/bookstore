import { StarIcon } from "@heroicons/react/24/solid";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const starValue = rating - i;
          let starClass = "text-gray-300";

          if (starValue >= 1) {
            starClass = "text-yellow-500";
          } else if (starValue > 0.66) {
            starClass = "text-yellow-500";
          } else if (starValue > 0.33) {
            starClass = "text-yellow-500";
          }

          return <StarIcon key={i} className={`h-5 w-5 ${starClass}`} />;
        })}
    </div>
  );
};

export default StarRating;
