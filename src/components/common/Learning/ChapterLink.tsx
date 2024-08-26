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
    currentChapterId === chapterId ? 'text-dark font-semibold bg-gray-200' : '';

  return (
    <Link
      href={href}
      key={chapterId}
      className={`flex items-center gap-1 w-full p-2 rounded text-left pre-title text-greyDark hover:bg-gray-200 hover:text-contentLight ${additionalClasses}`}
    >
      {isCompleted ? (
        <IoIosCheckmarkCircle size={24} />
      ) : (
        <FaRegCircle size={24} />
      )}
      <div onClick={() => handleChapterClick(content)}>{name}</div>
    </Link>
  );
};

export default ChapterLink;
