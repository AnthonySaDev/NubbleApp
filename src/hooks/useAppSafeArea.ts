import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppTheme} from './useAppTheme';

export function useAppSafArea() {
  const {top} = useSafeAreaInsets();
  const {spacing} = useAppTheme();

  return {top: Math.max(top, spacing.s20)};
}
