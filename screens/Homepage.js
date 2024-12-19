import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  const navigation = useNavigation();

  const cardData = [
    { id: '1', title: 'Lasagna', description: 
        "Lasagna is a wide, flat sheet of pasta. Lasagna can refer to either the type of noodle or to the typical lasagna dish which is a dish made with several layers of lasagna sheets with sauce and other ingredients, such as meats and cheese, in between the lasagna noodles.                   Ingredient : Cheese Filling,Meat,Sauce,Spinach", 
        steps: ["Boil pasta", "Prepare meat sauce:Cook sausage and beef with onion and garlic. Drain well, add the pasta sauce  & simmer it for a few minutes to thicken.", "Combine cheese mixture: Stir the cheese mixture together in a bowl.","Layer & bake: Layer the meat sauce and cheese mixture with lasagna noodles and bake until the top of the lasagna is golden brown."], 
        imageUri: require('../assets/Lasagna.jpeg') },
    { id: '2', title: 'Chicken Noodle Soup', description: 
        'Chicken noodle soup is a warm, comforting dish made with savory broth, tender chicken, and soft noodles. Typically seasoned with herbs like thyme and bay leaves, it often includes carrots, celery, and onions for added flavor and nutrition. The chicken is usually shredded or diced, while the noodles soak up the flavorful broth, creating a hearty, soothing meal—perfect for chilly days.             Ingredient: 1 tablespoon butter½ cup chopped onion ½ cup chopped celery 4 (14.5 ounce) cans chicken broth 1 (14.5 ounce) can vegetable broth ½ pound chopped cooked chicken breast 1 ½ cups egg noodles 1 cup sliced carrots ½ teaspoon dried basil ½ teaspoon dried oregano salt and ground black pepper to taste', 
        steps: ["Melt butter in a large pot over medium heat. Add onion and celery and cook until just tender, about 5 minutes.", "Add chicken broth, vegetable broth, chicken, egg noodles, carrots, basil, oregano, salt, and pepper. Stir to combine and bring to a boil.", "Reduce heat and simmer for 20 minutes."], 
        imageUri: require('../assets/CNS.jpg') },
    { id: '3', title: 'Spaghetti Carbonara', description: 
        'Spaghetti Carbonara is a rich and creamy Italian pasta dish made with spaghetti, eggs, cheese, pancetta, and black pepper. The sauce is created by tossing hot pasta with raw eggs and grated cheese, usually Pecorino Romano or Parmesan, which melt into a silky coating without needing cream. Crispy pancetta or guanciale adds a savory, smoky flavor, while freshly cracked black pepper gives the dish a subtle kick. It’s a simple yet luxurious meal with a smooth, velvety texture that’s both satisfying and packed with flavor.            Ingredient: Spaghetti,Olive Oil,Garlic Kosher salt and Ground Black Pepper,Eggs,Parmesan', 
        steps: ["Cook the spaghetti in a large pot of salted boiling water. Reserve the hot cooking water.", "Add the garlic to the skillet with the bacon and cook for about 30 more seconds.", "Stir in a ladle of hot pasta water and simmer on low heat for 2-3 minutes.","whisk together the eggs, egg yolk and Parmesan.","Temper the egg mixture by gradually adding a ladle of hot pasta water.","Transfer the pasta from the cooking water to the skillet. Remove from the heat and season with plenty of black pepper.","Stir the tempered egg mixture into the hot pasta and toss gently to coat.","Garnish with Parmesan, a drizzle of olive oil, or chopped fresh herbs. Enjoy!"], 
        imageUri: require('../assets/Spaghetti.jpg') },
    { id: '4', title: 'Bread Pudding', description: 
        'Bread pudding is a cozy, custard-like dessert made from stale bread soaked in a mixture of milk, eggs, sugar, and spices, then baked until golden and set. Traditionally, it’s flavored with cinnamon, vanilla, and nutmeg, and often includes raisins or other dried fruits for extra sweetness. As it bakes, the bread absorbs the custard, creating a soft, pudding-like interior with a slightly crisp top. Served warm, it’s sometimes topped with caramel sauce, whipped cream, or a dusting of powdered sugar, making it a comforting, nostalgic treat.             Ingredient: 6 slices day-old bread, torn into small pieces,2 tablespoons unsalted  melted butter,½ cup raisins (Optional),2 cups milk,¾ cup white sugar,4 large beaten egg,1 teaspoon ground cinnamon,1 teaspoon vanilla extract', 
        steps: ["Gather all ingredients. Preheat the oven to 350 degrees F (175 degrees C).", "Place bread pieces into an 8-inch square baking pan. Drizzle melted butter over bread and sprinkle raisins over top.", "Whisk milk, sugar, eggs, cinnamon, and vanilla together in a medium mixing bowl until well combined.","Pour mixture over bread, and lightly push down with a fork until all bread is covered and soaking up the liquid.","Bake in the preheated oven until golden brown and the top springs back when lightly pressed, about 45 minutes."], 
        imageUri: require('../assets/Pudding.jpg') },
    
  ];

  const renderCardItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Detail', { item })}
      >
        <Image source={item.imageUri} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        renderItem={renderCardItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cardList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  cardList: { paddingHorizontal: 16, paddingTop: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: { width: '100%', height: 200 },
  cardContent: { padding: 16 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  cardDescription: { fontSize: 14, color: '#666' },
});

export default Homepage;
