import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"; // Using AntDesign icons
import { FlatList } from "react-native";

const HomePage = () => {
  const posts = [
    {
      id: 1,
      username: "user1",
      image: "https://placekitten.com/800/800",
      caption: "Enjoying a beautiful day!",
    },
    {
      id: 2,
      username: "user2",
      image: "https://placekitten.com/801/800",
      caption: "Adventures are calling!",
    },
    //generate more posts
    {
      id: 3,
      username: "user3",
      image: "https://placekitten.com/802/800",
      caption: "Exploring the world!",
    },
    {
      id: 4,
      username: "user4",
      image: "https://placekitten.com/803/800",
      caption: "Traveling is fun!",
    },
    {
      id: 5,
      username: "user5",
      image: "https://placekitten.com/804/800",
      caption: "Enjoying the view!",
    },
    {
      id: 6,
      username: "user6",
      image: "https://placekitten.com/805/800",
      caption: "Feeling good!",
    },
    {
      id: 7,
      username: "user7",
      image: "https://placekitten.com/806/800",
      caption: "Living the life!",
    },
    {
      id: 8,
      username: "user8",
      image: "https://placekitten.com/807/800",
      caption: "Having a great day!",
    },
    {
      id: 9,
      username: "user9",
      image: "https://placekitten.com/808/800",
      caption: "Feeling awesome!",
    },
    {
      id: 10,
      username: "user10",
      image: "https://placekitten.com/809/800",
      caption: "Enjoying the moment!",
    },
    //generate more posts
    {
      id: 11,
      username: "user11",
      image: "https://placekitten.com/810/800",
      caption: "Feeling happy!",
    },
    {
      id: 12,
      username: "user12",
      image: "https://placekitten.com/811/800",
      caption: "Having a great time!",
    },
    {
      id: 13,
      username: "user13",
      image: "https://placekitten.com/812/800",
      caption: "Enjoying the day!",
    },
    {
      id: 14,
      username: "user14",
      image: "https://placekitten.com/813/800",
      caption: "Feeling good!",
    },
    {
      id: 15,
      username: "user15",
      image: "https://placekitten.com/814/800",
      caption: "Having a great day!",
    },
    {
      id: 16,
      username: "user16",
      image: "https://placekitten.com/815/800",
      caption: "Enjoying the moment!",
    },
    {
      id: 17,
      username: "user17",
      image: "https://placekitten.com/816/800",
      caption: "Feeling happy!",
    },
    {
      id: 18,
      username: "user18",
      image: "https://placekitten.com/817/800",
      caption: "Having a great time!",
    },
    {
      id: 19,
      username: "user19",
      image: "https://placekitten.com/818/800",
      caption: "Enjoying the day!",
    },
    {
      id: 20,
      username: "user20",
      image: "https://placekitten.com/819/800",
      caption: "Feeling good!",
    },
  ];

  const stories = [
    {
      id: 1,
      image: "https://placekitten.com/200/200",
      username: "user1",
    },
    {
      id: 2,
      image: "https://placekitten.com/201/200",
      username: "user2",
    },
    {
      id: 3,
      image: "https://placekitten.com/202/200",
      username: "user3",
    },
    {
      id: 4,
      image: "https://placekitten.com/203/200",
      username: "user4",
    },
    {
      id: 5,
      image: "https://placekitten.com/203/200",
      username: "user4",
    },
    {
      id: 6,
      image: "https://placekitten.com/203/200",
      username: "user4",
    },
    {
      id: 7,
      image: "https://placekitten.com/203/200",
      username: "user4",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Instagram</Text>
        <View style={styles.headerIcons}>
          <Icon name="search1" size={24} color="black" style={styles.icon} />
          <Icon name="hearto" size={24} color="black" style={styles.icon} />
          <Icon name="message1" size={24} color="black" style={styles.icon} />
        </View>
      </View>
      {/* Stories */}
      <FlatList
        style={styles.story}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={stories}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.image }} style={styles.storyImage} />
            <Text>{item.username}</Text>
          </View>
        )}
      />

      {/* Posts Feed */}
      <ScrollView style={styles.feed}>
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            <Text style={styles.username}>{post.username}</Text>
            <Image
              source={require("./images/image.png")}
              style={styles.postImage}
            />
            <Text style={styles.caption}>{post.caption}</Text>
          </View>
        ))}
      </ScrollView>
      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <Icon name="home" size={30} color="black" style={styles.navIcon} />
        <Icon name="search1" size={30} color="black" style={styles.navIcon} />
        <Icon
          name="pluscircleo"
          size={30}
          color="black"
          style={styles.navIcon}
        />
        <Icon name="hearto" size={30} color="black" style={styles.navIcon} />
        <Icon name="user" size={30} color="black" style={styles.navIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  header: {
    paddingTop: 50,
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 20,
  },
  story: {
    width: "100%",
    height: 170,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 5,
    textAlign: "center",
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    margin: 10,
    borderWidth: 3,
    borderColor: "#ff8501",
  },

  post: {
    marginBottom: 20,
    padding: 30,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  username: {},
  postImage: {
    padding: 10,
    width: "100%",
    height: 400,
    borderRadius: 10,
  },
  caption: {},
  navBar: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navIcon: {
    marginBottom: 25,
  },
});

export default HomePage;
