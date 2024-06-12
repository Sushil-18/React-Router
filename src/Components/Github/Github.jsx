import { useLoaderData } from "react-router-dom";

const Github = () => {
  const userData = useLoaderData();

  return (
    <>
      {userData && (
        <div className="flex my-12 bg-stone-400 border rounded-lg">
          <div>
            <img
              className="m-4 border-0 rounded-md h-80"
              src={userData.avatar_url}
              alt="User Avatar"
            />
          </div>
          <div className=" flex flex-col gap-2 items-center mx-auto my-4 border-0 justify-self-center ">
            <p>Name: {userData.name}</p>
            <p>User Name: {userData.login}</p>
            <p>User Id: {userData.id}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Github;

export async function fetchGithubInfo() {
  try {
    const response = await fetch("https://api.github.com/users/sushil-18");
    if (!response.ok) {
      throw new Error(`Error : ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Fetching user data failed", error);
  }
}
