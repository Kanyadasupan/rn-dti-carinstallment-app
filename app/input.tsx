import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const DOWN_PAYMENT = [5, 10, 15, 20, 25, 30, 35];
const MONTH_OPTION = [24, 36, 48, 60, 72, 84];

export default function Input() {
  const [carPrice, setCarPrice] = useState("");
  const [carDownPayment, setCarDownPayment] = useState<number | null>(null);
  const [carMonth, setCarMonth] = useState<number | null>(null);
  const [carInterest, setCarInterest] = useState("");
  const [carInstallment, setCarInstallment] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={require("@/assets/images/car.png")}
            style={styles.image}
          />
          <View style={styles.cardinput}>
            <Text style={styles.title}>คำนวณค่างวดรถ</Text>
            <View style={styles.form}>
              <Text style={styles.text}>ราคารถ (บาท) </Text>
              <TextInput
                style={styles.input}
                placeholder="เช่น 850,000"
                keyboardType="numeric"
                value={carPrice}
                onChangeText={(text) => setCarPrice(text)}
              ></TextInput>

              <Text style={styles.text}>เลือกเงินดาวน์ (%)</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {DOWN_PAYMENT.map((item) => (
                  <TouchableOpacity
                    key={item}
                    style={[
                      styles.button,
                      carDownPayment === item && styles.buttonSelected,
                    ]}
                    onPress={() => setCarDownPayment(item)}
                  >
                    <Text
                      style={[
                        styles.label,
                        carDownPayment === item && styles.labelSelected,
                      ]}
                    >
                      {item}%
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <Text style={styles.text}>ระยะเวลาผ่อน (งวด)</Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {MONTH_OPTION.map((item) => (
                  <TouchableOpacity
                    key={item}
                    style={[
                      styles.button,
                      carMonth === item && styles.buttonSelected,
                    ]}
                    onPress={() => setCarMonth(item)}
                  >
                    <Text
                      style={[
                        styles.label,
                        carMonth === item && styles.labelSelected,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.text}>ดอกเบี้ย (% ต่อปี)</Text>
              <TextInput
                style={styles.input}
                placeholder="เช่น 2.59"
                keyboardType="numeric"
                value={carInterest}
                onChangeText={(text) => setCarInterest(text)}
              ></TextInput>

              <TouchableOpacity style={styles.btncal}>
                <Text style={styles.labelcal}>คำนวณค่างวด</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 150,
    justifyContent: "flex-end",
  },
  cardinput: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: "flex-start",
  },
  title: {
    color: "#000000",
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Prompt_700Bold",
  },
  text: {
    color: "#000000",
    fontSize: 18,
    fontFamily: "Prompt_600SemiBold",
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    fontFamily: "Prompt_400Regular",

    backgroundColor: "#ffffff",
    elevation: 3,
    width: "100%",

    shadowColor: "#535353",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: "#e3e3e3",
  },
  label: {
    color: "#000000",
    fontFamily: "Prompt_600SemiBold",
  },
  button: {
    width: 70,
    height: 50,
    margin: 8,
    borderRadius: 30,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
  },
  btncal: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#040442",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  labelcal: {
    color: "#ffffff",
    fontFamily: "Prompt_600SemiBold",
    fontSize: 18,
  },
  select: {
    backgroundColor: "#040442",
    fontFamily: "Prompt_600SemiBold",
  },
  selectlabel: {
    color: "#ffffff",
    fontFamily: "Prompt_600SemiBold",
  },
  buttonSelected: {
    backgroundColor: "#040442",
  },
  labelSelected: {
    color: "#ffffff",
  },
});
