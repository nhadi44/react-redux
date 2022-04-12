import React from "react";
import DefaultLayout from "../layouts/default";
import * as component from "../components";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="min-h-screen">
        <div className="grid grid-cols-2">
          <component.AddProduct />
          <component.ShowProduct />
        </div>
      </div>
    </DefaultLayout>
  );
}
