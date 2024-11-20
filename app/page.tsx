'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 1, name: 'Holiday', icon: '🏖️' },
  { id: 2, name: 'Fashion', icon: '👔' },
  { id: 3, name: 'Beauty', icon: '💄' },
  { id: 4, name: 'Travel', icon: '✈️' },
  { id: 5, name: 'Home', icon: '🏠' },
  { id: 6, name: 'Gifts', icon: '🎁' },
  { id: 7, name: 'Entertainment', icon: '🎬' },
  { id: 8, name: 'Web3', icon: '🌐' },
];

const newsItems = [
  {
    id: 1,
    title: 'How to earn crypto with Moso',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    category: 'Web3',
  },
  {
    id: 2,
    title: 'Getting started with digital assets',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80',
    category: 'Web3',
  },
  {
    id: 3,
    title: 'The future of decentralized finance',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80',
    category: 'Web3',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Moso Blog</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Rewards</Button>
            <Button variant="ghost">Airdrop</Button>
            <Button variant="default">Shop Now</Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#87CEEB] py-16">
        <div className="container mx-auto px-4">
          <div className="relative aspect-[21/9] bg-white rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 z-10">
                <h1 className="text-4xl font-bold">The CryptoBack Yard</h1>
                <p className="text-gray-600">Growing your rewards with Moso</p>
              </div>
            </div>
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {[...Array(totalSlides)].map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                  {category.icon}
                </div>
                <span className="text-sm">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              <span className="text-gray-400">Latest</span> News
            </h2>
            <Button variant="ghost">See All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="text-sm text-blue-500">{item.category}</span>
                  <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}