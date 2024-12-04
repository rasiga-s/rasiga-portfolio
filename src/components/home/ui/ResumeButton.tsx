import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[10rem]"
      href='/rasiga-resume.pdf'
      target="_blank"
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
