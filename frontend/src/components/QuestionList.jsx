
import { Heart, MessageCircle, Bookmark } from "lucide-react"
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import AskQuestionModal from "../components/AskQuestionModal";
const Forum = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
    
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 bg-white border border-gray-200 rounded-lg">
      {/* Tabs */}
      <div className="flex border-b">
        <button className="flex-1 py-3 text-green-700 font-semibold border-b-2 border-green-700">
          Questions
        </button>
        <button className="flex-1 py-3 text-gray-400 font-semibold">
          Thoughts
        </button>
      </div>

      {/* Ask Question */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src="/q3.png"
            alt="Priya Singh"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium">Priya Singh</span>
        </div>
        <button
  onClick={() => setIsModalOpen(true)}
  className="bg-green-700 text-white px-4 py-2 rounded"
>
  Ask Question
</button>

      </div>
      {/* Modal */}
      {isModalOpen && (
        <AskQuestionModal onClose={() => setIsModalOpen(false)} />
      )}

      {/* Question */}
      <div className="border-t">
        <div className="flex items-start gap-3 p-4">
          <img
            src="/q1.png"
            alt="Anonymous"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Anonymous</span>
              <span className="text-xs text-gray-500">5 days ago</span>
            </div>
            <p className="mt-2 font-semibold">
              Question: Can Ayurveda help with stress and mental health issues?
            </p>
            <p className="mt-1 text-gray-700 text-sm">
              Explores the potential benefits of traditional Ayurvedic practices in
              managing stress and improving mental well-being, examining holistic
              approaches like herbal remedies, meditation, and lifestyle adjustments.
            </p>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span className="text-gray-500">Replies • 10 reply</span>
              <button className="text-green-700 font-medium">
                View All 9 Replies
              </button>
            </div>

            {/* Answer */}
            <div className="flex items-start gap-3 mt-4 bg-green-50 p-3 rounded">
              <img
                src="/q2.jpg"
                alt="Dr. Mathew Adams"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Dr. Mathew Adams</span>
                  <span className="text-xs text-gray-500">5 days ago</span>
                </div>
                <p className="mt-1 text-sm">
                  <span className="font-semibold">Ans.</span> Ayurveda offers holistic
                  approaches like herbal remedies, lifestyle adjustments, and
                  relaxation techniques to alleviate stress and support mental
                  well-being. It emphasizes personalized care and natural methods to
                  address the root causes of mental health challenges, promoting
                  balance and harmony in mind and body.
                </p>
                {/* Answer footer */}
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3.172 10l5.586 5.586a2 2 0 002.828 0L17.828 10a2 2 0 000-2.828l-1.414-1.414a2 2 0 00-2.828 0L10 8.586 6.414 5a2 2 0 00-2.828 0L3.172 6.414a2 2 0 000 2.828z" />
                    </svg>
                    <span>2</span>
                  </div>
                  <span>Q 2</span>
                </div>
              </div>
            </div>

            {/* Post footer */}
            <div className="flex items-center justify-between mt-4 border-t pt-3 text-sm text-gray-600">
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-1">
      <Heart size={16} className="text-gray-500" />
      <span>23 Likes</span>
    </div>
    <div className="flex items-center gap-1">
      <MessageCircle size={16} className="text-gray-500" />
      <span>10 Reply</span>
    </div>
  </div>
  <div className="flex items-center gap-1">
    <Bookmark size={16} className="text-gray-500" />
    <span>3 Saves</span>
  </div>
</div>
          </div>
        </div>
      </div>
      {/* Question */}
      <div className="border-t">
        <div className="flex items-start gap-3 p-4">
          <img
            src="/q1.png"
            alt="Anonymous"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Anonymous</span>
              <span className="text-xs text-gray-500">5 days ago</span>
            </div>
            <p className="mt-2 font-semibold">
              Question: Can Ayurveda help with stress and mental health issues?
            </p>
            <p className="mt-1 text-gray-700 text-sm">
              Explores the potential benefits of traditional Ayurvedic practices in
              managing stress and improving mental well-being, examining holistic
              approaches like herbal remedies, meditation, and lifestyle adjustments.
            </p>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span className="text-gray-500">Replies • 10 reply</span>
              <button className="text-green-700 font-medium">
                View All 9 Replies
              </button>
            </div>

            {/* Answer */}
            <div className="flex items-start gap-3 mt-4 bg-green-50 p-3 rounded">
              <img
                src="/q2.jpg"
                alt="Dr. Mathew Adams"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Dr. Mathew Adams</span>
                  <span className="text-xs text-gray-500">5 days ago</span>
                </div>
                <p className="mt-1 text-sm">
                  <span className="font-semibold">Ans.</span> Ayurveda offers holistic
                  approaches like herbal remedies, lifestyle adjustments, and
                  relaxation techniques to alleviate stress and support mental
                  well-being. It emphasizes personalized care and natural methods to
                  address the root causes of mental health challenges, promoting
                  balance and harmony in mind and body.
                </p>
                {/* Answer footer */}
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3.172 10l5.586 5.586a2 2 0 002.828 0L17.828 10a2 2 0 000-2.828l-1.414-1.414a2 2 0 00-2.828 0L10 8.586 6.414 5a2 2 0 00-2.828 0L3.172 6.414a2 2 0 000 2.828z" />
                    </svg>
                    <span>2</span>
                  </div>
                  <span>Q 2</span>
                </div>
              </div>
            </div>

            {/* Post footer */}
            <div className="flex items-center justify-between mt-4 border-t pt-3 text-sm text-gray-600">
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-1">
      <Heart size={16} className="text-gray-500" />
      <span>23 Likes</span>
    </div>
    <div className="flex items-center gap-1">
      <MessageCircle size={16} className="text-gray-500" />
      <span>10 Reply</span>
    </div>
  </div>
  <div className="flex items-center gap-1">
    <Bookmark size={16} className="text-gray-500" />
    <span>3 Saves</span>
  </div>
</div>
          </div>
        </div>
      </div>
      {/* Question */}
      <div className="border-t">
        <div className="flex items-start gap-3 p-4">
          <img
            src="/q1.png"
            alt="Anonymous"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Anonymous</span>
              <span className="text-xs text-gray-500">5 days ago</span>
            </div>
            <p className="mt-2 font-semibold">
              Question: Can Ayurveda help with stress and mental health issues?
            </p>
            <p className="mt-1 text-gray-700 text-sm">
              Explores the potential benefits of traditional Ayurvedic practices in
              managing stress and improving mental well-being, examining holistic
              approaches like herbal remedies, meditation, and lifestyle adjustments.
            </p>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span className="text-gray-500">Replies • 10 reply</span>
              <button className="text-green-700 font-medium">
                View All 9 Replies
              </button>
            </div>

            {/* Answer */}
            <div className="flex items-start gap-3 mt-4 bg-green-50 p-3 rounded">
              <img
                src="/q2.jpg"
                alt="Dr. Mathew Adams"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Dr. Mathew Adams</span>
                  <span className="text-xs text-gray-500">5 days ago</span>
                </div>
                <p className="mt-1 text-sm">
                  <span className="font-semibold">Ans.</span> Ayurveda offers holistic
                  approaches like herbal remedies, lifestyle adjustments, and
                  relaxation techniques to alleviate stress and support mental
                  well-being. It emphasizes personalized care and natural methods to
                  address the root causes of mental health challenges, promoting
                  balance and harmony in mind and body.
                </p>
                {/* Answer footer */}
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3.172 10l5.586 5.586a2 2 0 002.828 0L17.828 10a2 2 0 000-2.828l-1.414-1.414a2 2 0 00-2.828 0L10 8.586 6.414 5a2 2 0 00-2.828 0L3.172 6.414a2 2 0 000 2.828z" />
                    </svg>
                    <span>2</span>
                  </div>
                  <span>Q 2</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 border-t pt-3 text-sm text-gray-600">
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-1">
      <Heart size={16} className="text-gray-500" />
      <span>23 Likes</span>
    </div>
    <div className="flex items-center gap-1">
      <MessageCircle size={16} className="text-gray-500" />
      <span>10 Reply</span>
    </div>
  </div>
  <div className="flex items-center gap-1">
    <Bookmark size={16} className="text-gray-500" />
    <span>3 Saves</span>
  </div>
</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 cursor-pointer">
  <span className="text-base font-semibold text-gray-700">Load More</span>
  <ChevronDown size={24} className="text-gray-600 mt-1" />
</div>

      
    </div>
  );
};

export default Forum;
