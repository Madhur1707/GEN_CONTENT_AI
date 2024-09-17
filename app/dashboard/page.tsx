"use client";
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplatesSection from "./_components/TemplatesSection";

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>();

  return (
    <div>
      {/* SEARCH SECTION  */}
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />

      {/* TEMPLATE SECTION */}
      <TemplatesSection userSearchInput={userSearchInput} />
    </div>
  );
}

export default Dashboard;
