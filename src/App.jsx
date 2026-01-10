/*
  App.jsx - 애플리케이션의 메인 컴포넌트

  React 애플리케이션의 최상위 컴포넌트입니다.
  모든 다른 컴포넌트들이 이 안에서 렌더링됩니다.
*/

// BookList 컴포넌트를 가져옵니다
import BookList from './components/BookList';

function App() {
  /*
    이 컴포넌트는 매우 간단합니다.
    BookList 컴포넌트만 렌더링하면 됩니다.

    나중에 기능을 추가하려면:
    - 네비게이션 바를 추가할 수 있습니다
    - 검색 기능을 추가할 수 있습니다
    - 새 책을 추가하는 폼을 만들 수 있습니다
  */

  return (
    /*
      BookList 컴포넌트를 렌더링합니다
      BookList는 책 목록과 각 책의 카드들을 보여줍니다
    */
    <BookList />
  );
}

// App 컴포넌트를 내보냅니다
// main.jsx 파일에서 이 컴포넌트를 가져와서 화면에 렌더링합니다
export default App;
