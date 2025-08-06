import React from "react";

const QuestionCard = ({ user, question, reply, likes, replies, saves }) => (
  <div className="bg-white border rounded p-4 mb-4 shadow">
    <div className="flex items-center space-x-2 mb-2">
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      <div>
        <p className="text-sm font-medium">{user}</p>
        <p className="text-xs text-gray-500">5 days ago</p>
      </div>
    </div>
    <h3 className="font-semibold mb-2">Question: {question}</h3>
    <p className="text-sm mb-2">
      Explore how Ayurveda-based or traditional remedies can support mental well-being...
    </p>
    <div className="bg-green-50 p-3 rounded mb-2">
      <div className="flex items-center space-x-2 mb-1">
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <p className="text-sm font-medium">Dr. Mathew Adams</p>
      </div>
      <p className="text-sm">
        {reply}
      </p>
    </div>
    <div className="flex space-x-4 text-xs text-gray-600">
      <span>{likes} Likes</span>
      <span>{replies} Reply</span>
      <span>{saves} Saves</span>
    </div>
  </div>
);

export default QuestionCard;
