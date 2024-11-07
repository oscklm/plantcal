import { Text, type TextProps } from 'react-native';
import { StyleSheet, type UnistylesVariants } from 'react-native-unistyles';

interface MyText extends TextProps, UnistylesVariants<typeof styles> {}

export const MyText: React.FunctionComponent<MyText> = ({
  children,
  size,
  variant,
  bold,
}) => {
  styles.useVariants({
    size,
    variant,
    bold,
  });

  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create((theme) => ({
  text: {
    color: theme.colors.text,
    variants: {
      size: {
        small: {
          fontSize: 12,
          lineHeight: 14,
        },
        large: {
          fontSize: 16,
          lineHeight: 20,
        },
      },
      variant: {
        ...theme.typography,
      },
      bold: {
        true: {
          fontWeight: 'bold',
        },
      },
    },
  },
}));
