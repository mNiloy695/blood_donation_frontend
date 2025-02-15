import React from 'react';
import BlogPostCard from '../componets/BlogPostCard';  // Assuming BlogPostCard is another component
import DonationImage from '../assets/images/donation1.png' 
import DonationImage1 from '../assets/images/image3.jpg' 
import DonationImage2 from '../assets/images/image4.jpg' 
import DonationImage3 from '../assets/images/image5.jpg' 
import DonationImage4 from '../assets/images/image6.jpg' 
import DonationImage5 from '../assets/images/camping1.png' 
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Why Blood Donation is Important',
      description:
        'Blood donation saves lives and helps maintain a stable blood supply in hospitals. Learn about the benefits and importance of donating blood.',
      date: 'January 15, 2025',
      image:DonationImage, // Replace with your image URL
    },
    {
      id: 2,
      title: 'How to Prepare for a Blood Donation',
      description:
        'Donating blood is a safe process, but it’s important to prepare. Here’s a guide on how to get ready for your blood donation appointment.',
      date: 'January 10, 2025',
      image: DonationImage1,
    },
    {
      id: 3,
      title: 'The Process of Blood Donation',
      description:
        'Ever wondered what happens when you donate blood? Here’s a step-by-step breakdown of the blood donation process.',
      date: 'January 5, 2025',
      image: DonationImage2,
    },
    {
        id: 4,
        title: 'Who Can Donate Blood?',
        description:
          'Not everyone can donate blood. In this post, we explain the basic requirements for blood donation and who is eligible to donate.',
        date: 'February 1, 2025',
        image: DonationImage3,
      },
      {
        id: 5,
        title: 'The Benefits of Donating Blood',
        description:
          'Donating blood not only helps those in need but also has health benefits for the donor. Learn about the benefits of being a blood donor.',
        date: 'February 10, 2025',
        image: DonationImage4,
      },
      {
        id: 6,
        title: 'How Blood Donation Helps in Emergencies',
        description:
          'Blood donation plays a crucial role in emergency situations like accidents, surgeries, or natural disasters. This post explains its importance during emergencies.',
        date: 'February 15, 2025',
        image: DonationImage5,
      },
  ];

  return (
   <>
   <Navbar/>
   <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Blood Donation Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            description={post.description}
            date={post.date}
            image={post.image}
          />
        ))}
      </div>
    </div>
    <Footer/>
      </>
  );
};

export default BlogPage;
