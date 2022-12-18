import { useState } from "react";
import { genres, movies } from "../data/_";
import "../index.css";
import MovieComponent from "./MovieComponent";
import ChevronRight from "./ChevronRight";

interface GenreInterface {
  category_id: string;
  category_name: string;
}

export interface MovieInterface {
  id: string;
  movie_name: string;
  description: string;
  release_date: string;
  genre: string;
  thumbnail: string;
}

export default function Home() {
  const [genre, setGenres] = useState<GenreInterface[]>(genres);
  const [movie, setMovies] = useState<MovieInterface[]>(movies);

  // console.table(genre);
  // console.table(movie);

  const scrollClick = (direction: string, e: HTMLElement | Element) => {
    e.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  }
  return (
    <div className="flex flex-col gap-10 p-2 items-center max-w-screen justify-center ">
      {genre.map((genre) => (
        <div key={genre.category_id} className="flex flex-col px-2 py-1 justify-center max-w-full relative">
          <h1 className="text-2xl text-slate-800">{genre.category_name}</h1>
          <div className="grid grid-flow-col gap-2 overflow-auto test relative movies">
            {movie.filter(m => m.genre === genre.category_name).map(m => (
              <MovieComponent m={m} key={m.id} />
            ))}
          </div>
          <div className="buttonsLeft absolute w-full -bottom-10 right-0 flex justify-between px-3">
            <div className="flex items-center  p-2 hover:bg-[#00000010] rounded cursor-pointer" onClick={(e) => { scrollClick('left', e.currentTarget.parentElement?.previousElementSibling!) }}>
              <ChevronRight className="-ml-2 fill-orange-400 rotate-180" />
              <ChevronRight className="-ml-2 fill-orange-400 rotate-180" />
              <ChevronRight className="-ml-2 fill-orange-400 rotate-180" />
            </div>
            <div className="flex items-center  p-2 hover:bg-[#00000010] rounded cursor-pointer" onClick={(e) => { scrollClick('right', e.currentTarget.parentElement?.previousElementSibling!) }}>
              <ChevronRight className="-ml-2 fill-orange-400" />
              <ChevronRight className="-ml-2 fill-orange-400" />
              <ChevronRight className="-ml-2 fill-orange-400" />
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}