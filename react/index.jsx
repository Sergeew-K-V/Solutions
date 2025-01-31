const Components = () => {
  console.log("App");

  const [state, setState] = useState();

  useEffect(() => {
    setState((prev) => prev + 1);
  }, []);

  useEffect(() => {
    console.log("useEffect 1");
    return () => {
      console.log("useEffect 1 cleanup");
    };
  }, [state]);

  useEffect(() => {
    console.log("useEffect 2");
    return () => {
      console.log("useEffect 2 cleanup");
    };
  }, [state]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    return () => {
      console.log("useLayoutEffect cleanup");
    };
  }, [state]);

  return null;
};

// App, useLayoutEffect, useEffect 1, useEffect2,
// useLayoutEffect cleanup, useLayoutEffect, useEffect 1 cleanup, useEffect 2 cleanup,
// useEffect 1,useEffect 2
