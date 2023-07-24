import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function getUniversityAll() {
  return useQuery({
    queryKey: ["getAll"],
    queryFn: () =>
      axios
        .get("https://6325d1d270c3fa390f8f5039.mockapi.io/VuzCard")
        .then((res) => res.data),
  });
}

function getUniversityByLink(link) {
  return useQuery({
    queryKey: ["getByLink"],
    queryFn: () =>
      axios
        .get(`https://6325d1d270c3fa390f8f5039.mockapi.io/VuzCard?link=${link}`)
        .then((res) => res.data),
  });
}

export { getUniversityAll, getUniversityByLink };
