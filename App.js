import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign"; // Using AntDesign icons
import { Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  const posts = [
    {
      id: 1,
      username: "User1",
      image: "https://placekitten.com/800/800",
    },
    {
      id: 2,
      username: "User2",
      image: "https://placekitten.com/801/800",
    },
    {
      id: 3,
      username: "User3",
      image: "https://placekitten.com/802/800",
    },
    {
      id: 4,
      username: "User4",
      image: "https://placekitten.com/803/800",
    },
  ];

  const stories = [
    {
      id: 1,
      image: "https://placekitten.com/200/200",
      username: "Me",
    },
    {
      id: 2,
      image: "https://placekitten.com/201/200",
      username: "Mark",
    },
    {
      id: 3,
      image: "https://placekitten.com/202/200",
      username: "Murk",
    },
    {
      id: 4,
      image: "https://placekitten.com/203/200",
      username: "Marky",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("./src/components/instaLogo.png")}
          alt="My Image"
          style={styles.instaLogo}
        />
        <Image
          source={require("./src/components/arrowDown.png")}
          alt="My Image"
          style={styles.arrowDown}
        />
        <View style={styles.headerIcons}>
          <Icon name="hearto" size={24} color="black" style={styles.icon} />
          <Image
            source={require("./assets/paper-plane.png")}
            style={styles.shareButton}
          />
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
            <View style={styles.storiesContainerPFP}>
              <Image
                source={require("./src/components/murk.jpg")}
                alt="My Image"
                style={styles.storiesPFP}
              />
            </View>
            <View style={styles.storiesContainerTXT}>
              <Text style={{ fontWeight: "bold" }}>{item.username}</Text>
            </View>
          </View>
        )}
      />

      {/* Posts Feed */}
      <ScrollView style={styles.feed}>
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            <View style={styles.pfpAndUserContainer}>
              <Image
                source={require("./src/components/hawaii.webp")}
                alt="My Image"
                style={styles.pfp}
              />
              <Text
                style={[styles.username, { fontWeight: "bold", marginTop: 9 }]}
              >
                {post.username}
              </Text>
              <Image
                source={require("./src/components/three dots.png")}
                alt="My Image"
                style={styles.threeDots}
              />
            </View>
            <Image
              source={require("./src/components/hawaii.webp")}
              alt="My Image"
              style={styles.postImage}
            />

            {/* Post Action Icons */}
            <View style={styles.iconsContainer}>
              <Icon
                name="hearto"
                size={28}
                color="black"
                style={styles.icons1}
              />
              <Image
                source={require("./assets/comment.png")}
                style={styles.icons1}
              />
              <Image
                source={require("./assets/paper-plane.png")}
                style={styles.icons1}
              />
              <Image
                source={require("./assets/bookmark.png")}
                style={{ height: 28, width: 40, margin: 1, marginLeft: "40%" }}
              />
            </View>

            {/* Post Likes and Comments */}
            <View style={styles.descriptionContainer}>
              <Text>
                Liked by{" "}
                <Text style={{ fontWeight: "bold" }}>paisley.print48</Text> and{" "}
                <Text style={{ fontWeight: "bold" }}>7 others</Text>
              </Text>

              <Text>
                <Text style={{ fontWeight: "bold" }}>french_fries</Text> Fresh
                shot on a sunny day
              </Text>

              <Text style={{ color: "#E7EAE5" }}>View all 15 comments</Text>

              <Text>
                <Text style={{ fontWeight: "bold" }}>lilwat.838</Text> Awesome
                looks
              </Text>

              <Text>
                <Text style={{ fontWeight: "bold" }}>pia.in.a.pott</Text> Gorg.
                Looks
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
        <Icon
          name="pluscircleo"
          size={30}
          color="black"
          style={styles.navIcon}
        />

        {/* Button Here */}
        <Button
          icon={require("./images/video.png")}
          style={{ color: "black", width: 50, height: 50, marginRight: 8 }}
          title="Alert"
          onPress={() => {
            alert("Alert Button Pressed");
          }}
        ></Button>

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
  descriptionContainer: {
    marginLeft: 19,

    flex: 1,
  },
  header: {
    paddingTop: 40,
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  threeDots: {
    marginTop: 13,
    marginLeft: 220,
    height: 18,
    width: 18,
  },
  icon: {
    marginLeft: 20,
    marginTop: 10,
  },
  shareButton: {
    height: 28,
    width: 28,
    marginLeft: 10,
    marginTop: 8,
  },
  instaLogo: {
    height: 40,
    width: 96,
    marginTop: 20,
  },
  arrowDown: {
    height: 15,
    width: 15,
    marginRight: 130,
    marginTop: 24,
  },

  story: {
    width: "100%",
    height: 190,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 5,
    textAlign: "center",
    border: "10px",
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    margin: 10,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  pfp: {
    borderRadius: 30,
    borderCurve: 25,
    height: 35,
    width: 35,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: "#ff8501",
  },

  pfpAndUserContainer: {
    flexDirection: "row",
    gap: 12,
  },

  storiesPFP: {
    borderRadius: 90,
    borderCurve: 90,
    height: 75,
    width: 75,
    marginLeft: 5,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  storiesContainerPFP: {
    flexDirection: "row",
    paddingLeft: 6,
  },
  storiesContainerTXT: {
    flexDirection: "row",
    paddingLeft: 35,
  },

  post: {
    marginTop: 2,
    marginBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  postImage: {
    width: "100%",
    height: 400,
    marginTop: 20,
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
    gap: 5,
  },
  icons1: {
    height: 30,
    width: 30,
    right: 20,
    marginLeft: 20,
  },
});

export default App;
