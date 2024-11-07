import { MyText } from '@/components/ui';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Image, type ImageSourcePropType, View } from 'react-native';
import { createUnistylesComponent, StyleSheet } from 'react-native-unistyles';

interface PlantCardProps {
  name: string;
  description: string;
  needsWater: boolean;
  imageSource: ImageSourcePropType;
  symbolColor: string;
}

export const PlantCard = createUnistylesComponent(
  ({
    name,
    description,
    needsWater,
    imageSource,
    symbolColor,
  }: PlantCardProps) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <MyText variant="h2">{name}</MyText>
            <IconSymbol
              name={needsWater ? 'drop' : 'drop.fill'}
              color={symbolColor}
            />
          </View>
          <MyText variant="body">{description}</MyText>
        </View>
      </View>
    );
  },
  (theme) => ({
    symbolColor: theme.colors.secondary,
  }),
);

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    ...theme.shadows.medium,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(3),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  imageContainer: {
    width: 100,
    height: '100%',
    borderRadius: theme.spacing(3),
    overflow: 'hidden',
    marginRight: theme.spacing(3),
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
}));
