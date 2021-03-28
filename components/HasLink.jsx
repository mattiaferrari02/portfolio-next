import Link from "next/link";

const HasLink = (props) => {
  return (
    <Link href={props.link}>
      <a>{props.children}</a>
    </Link>
  );
};


export default HasLink;
