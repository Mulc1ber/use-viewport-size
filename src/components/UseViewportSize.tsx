import { useViewportSize } from "../hooks";

export function UseViewportSize() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
