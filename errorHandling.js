// ❌
// const getUserInfo = async () => {
//     try {
//       const userInfo = await fetch('/api/getUserInfo')
//     } catch (err) {

//     }
//   }

// ✅
const getUserInfo = async () => {
	try {
		const userInfo = await fetch('/api/getUserInfo');
	} catch (err) {
		Toast(err.message);
	}
};
