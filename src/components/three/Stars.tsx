import React, { useState } from "react";

export const Stars: React.FC = () => {
  const [reviewScore, setReviewScore] = useState<number | null>(null);
  // number | null: Đây là kiểu dữ liệu của reviewScore. Trong trường hợp này, reviewScore có thể là một số (number) hoặc null nếu không có điểm đánh giá nào được chọn.
  // (null): Đây là giá trị khởi tạo của state. Ban đầu, reviewScore được khởi tạo với giá trị null, có nghĩa là không có sao nào được chọn.

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer border-[#EEF2FF] mr-2 inline-flex items-center justify-center text-gray-400 ${
            reviewScore && reviewScore >= star ? "text-yellow-400" : ""
          }`}
          onClick={() => setReviewScore(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};
