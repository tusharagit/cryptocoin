import React, { useState, useEffect } from "react";

function Loading() {
  return <div>Loading</div>;
}

export default function EntryPoint() {
  const [comp, setComp] = useState(Loading);

  useEffect(() => {
    const load = async () => {
      const App = (await import("./AwaitApp")).default;
      setComp(App);
    };

    load();
  }, []);

  return <>{comp}</>;
}