import { useEffect, useState } from "react";
import { getClasifiacion } from "../Controllers/Agrupacion";

export function UseClasificacion(){
    const [category, setCategory]= useState(null);
    
    useEffect(() => {
      const load = async () => {
        const category = await getClasifiacion();
        setCategory(category);
      };
      load();
    }, [])
    return category;
}
/*
export function UseClub(id){
  const [club, setClub]= useState(null);
  
  useEffect(() => {
    const load = async () => {
      const club = await getClub(id);
      setClub(club);
    };
    load();
  }, [id])
  return club;
}*/