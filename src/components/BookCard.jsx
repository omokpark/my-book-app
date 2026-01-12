/**
 * BookCard 컴포넌트
 *
 * 개별 책을 카드 형태로 표시하는 컴포넌트입니다.
 *
 * Props:
 * - title: 책 제목 (필수)
 * - author: 저자 (선택)
 * - coverImage: 표지 이미지 URL (선택)
 * - status: 책 상태 - '읽을 예정', '읽는 중', '완독' (기본: '읽을 예정')
 * - rating: 별점 0-5 (완독 시에만 표시)
 */

function BookCard({
  title = '제목 없음',
  author = '저자 미상',
  coverImage,
  status = '읽을 예정',
  rating = 0
}) {

  // 상태별 스타일 결정
  const getStatusStyle = () => {
    switch(status) {
      case '읽을 예정':
        return 'opacity-60 bg-gray-100';
      case '읽는 중':
        return 'bg-yellow-50 border-2 border-yellow-400';
      case '완독':
        return 'bg-white border-2 border-green-400';
      default:
        return 'bg-white';
    }
  };

  // 상태 뱃지 색상
  const getStatusBadgeColor = () => {
    switch(status) {
      case '읽을 예정':
        return 'bg-gray-400 text-white';
      case '읽는 중':
        return 'bg-yellow-500 text-white';
      case '완독':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-400 text-white';
    }
  };

  return (
    <div className={`
      rounded-lg shadow-md p-4
      transition-all duration-200
      hover:shadow-lg hover:scale-105
      ${getStatusStyle()}
    `}>

      {/* 표지 이미지 */}
      <div className="mb-3">
        {coverImage ? (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-48 object-cover rounded"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 rounded flex items-center justify-center">
            <span className="text-gray-600 text-4xl">📚</span>
          </div>
        )}
      </div>

      {/* 상태 뱃지 */}
      <div className="mb-2">
        <span className={`
          text-xs px-2 py-1 rounded-full
          ${getStatusBadgeColor()}
        `}>
          {status}
        </span>
      </div>

      {/* 제목 */}
      <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">
        {title}
      </h3>

      {/* 저자 */}
      <p className="text-sm text-gray-600 mb-2">
        {author}
      </p>

      {/* 별점 (완독일 때만 표시) */}
      {status === '완독' && rating > 0 && (
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-yellow-500">
              {index < rating ? '★' : '☆'}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookCard;
