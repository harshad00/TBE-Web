const databaseModels = {
  PROJECT: 'Project',
  USER: 'User',
  COURSE: 'Course',
  INTERVIEW_SHEET: 'InterviewSheet',
  COURSE_SECTION: 'CourseSection',
  COURSE_CHAPTER: 'CourseChapter',
  USER_COURSE: 'UserCourse',
};

const modelSelectParams = {
  coursePreview: '_id name slug coverImageURL description liveOn',
};

export { databaseModels, modelSelectParams };
