import { PrimaryCard } from '@/components';

const Home = ({ course }: any) => {
  console.log(course);

  return (
    <>
      <PrimaryCard
        image='/images/frontend_camp_instructor_dp.png'
        imageAltText='js'
        title='Free Mentorship'
        content='"njk'
      />
    </>
  );
};

export const getServerSideProps = async ({
  query,
}: {
  query: { courseId: string; courseSlug: string };
}) => {
  try {
    if (!query.courseId) return { notFound: true };
    const response = await fetch(
      `${process.env.BASE_API_URL}/courses/${query.courseId}`
    );
    const data = await response.json();

    if (!data.status || !response.ok) return { notFound: true };

    return { props: { course: data.data } };
  } catch (error) {
    console.log(error);

    return { notFound: true };
  }
};

export default Home;
