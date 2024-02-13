import { useRouter } from "next/router";

const NothingFound = () => {
  const { back, push } = useRouter();
  return (
    <div>
      <div>Not Found</div>
      <button className="underline text-blue-600" onClick={back}>
        back
      </button>
      <button className="underline text-blue-600" onClick={() => push("/")}>
        Home
      </button>
    </div>
  );
};
export default NothingFound;
