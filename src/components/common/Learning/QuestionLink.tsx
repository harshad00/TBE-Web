import Link from 'next/link';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FaRegCircle } from 'react-icons/fa';
import { QuestionLinkProps } from '@/interfaces';

const QuestionLink = ({
  href,
  questionId,
  title,
  question,
  isCompleted,
  currentQuestionId,
  frequency,
  handleQuestionClick,
}: QuestionLinkProps) => {
  let additionalClasses =
    currentQuestionId === questionId
      ? isCompleted
        ? 'text-dark font-semibold bg-green-200'
        : 'text-dark font-semibold bg-gray-200'
      : '';

  const iconColor = isCompleted ? 'text-green-500' : 'text-greyDark';

  if (frequency === 'Most Asked') {
    additionalClasses += ' border-l-4 border-primary';
  } else if (frequency === 'Asked Frequently') {
    additionalClasses += ' border-l-4 border-secondary';
  } else if (frequency === 'Asked Sometimes') {
    additionalClasses += ' border-l-4 border-greyDark';
  }

  return (
    <Link
      href={href}
      key={questionId}
      onClick={() => handleQuestionClick(question)}
      className={`flex items-center gap-1 w-full p-2 mb-1 rounded text-left pre-title hover:bg-gray-200 hover:text-contentLight ${additionalClasses}`}
    >
      <div className='flex-shrink-0'>
        {isCompleted ? (
          <IoIosCheckmarkCircle size={24} className={iconColor} />
        ) : (
          <FaRegCircle size={24} className={iconColor} />
        )}
      </div>
      {title}
    </Link>
  );
};

export default QuestionLink;
