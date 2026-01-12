import { useState } from 'react'
import './App.css'
import BookCard from './components/BookCard'

function App() {
  // 더미 데이터 (테스트용)
  const dummyBooks = [
    {
      id: 1,
      title: '클린 코드',
      author: '로버트 C. 마틴',
      status: '읽는 중',
      coverImage: null
    },
    {
      id: 2,
      title: '리팩터링',
      author: '마틴 파울러',
      status: '읽을 예정',
      coverImage: null
    },
    {
      id: 3,
      title: '이펙티브 자바',
      author: '조슈아 블로크',
      status: '완독',
      rating: 5,
      coverImage: null
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            My Book Shelf
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            총 {dummyBooks.length}권의 책
          </p>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* 책 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyBooks.map(book => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              status={book.status}
              rating={book.rating}
              coverImage={book.coverImage}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
