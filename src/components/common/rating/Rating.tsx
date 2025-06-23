"use client";
import { getBaseUrl } from "@/config/base-url";
import { useAppSelector } from "@/redux/hook";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { SlLike } from "react-icons/sl";

export default function RatingComponent() {
  const params = useParams();
  const id = params.id;
  const isAuthenticated = useAppSelector((state) => state.auth.user?.email);

  console.log("ratting tour packages", id);

  const [rating, setRating] = useState<number>(4.5);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Handle star click to set rating
  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  // Handle mouse enter on stars
  const handleStarHover = (hoveredStar: number) => {
    setHoveredRating(hoveredStar);
  };

  // Handle mouse leave on stars
  const handleStarLeave = () => {
    setHoveredRating(null);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    // console.log("Submitted rating:", rating)
    // console.log("Feedback:", feedback)

    const commentsData = {
      tourPackageId: id,
      rating: rating,
      comment: feedback,
    };

    console.log("Comments Data:", commentsData);

    const token = localStorage.getItem("token");

    fetch(`${getBaseUrl()}/feedbacks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(commentsData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Feedback submitted successfully:", data);
        toast.success("Feedback submitted successfully!!");
      })
      .catch((error) => {
        console.error("Error submitting feedback:", error);
        toast.error("Error submitting feedback!!");
      });

    // console.log(commentsData)
    // Show success message
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  // Determine which rating to display (hovered or selected)
  const displayRating = hoveredRating !== null ? hoveredRating : rating;

  return (
    <div className="w-full px-4 pb-4 pt-14 mt-5 bg-[#ffffff] rounded-lg">
      {/* Thumbs up with stars */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          {/* Thumbs up icon */}
          <div className="w-20 h-20 flex items-center justify-center">
            <div className="relative">
              {/* <div className="w-12 h-12 bg-blue-500 absolute bottom-0 left-0"></div> */}

              <div className="w-16 h-16 rounded-full relative flex justify-center items-center">
                <SlLike className="w-full h-full text-[#FFCC80] " />
              </div>
            </div>
          </div>

          {/* Stars around thumbs up */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full">
            <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
          </div>
          <div className="absolute top-1/4 right-0 translate-x-full -translate-y-1/2">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          </div>
          <div className="absolute bottom-1/4 right-0 translate-x-full translate-y-1/2">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          </div>
          <div className="absolute bottom-1/4 left-0 -translate-x-full translate-y-1/2">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          </div>
          <div className="absolute top-1/4 left-0 -translate-x-full -translate-y-1/2">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Overall Rating */}
      <div className="mb-4 ">
        <h2 className="text-[#475467] text-xl font-medium mb-2">
          Overall Rating
        </h2>
        <div
          className="flex justify-start gap-2 mb-6"
          onMouseLeave={handleStarLeave}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              className="relative cursor-pointer"
              onClick={() => handleRatingClick(star)}
              onMouseEnter={() => handleStarHover(star)}
            >
              <Star
                className={`w-10 h-10 ${
                  star <= displayRating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                } transition-colors duration-150`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Rate Your Experience */}
      <div className="mb-6">
        <h3 className="text-[#475467] text-lg font-medium mb-2">
          Rate Your Experience
        </h3>
        <div className="border border-gray-300 rounded-lg p-4">
          <textarea
            className="w-full resize-none outline-none text-[#475467]"
            rows={3}
            placeholder="We appreciate your feedback! Please rate the following aspects of your tour experience."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
      </div>

      {/* Share Button */}
      {/* <button
        className={`w-full ${
          submitted ? "bg-green-500 hover:bg-green-600" : "bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] cursor-pointer"
        } text-white font-medium py-3 px-4 rounded-lg transition-colors`}
        onClick={handleSubmit}
        disabled={submitted}
      >
        {submitted ? "Thanks for sharing!" : "Share your best Moments!"}
      </button> */}

      <button
        className={`w-full ${
          submitted
            ? "bg-green-500 hover:bg-green-600"
            : isAuthenticated
            ? "bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] cursor-pointer"
            : "bg-gray-400 cursor-not-allowed"
        } text-white font-medium py-3 px-4 rounded-lg transition-colors`}
        onClick={isAuthenticated && !submitted ? handleSubmit : undefined}
        disabled={submitted || !isAuthenticated}
      >
        {submitted
          ? "Thanks for sharing!"
          : isAuthenticated
          ? "Share your best Moments!"
          : "Please login to share"}
      </button>
    </div>
  );
}
