import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const history = [
  {
    id: "1",
    course: "Pemrograman Mobile",
    date: "2026-03-01",
    status: "Present",
  },
  {
    id: "2",
    course: "Analisis Sistem Basis Data",
    date: "2026-03-02",
    status: "Present",
  },
  {
    id: "3",
    course: "Struktur Data",
    date: "2026-03-03",
    status: "Absent",
  },
  {
    id: "4",
    course: "Jaringan Komputer",
    date: "2026-03-04",
    status: "Present",
  },
  {
    id: "5",
    course: "Pemrograman 4",
    date: "2026-03-05",
    status: "Present",
  },
  {
    id: "6",
    course: "Pemrograman 5",
    date: "2026-03-06",
    status: "Absent",
  },
  {
    id: "7",
    course: "Pemrograman 1",
    date: "2026-03-07",
    status: "Present",
  },
  {
    id: "8",
    course: "Pemrograman 2",
    date: "2026-03-08",
    status: "Present",
  },
  {
    id: "9",
    course: "Basis Data",
    date: "2026-03-09",
    status: "Absent",
  },
  {
    id: "10",
    course: "Sistem Operasi",
    date: "2026-03-10",
    status: "Present",
  },
  {
    id: "11",
    course: "Pemrograman 3",
    date: "2026-03-11",
    status: "Present",
  },
  {
    id: "12",
    course: "Komputasi Penyimpanan Cloud",
    date: "2026-03-12",
    status: "Absent",
  },
  {
    id: "13",
    course: "Teknik Mesin",
    date: "2026-03-13",
    status: "Present",
  },
  {
    id: "14",
    course: "Big Data",
    date: "2026-03-14",
    status: "Present",
  },
  {
    id: "15",
    course: "Komputasi Mobile",
    date: "2026-03-15",
    status: "Absent",
  },
  {
    id: "16",
    course: "Keamanan Jaringan",
    date: "2026-03-16",
    status: "Present",
  },
  {
    id: "17",
    course: "Analisis Sistem",
    date: "2026-03-17",
    status: "Present",
  },
  {
    id: "18",
    course: "Sistem Multimedia",
    date: "2026-03-18",
    status: "Absent",
  },
  {
    id: "19",
    course: "Pengolahan Citra Digital",
    date: "2026-03-19",
    status: "Present",
  },
  {
    id: "20",
    course: "Perancangan Kompiler",
    date: "2026-03-20",
    status: "Present",
  },
  {
    id: "21",
    course: "Sistem Terdistribusi",
    date: "2026-03-21",
    status: "Absent",
  },
  {
    id: "22",
    course: "E-Commerce",
    date: "2026-03-22",
    status: "Present",
  },
  {
    id: "23",
    course: "Internet of Things (IOT)",
    date: "2026-03-23",
    status: "Present",
  },
  {
    id: "24",
    course: "Arsitektur Komputer",
    date: "2026-03-24",
    status: "Absent",
  },
];

const Home = () => {
  const presentCount = history.filter(
    (item) => item.status === "Present",
  ).length;
  const absentCount = history.filter((item) => item.status === "Absent").length;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.course}>{item.course}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      <View style={styles.statusContainer}>
        <MaterialIcons
          name={item.status === "Present" ? "check-circle" : "cancel"}
          size={20}
          color={item.status === "Present" ? "green" : "red"}
        />
        <Text
          style={item.status === "Present" ? styles.present : styles.absent}
        >
          {" "}
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Attendance App</Text>

        <View style={styles.card}>
          <View style={styles.icon}>
            <MaterialIcons name="person" size={40} color="#555" />
          </View>

          <View>
            <Text style={styles.name}>M Alif Fadhillah</Text>
            <Text>NIM : 0320240043</Text>
            <Text>Class : Informatika-2A</Text>
          </View>
        </View>

        <View style={styles.classCard}>
          <Text style={styles.subtitle}>Today's Class</Text>
          <Text>Mobile Programming</Text>
          <Text>08:00 - 10:00</Text>
          <Text>Lab CB-110</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CHECK IN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.classCard}>
          <Text style={styles.subtitle}>Upcoming Class</Text>
          <Text>Pemrograman 6</Text>
          <Text>13:00 - 15:00</Text>
          <Text>Room CB-106</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.subtitle}>Attendance Summary</Text>
          <Text style={styles.summaryText}>Present : {presentCount}</Text>
          <Text style={styles.summaryText}>Absent : {absentCount}</Text>
        </View>

        <Text style={styles.subtitle}>Attendance History</Text>
        <FlatList
          data={history}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fee",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  classCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  summaryCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  summaryText: {
    fontSize: 16,
    marginBottom: 5,
  },

  button: {
    marginTop: 10,
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },

  course: {
    fontSize: 16,
    fontWeight: "500",
  },

  date: {
    fontSize: 12,
    color: "gray",
    marginTop: 2,
  },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  present: {
    color: "green",
    fontWeight: "bold",
  },

  absent: {
    color: "red",
    fontWeight: "bold",
  },
});

export default Home;
