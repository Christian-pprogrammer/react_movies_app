import React from "react";
import { MovieInterface } from "./Home";

const MovieComponent = ({m}: {m:MovieInterface}) => {

  //redirect to movie/:id on click
  const handleClick = () => {
    window.location.href = `/movie/${m.id}`;
  };


  return (
    <div key={m.id} className="flex flex-row items-center min-w-[30vw] px-4 py-10 border cursor-pointer hover:bg-[#00000010] rounded"
      onClick={handleClick}
    >
      <img src={m.thumbnail} alt={m.movie_name}
        className="w-20 h-20 rounded-full border-2 border-slate-800"
      />
      <div className="flex flex-col px-4">
        <h1 className="text-xl text-slate-800">{m.movie_name}</h1>
        <p className="text-slate-800 text-xs">Released: {m.release_date}</p>
      </div>
      <p className="text-slate-800 text-xs px-6 py-4">{m.description}</p>
    </div>
  );
};

export default MovieComponent;
