import { ThemeColors } from "../../theme/theme";
import { TouchableOpacityBoxProps } from "../Box/Box";

export type ButtonPreset = 'primary' | 'outline';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}
export const buttonPresets: Record<ButtonPreset, ButtonUI> = {
  primary: {
    container: {
      backgroundColor: 'buttonPrimary',
    },
    content: 'primaryContrast',
  },
  outline: {
    container: {
      borderWidth: 1,
      borderColor: 'buttonPrimary',
    },
    content: 'buttonPrimary',
  },
};
