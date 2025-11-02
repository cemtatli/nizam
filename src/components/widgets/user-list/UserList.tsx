"use client";

import { useTranslations } from "next-intl";

import { useUsers } from "@/hooks/useUsers";

import { Button } from "@/components/ui/button";

export function UserList() {
  const { data = [], isPending, isFetching, isError, error } = useUsers();
  const t = useTranslations("HomePage");

  if (isError)
    return (
      <div>
        {t("error")}: {(error as Error).message}
      </div>
    );

  return (
    <div>
      <Button disabled={isFetching}>{t("fetchUsers")}</Button>

      {isPending && !data.length && <div>{t("loading")}</div>}

      {!!data.length && (
        <ul className="space-y-1">
          {data.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
