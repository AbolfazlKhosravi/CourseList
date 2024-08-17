const CourseCard = ({ course }) => {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={course.imageUrl} alt={course.title} />
      </div>
      <div className="course-item__detail">
        <CourseItemBody course={course} />
        <CourseItemFooter course={course} />
      </div>
    </div>
  );
};

function CourseItemBody({ course }) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{course.title}</p>
        <p className="desc">{course.description}</p>
      </div>
      <span className="rate">{course.rate}🌟</span>
    </div>
  );
}
function CourseItemFooter({ course }) {
  const startedAt = new Date(course.start).toLocaleDateString("en-us", {
    year: "numeric",
    day: "numeric",
    month: "short",
  });
  return (
    <div className="course-item__footer">
      <div className="tags">
        {course.tags.map((tag) => {
          return (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          );
        })}
      </div>
      <div className="caption">
        <div className="date">{startedAt}</div>
        <span
          className={`badge ${
            course.status === "Active"
              ? "badge--primary"
              : course.status === "Upcoming"
              ? "badge--danger"
              : "badge--secondary"
          } `}
        >
          {course.status}
        </span>
      </div>
    </div>
  );
}
export default CourseCard;
