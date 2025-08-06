// components/AskQuestionModal.jsx
import React from "react";
import { X } from "lucide-react";

const AskQuestionModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-lg p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-semibold mb-4">Ask Question</h2>

        <div className="flex items-center gap-3 mb-4">
          <img
            src="/q3.png"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-green-700">Priya Singh</p>
            <select className="border text-sm px-2 py-1 rounded">
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Add Question <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Ask your question here"
            className="w-full border rounded px-3 py-2"
          />
          <p className="text-xs text-gray-400 mt-1">.max 50 words</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Add Description</label>
          <textarea
            placeholder="Add your description here"
            rows={3}
            className="w-full border rounded px-3 py-2"
          />
          <p className="text-xs text-gray-400 mt-1">.max 70 words</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Attachments</label>
          <input
            type="file"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button className="bg-green-700 text-white px-4 py-2 rounded w-full">
          Ask
        </button>
      </div>
    </div>
  );
};

export default AskQuestionModal;
