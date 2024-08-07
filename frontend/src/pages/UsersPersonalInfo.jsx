import React, { useState } from "react";
import { useSearch } from "../components/SearchProvider";

export default function UsersPersonalInfo() {
  const { selectedResult } = useSearch();
  return (
    <div style={{ color: "black" }}>
      {selectedResult ? selectedResult.name : "Nenhum resultado"}
    </div>
  );
}
