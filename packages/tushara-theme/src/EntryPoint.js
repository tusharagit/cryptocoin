import React, { useState, useEffect } from "react";
import Loading from './component/Dashboard/Loading.js';

export default function EntryPoint() {
  const [comp, setComp] = useState(<Loading comType="cload" />);

  useEffect(() => {
    const load = async () => {
      const App = (await import("./AwaitApp")).default;
      setComp(App);
    };

    load();
  }, []);

  return <>{comp}</>;
}