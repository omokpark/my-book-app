/*
  BookCard 컴포넌트

  이 컴포넌트는 책 한 권의 정보를 카드 형태로 보여줍니다.

  React에서 컴포넌트란?
  - 재사용 가능한 UI 조각입니다
  - 함수처럼 작동하며, 입력(props)을 받아서 화면(JSX)을 반환합니다
*/

// React의 기본 함수 컴포넌트를 만듭니다
// props는 부모 컴포넌트로부터 받는 데이터입니다
function BookCard(props) {
  // props에서 필요한 값들을 꺼내옵니다 (구조 분해 할당)
  // 이렇게 하면 props.title 대신 title만 써도 됩니다
  const { title, author, status } = props;

  // status 값에 따라 다른 색상을 보여줍니다
  // 읽는 중이면 파란색, 완독이면 초록색, 읽고 싶음이면 회색
  const getStatusColor = () => {
    if (status === '읽는 중') {
      return 'bg-blue-100 text-blue-800'; // 파란색 배경과 글자
    } else if (status === '완독') {
      return 'bg-green-100 text-green-800'; // 초록색 배경과 글자
    } else {
      return 'bg-gray-100 text-gray-800'; // 회색 배경과 글자
    }
  };

  // JSX를 반환합니다 (HTML처럼 보이지만 JavaScript입니다)
  return (
    /*
      Tailwind CSS 클래스 설명:
      - bg-white: 흰색 배경
      - rounded-lg: 둥근 모서리
      - shadow-md: 중간 크기의 그림자
      - p-6: 안쪽 여백 (padding)
      - hover:shadow-xl: 마우스를 올리면 큰 그림자
      - transition-shadow: 그림자 변화를 부드럽게
      - border: 테두리
      - border-gray-200: 회색 테두리
    */
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-200">
      {/* 책 제목 */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {/* 중괄호 {}는 JavaScript 변수를 JSX 안에서 사용할 때 씁니다 */}
        {title}
      </h3>

      {/* 저자 이름 */}
      <p className="text-gray-600 mb-4">
        {/* text-gray-600: 회색 글자, mb-4: 아래 여백 */}
        저자: {author}
      </p>

      {/* 독서 상태 뱃지 */}
      <div>
        {/*
          getStatusColor() 함수를 호출해서 상태에 맞는 색상 클래스를 가져옵니다
          px-3 py-1: 좌우 여백 3, 위아래 여백 1
          rounded-full: 완전히 둥근 모서리
          text-sm: 작은 글자 크기
          font-semibold: 약간 두꺼운 글자
          inline-block: 인라인 블록 요소
        */}
        <span className={`px-3 py-1 rounded-full text-sm font-semibold inline-block ${getStatusColor()}`}>
          {status}
        </span>
      </div>
    </div>
  );
}

// 다른 파일에서 이 컴포넌트를 사용할 수 있도록 내보냅니다
export default BookCard;
