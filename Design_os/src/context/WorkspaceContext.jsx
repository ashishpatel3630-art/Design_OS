import React, { createContext, useContext, useMemo, useState } from "react";

const WorkspaceContext = createContext(null);

export function WorkspaceProvider({ children }) {
  const [workspaceName, setWorkspaceName] = useState("Design OS Studio");
  const [projectCount, setProjectCount] = useState(12);

  const value = useMemo(
    () => ({
      workspaceName,
      setWorkspaceName,
      projectCount,
      setProjectCount,
    }),
    [workspaceName, projectCount],
  );

  return (
    <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);

  if (!context) {
    throw new Error("useWorkspace must be used within WorkspaceProvider");
  }

  return context;
}
