import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"; // Using AntDesign icons

const App = () => {
  const posts = [
    {
      id: 1,
      username: "User1",
      image: "https://placekitten.com/800/800",
      caption: "Enjoying a beautiful day!",
    },
    {
      id: 2,
      username: "User2",
      image: "https://placekitten.com/801/800",
      caption: "Adventures are calling!",
    },
    {
      id: 3,
      username: "User3",
      image: "https://placekitten.com/802/800",
      caption: "Exploring the world!",
    },
    {
      id: 4,
      username: "User4",
      image: "https://placekitten.com/803/800",
      caption: "Traveling is fun!",
    },
  ];

  const stories = [
    {
      id: 1,
      image: "https://placekitten.com/200/200",
      username: "User1",
    },
    {
      id: 2,
      image: "https://placekitten.com/201/200",
      username: "User2",
    },
    {
      id: 3,
      image: "https://placekitten.com/202/200",
      username: "User3",
    },
    {
      id: 4,
      image: "https://placekitten.com/203/200",
      username: "User4",
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
            <Text style = {{fontWeight: "bold"}}>{item.username}</Text>
          </View>
        )}
      />

      {/* Posts Feed */}
      <ScrollView style={styles.feed}>
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            <Text style={[styles.username, {fontWeight: "bold"}]}>{post.username}</Text>
            <Image
              source={require("./images/image.png")}
              style={styles.postImage}
            />
            <Text style={styles.caption}>{post.caption}</Text>

            {/* Post Action Icons */}
            <View style={styles.iconsContainer}>
              <Image source={require("./assets/home.png")} style={styles.icons1} />
              <Image source={require("./assets/comment.png")} style={styles.icons1} />
              <Image source={require("./assets/paper-plane.png")} style={styles.icons1} />
              <Image
                source={require("./assets/bookmark.png")}
                style={{ height: 35, width: 40, margin: 10, marginLeft: 140 }}
              />
            </View>

            {/* Post Likes and Comments */}
            <View>
              <Text>
                Liked by <Text style={{ fontWeight: "bold" }}>paisley.print48</Text> and{" "}
                <Text style={{ fontWeight: "bold" }}>7 others</Text>
              </Text>

              <Text>
                <Text style={{ fontWeight: "bold" }}>french_fries</Text> Fresh shot on a sunny day
              </Text>

              <Text style={{ color: "#E7EAE5" }}>View all 15 comments</Text>

              <Text>
                <Text style={{ fontWeight: "bold" }}>lilwat.838</Text> Awesome looks
              </Text>

              <Text>
                <Text style={{ fontWeight: "bold" }}>pia.in.a.pott</Text> Gorg. Looks
              </Text>

              <Text>
                <Text style={{ fontWeight: "bold" }}>xo.xo.xm</Text> Wonderful
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <Icon name="home" size={30} color="black" style={styles.navIcon} />
        <Icon name="search1" size={30} color="black" style={styles.navIcon} />
        <Icon name="pluscircleo" size={30} color="black" style={styles.navIcon} />
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
    height: 190,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 15,
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
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  postImage: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    marginVertical: 10,
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
    marginHorizontal: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    padding: 10,
  },
  icons1: {
    height: 30,
    width: 30,
    margin: 10,
    right: 20,
  },
});

export default App;
