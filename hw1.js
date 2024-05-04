import axios from "axios";

async function getData(id) {
	try {
		const [user, post] = await Promise.all([
			axios.get("https://jsonplaceholder.typicode.com/users/" + id),
			axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + id),
		]);
		const userData = user.data;
		const userPosts = post.data;

const combinedData = {
  ...userData, 
  posts: userPosts, 
};

console.log(combinedData);

	} catch (error) {
		console.error(error);
	}
}

export { getData };

