import StarsSVGs from "./StarsSVGs"

function ReviewCard({review}) {
  const rating = review.rating
  return (
    <div className="card shadow-none p-5 w-64 h-48 bg-white text-center rounded-none border-b-2">
      <h3 className="font-semibold">
        {review.author_name}
      </h3>
      <StarsSVGs rating={rating} />
      <blockquote className="mt-4 leading-5 text-start italic overflow-hidden text-ellipsis text-gray-700">
        {review.text}
      </blockquote>
    </div>
  )
}

export default ReviewCard