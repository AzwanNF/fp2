import * as React from "react";
import { useAuth } from "../api-hooks/user/use-auth";
import Header from "../components/modules/header/header";

export const HOME_PAGE_ROUTE = "/";

export function HomePage() {
  return (
    <>
      <Header />
    </>
  );
}
