import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RatingStars = ({ rating, onClick }) => {
  return (
    <div className="flex flex-row hover:cursor-pointer ">
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)}>
          {rating > i ? (
            <AiFillStar fontSize="35px " />
          ) : (
            <AiOutlineStar fontSize="25px" />
          )}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;