import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HeaderButton = ({ text, activeTab, setActiveTab }) => (
  <TouchableOpacity
    onPress={() => setActiveTab(text)}
    style={[
      styles.tab,
      { backgroundColor: activeTab === text ? "black" : "transparent" },
    ]}
  >
    <Text
      style={[
        styles.tabText,
        { color: activeTab === text ? "white" : "black" },
      ]}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pick-up"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 900,
  },
});

export default HeaderTabs;
