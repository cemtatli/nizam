import { useQuery } from "@tanstack/react-query";

import { GET } from "@/lib/api";

import { UserType } from "@/types";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: ({ signal }) => GET<UserType[]>("/users", { signal }),
    select: (data) => data
  });
}
