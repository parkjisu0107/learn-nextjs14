/*
async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}
*/

import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// Suspense
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

// Parallel Requests
// export default async function MovieDetail({
//   params: { id },
// }: {
//   params: { id: string };
// }) {
//   console.log("start fetching");
//   const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
//   console.log("end fetching");
//   return <h1>{movie.title}</h1>;
// }

// export default async function MovieDetail({
//   params: { id },
// }: {
//   params: { id: string };
// }) {
//   console.log("start fetching");
//   const movie = await getMovie(id);
//   const videos = await getVideos(id);
//   console.log("end fetching");
//   return <h1>{movie.title}</h1>;
// }
