import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
import Posts from "./Posts";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
const fetchPost=async()=>{
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
return res.json();
}
function App() {
  const postPromise=fetchPost();
  const friendsPromise=fetchFriends();
  function handleClick() {
    alert("Button clicked");
  }
  const handleAdd = (x) => {
    alert(`Added ${x} sum is ${x + 5}`);
  };
  return (
    <>
      <Suspense fallback={<h3>Loading Users..</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Suspense fallback={<h3>Post are loading..</h3>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense>

      <Suspense fallback={<h3>Friends data loading..</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>

      </Suspense>

      <h1>Hi this is react concept.</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      <br /> <br />
      <button className="btn" onClick={handleClick}>
        Click here
      </button>
      <button onClick={() => alert("another button is clicked")}>
        Click me
      </button>
      <button onClick={() => handleAdd(7)}>Add</button>
    </>
  );
}

export default App;
