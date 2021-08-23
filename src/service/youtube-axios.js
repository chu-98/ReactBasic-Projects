// // npm, yarn을 쓰기 때문에 라이브러리를 추가하는 것이 이렇게 간단
// import axios from "axios";

// class Youtube {
//   constructor(key) {
//     this.youtube = axios.create({
//       baseURL: "https://youtube.googleapis.com/youtube/v3",
//       params: { key: key },
//     });
//   }

//   async mostPopular() {
//     const response = await this.youtube.get("videos", {
//       params: {
//         part: "snippet",
//         chart: "mostPopular",
//         maxResults: 25,
//       },
//     });
//     return response.data.items;
//   }

//   async search(query) {
//     const response = await fetch(
//       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
//       this.getRequestOptions
//     );
//     const result_1 = await response.json();
//     return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
//   }
// }

// export default Youtube;
