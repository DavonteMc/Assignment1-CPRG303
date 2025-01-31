import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            style={styles.headerIcons}
            source={require("./assets/icons8-left-50.png")}
          />
        </TouchableOpacity>
        <View style={styles.headerText}>
          <Text style={styles.title}>Group Profile</Text>
          <Text>ootd_everyday</Text>
        </View>
        <TouchableOpacity style={styles.uploadButton}>
          <Image
            style={styles.headerIcons}
            source={require("./assets/icons8-plus-50.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.profileHeader}>
        <View style={styles.profilePhotoWhole}>
          <LinearGradient
            colors={["#fdf497", "#fd5949", "#d6249f", "#285AEB"]}
            style={styles.profilePhotoBG}
          >
            <Image
              source={{
                uri: "https://picsum.photos/200",
              }}
              style={styles.profilePhoto}
            />
          </LinearGradient>
        </View>
        <View style={styles.profileMetrics}>
          <View style={styles.metricText}>
            <Text style={styles.metricTitle}>53</Text>
            <Text style={styles.metricSubtitle}>Posts</Text>
          </View>
          <View style={styles.metricText}>
            <Text style={styles.metricTitle}>12</Text>
            <Text style={styles.metricSubtitle}>Members</Text>
          </View>
          <View style={styles.metricText}>
            <Text style={styles.metricTitle}>1</Text>
            <Text style={styles.metricSubtitle}>Admins</Text>
          </View>
        </View>
      </View>

      <View style={styles.profileBody}>
        <Text style={styles.descriptionTitle}>OOTD Everyday</Text>
        <Text>Fit Check!</Text>
        <Text>You know we'll hype you up.</Text>
      </View>

      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>Member</Text>
        <Image
          style={styles.dropdownButton}
          source={require("./assets/icons8-down-50.png")}
        />
      </TouchableOpacity>

      <View style={styles.gallery}>
        <View style={styles.pictures}>
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={styles.picture}
          />
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={styles.picture}
          />
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={styles.picture}
          />
        </View>
        <View style={styles.pictures}>
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={styles.picture}
          />
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={styles.picture}
          />
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={styles.picture}
          />
        </View>
        <View style={styles.pictures}>
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={styles.picture}
          />
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={styles.picture}
          />
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={styles.picture}
          />
        </View>
        <View style={styles.pictures}>
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={{ width: 136, height: 55 }}
          />
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={{ width: 136, height: 55 }}
          />
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={{ width: 136, height: 55 }}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.navbar}>
          <Image
            source={require("./assets/icons8-home-48.png")}
            style={styles.navbarIcons}
          />
          <Image
            source={require("./assets/icons8-search-48.png")}
            style={styles.navbarIcons}
          />
          <Image
            source={require("./assets/icons8-film-48.png")}
            style={styles.navbarIcons}
          />
          <Image
            source={require("./assets/icons8-shopping-bag-48.png")}
            style={styles.navbarIcons}
          />
          <Image
            source={require("./assets/icons8-test-account-32.png")}
            style={styles.navbarIcons}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 100,
    paddingTop: 50,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  backButton: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerText: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  uploadButton: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: 5,
  },
  headerIcons: {
    width: 28,
    height: 28,
  },

  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 39,
  },
  profilePhotoWhole: {
    marginLeft: 10,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 2,
  },
  profilePhotoBG: {
    width: 106,
    height: 106,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  profileMetrics: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginRight: 15,
  },
  metricText: {
    alignItems: "center",
  },
  metricTitle: {
    fontWeight: "bold",
    fontSize: 19,
  },
  metricSubtitle: {
    fontSize: 12,
  },

  profileBody: {
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  descriptionTitle: {
    fontWeight: "bold",
  },

  dropdown: {
    flexDirection: "row",
    width: "94%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "black",
    paddingVertical: 1,
    paddingHorizontal: 30,
    marginHorizontal: "auto",
    marginVertical: 15,
  },
  dropdownText: {
    fontWeight: "bold",
  },
  dropdownButton: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },

  gallery: {
    width: "100%",
    justifyContent: "center",
    marginVertical: 1,
  },
  pictures: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 1,
    marginTop: 1,
  },
  picture: {
    width: 136,
    height: 136,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    marginTop: 1,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopColor: "black",
    borderTopWidth: 2,
    width: "100%",
    height: 60,
    paddingVertical: 15,
  },
  navbarIcons: {
    width: 42,
    height: 42,
  },
});
