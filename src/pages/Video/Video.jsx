import React, { useState } from "react";
import BigVideo from "./BigVideo";
import SmallVideo from "./SmallVideo";
import SliderVideo from "./SliderVideo";
import "./Video.css";
import SmallVideo2 from "./SmallVideo2";

function Video() {
  let bigVideo = [
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg1.jpg",
      id: 1,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg2.jpg",
      id: 2,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg3.jpg",
      id: 3,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg4.jpg",
      id: 4,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg5.jpg",
      id: 5,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg6.jpg",
      id: 6,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg1.jpg",
      id: 7,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg2.jpg",
      id: 8,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg3.jpg",
      id: 9,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg4.jpg",
      id: 10,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg5.jpg",
      id: 11,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg6.jpg",
      id: 12,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg1.jpg",
      id: 13,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg2.jpg",
      id: 14,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg3.jpg",
      id: 15,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg4.jpg",
      id: 16,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg5.jpg",
      id: 17,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg6.jpg",
      id: 18,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg1.jpg",
      id: 19,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg2.jpg",
      id: 20,
    },
    {
      title:
        "‘শিক্ষিত নয়, সুশিক্ষিত করতে চাই, বাবা হিসেবে আপ্রাণ চেষ্টা করে যাব’",
      img: "BigVideoPost/bg3.jpg",
      id: 21,
    },
  ];
  const [videos] = useState(bigVideo);

  return (
    <main className="video_section">
      {/* big video top  */}
      <BigVideo videos={videos}></BigVideo>
      {/* small video 2nd section */}
      <SmallVideo videos={videos}></SmallVideo>
      {/* slider video 3rd section */}
      <SliderVideo videos={videos}></SliderVideo>
      {/* small video post 4th section */}
      <SmallVideo2 videos={videos}></SmallVideo2>
    </main>
  );
}

export default Video;
