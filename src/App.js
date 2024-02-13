import { useState } from "react";
import Post from "./Post";
import AddPost from "./AddPost";

function App() {
  const [postList, setPostList] = useState([
    {
      postNumber: 0,
      text: "This is some text to test everything",
    },
    {
      postNumber: 1,
      text: "This is some text to test a 2nd thing",
    },
    {
      postNumber: 2,
      text: "This is some text to test 3rd",
    },
  ]);

  const [postId, setPostId] = useState(3);

  const handleAddPost = (newText) => {
    let newPost = {
      postNumber: postId,
      text: newText,
    };
    //The '…' in front of the array is called the spread syntax.
    // It compiles to an iterable object that creates a comma separated list of the array contents.
    // To read more on this, refer to "Rest Parameters and
    //  Spread Syntax," at https://javascript.info/rest-parameters-spread
    setPostList((postList) => [...postList, newPost]);
    setPostId(postId + 1);
  };

  const handleDeletePost = (id) => {
    let updatedPostList = postList.filter((post) => post.postNumber !== id);

    setPostList(updatedPostList);
  };

  const posts = postList.map((post) => (
    <Post
      key={post.postNumber}
      text={post.text}
      id={post.postNumber}
      onDelete={handleDeletePost}
    />
  ));

  return (
    <div>
      {posts}
      <AddPost onAdd={handleAddPost} />
    </div>
  );
}

export default App;
