import { PlantCard } from '@/components/PlantCard';
import { ScrollView, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export const PlantList = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <PlantCard
          name="Monstera Deliciosa"
          description="A popular tropical plant known for its large, split leaves and easy care requirements."
          needsWater={true}
          imageSource={require('@assets/images/plants/monstera-deliciosa.jpg')}
        />
        <PlantCard
          name="Snake Plant"
          description="A hardy succulent with tall, stiff leaves that can survive in low light conditions."
          needsWater={false}
          imageSource={require('@assets/images/plants/snake-plant.jpg')}
        />
        <PlantCard
          name="Peace Lily"
          description="An elegant flowering plant that thrives in low light and helps purify indoor air."
          needsWater={true}
          imageSource={require('@assets/images/plants/peace-lily.jpg')}
        />
        <PlantCard
          name="Fiddle Leaf Fig"
          description="A stunning indoor tree with large, violin-shaped leaves that adds a dramatic touch to any room."
          needsWater={true}
          imageSource={require('@assets/images/plants/fiddle-leaf.jpg')}
        />
        <PlantCard
          name="Spider Plant"
          description="A resilient plant with long, arching leaves that produces baby plants called 'spiderettes'."
          needsWater={false}
          imageSource={require('@assets/images/plants/spider-plant.jpg')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: theme.spacing(4),
    gap: theme.spacing(4),
  },
}));
