const databaseModels = {
  PROJECT: 'Project',
  USER: 'User',
  COURSE: 'Course',
  COURSE_SECTION: 'CourseSection',
  COURSE_CHAPTER: 'CourseChapter',
  USER_COURSE: 'UserCourse',
  USER_CHAPTER: 'UserChapter',
};

const modelSelectParams = {
  coursePreview: '_id name slug coverImageURL description liveOn',
};

export { databaseModels, modelSelectParams };
