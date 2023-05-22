import { useWindowDimensions } from "react-native";

const FontScale = (size: number) => {
  const { height, width, scale, fontScale } = useWindowDimensions();
  return size / fontScale;
};

export default FontScale;
