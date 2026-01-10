/*
  BookList 컴포넌트

  이 컴포넌트는 여러 개의 책 카드를 보여줍니다.
  더미 데이터(테스트용 가짜 데이터)를 사용해서 BookCard를 렌더링합니다.
*/

// BookCard 컴포넌트를 가져옵니다 (import)
import BookCard from './BookCard';

function BookList() {
  /*
    더미 데이터 (Dummy Data)
    - 실제 데이터베이스나 API가 없을 때 테스트용으로 사용하는 가짜 데이터입니다
    - 배열(Array) 안에 객체(Object)들이 들어있습니다
    - 각 객체는 id, title, author, status 속성을 가집니다
  */
  const books = [
    {
      id: 1, // 각 책을 구별하는 고유 번호
      title: '클린 코드', // 책 제목
      author: '로버트 C. 마틴', // 저자 이름
      status: '읽는 중' // 독서 상태
    },
    {
      id: 2,
      title: '리팩터링',
      author: '마틴 파울러',
      status: '완독'
    },
    {
      id: 3,
      title: '이펙티브 자바',
      author: '조슈아 블로크',
      status: '읽고 싶음'
    }
  ];

  // JSX를 반환합니다
  return (
    /*
      컨테이너 div
      - max-w-6xl: 최대 너비 제한
      - mx-auto: 가로 중앙 정렬 (margin-x: auto)
      - p-8: 안쪽 여백
      - bg-gray-50: 연한 회색 배경
      - min-h-screen: 최소 높이를 화면 전체로
    */
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* 페이지 제목 */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          {/* text-4xl: 큰 글자, font-bold: 굵은 글자, mb-8: 아래 여백 */}
          📚 나의 책 목록
        </h1>

        {/*
          그리드 레이아웃으로 카드들을 배치합니다
          - grid: CSS Grid 사용
          - grid-cols-1: 모바일에서는 한 줄에 1개
          - md:grid-cols-2: 중간 화면에서는 한 줄에 2개
          - lg:grid-cols-3: 큰 화면에서는 한 줄에 3개
          - gap-6: 카드들 사이의 간격
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*
            배열.map() 함수 설명:
            - 배열의 각 요소를 순회하면서 새로운 요소를 만듭니다
            - books 배열의 각 book을 BookCard 컴포넌트로 변환합니다

            (book) => { ... } 는 화살표 함수입니다
            - book은 배열의 각 요소를 의미합니다
            - 각 book마다 BookCard 컴포넌트를 하나씩 만듭니다
          */}
          {books.map((book) => (
            /*
              key 속성이 필요한 이유:
              - React가 어떤 카드가 변경되었는지 빠르게 찾기 위해서입니다
              - key는 고유한 값이어야 합니다 (보통 id를 사용)

              BookCard 컴포넌트에 props를 전달합니다:
              - title={book.title}: book의 title을 BookCard의 title prop으로 전달
              - author={book.author}: book의 author를 BookCard의 author prop으로 전달
              - status={book.status}: book의 status를 BookCard의 status prop으로 전달
            */
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              status={book.status}
            />
          ))}
        </div>

        {/* 책 개수 표시 */}
        <div className="mt-8 text-center text-gray-600">
          {/* books.length는 배열의 길이(개수)를 반환합니다 */}
          총 {books.length}권의 책
        </div>
      </div>
    </div>
  );
}

// 다른 파일에서 이 컴포넌트를 사용할 수 있도록 내보냅니다
export default BookList;
