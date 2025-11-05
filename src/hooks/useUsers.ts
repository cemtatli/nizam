import { useQuery } from "@tanstack/react-query";

import { get } from "@/lib/api";
import { sleep } from "@/lib/utils";

import { UserType } from "@/types";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: ({ signal }) => get<UserType[]>("/users", { signal }),
    select: async (data) => {
      await sleep(2000);
      return data.slice(0, 5);
    }
  });
}
