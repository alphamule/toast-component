import useKeyEffect from "./use-key-effect";

const useEscapeKey = (callback) => useKeyEffect("Escape", callback);

export default useEscapeKey;


