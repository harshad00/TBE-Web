import Link from 'next/link';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FaRegCircle } from 'react-icons/fa';
import { ChapterLinkProps } from '@/interfaces';

const ChapterLink = ({
  href,
  chapterId,
  name,
  content,
  isCompleted,
  currentChapterId,
  handleChapterClick,
}: ChapterLinkProps) => {
  const additionalClasses =
    currentChapterId === chapterId
      ? isCompleted
        ? 'text-dark font-semibold bg-green-200'
        : 'text-dark font-semibold bg-gray-200'
      : '';

  const iconColor = isCompleted ? 'text-green-500' : 'text-greyDark';

  return (
    <Link
      href={href}
      key={chapterId}
      onClick={() => handleChapterClick(content)}
      className={`flex items-center gap-1 w-full p-2 rounded text-left pre-title hover:bg-gray-200 hover:text-contentLight ${additionalClasses}`}
    >
      {isCompleted ? (
        <IoIosCheckmarkCircle size={24} className={iconColor} />
      ) : (
        <FaRegCircle size={24} className={iconColor} />
      )}
      {name}
    </Link>
  );
};

export default ChapterLink;
