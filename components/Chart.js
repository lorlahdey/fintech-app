import { StyleSheet, Text, View } from 'react-native'
import {
  LineChart,
} from "react-native-gifted-charts";

import tw from "twrnc";





export default function Chart() {
    const customDataPoint = () => {
      return (
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: "white",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#07BAD1",
          }}
        />
      );
    };

    const customLabel = (val) => {
      return (
        <Text style={{ color: "#C3C3C3", textAlign: 'center', fontWeight: "400", fontSize: 16 }}>
          {val}
        </Text>
      );
    };

    const data = [
      {
        value: 636,
        // label: "Jan",
        // labelTextStyle: { color: "white", width: 60 },
        hideDataPoint: true,
        labelComponent: () => customLabel("Jan"),
        // customDataPoint: customDataPoint,
      },
      {
        value: 510,
        // label: "Feb",
        // labelTextStyle: { color: "white", width: 60 },
        hideDataPoint: true,
        labelComponent: () => customLabel("Feb"),
        // customDataPoint: customDataPoint,
      },
      {
        value: 790,
        // label: "Mar",
        // labelTextStyle: { color: "white", width: 60 },
        hideDataPoint: true,
        labelComponent: () => customLabel("Mar"),
        // customDataPoint: customDataPoint,
      },
      {
        value: 618,
        // label: "Apr",
        // labelTextStyle: { color: "white", width: 60 },
        hideDataPoint: true,
        labelComponent: () => customLabel("Apr"),
        // customDataPoint: customDataPoint,
      },
      {
        value: 838,
        // label: "May",
        // labelTextStyle: { color: "white", width: 60 },
        hideDataPoint: true,
        labelComponent: () => customLabel("May"),
        // customDataPoint: customDataPoint,
      },
      {
        value: 738,
        // label: "Jun",
        // labelTextStyle: { color: "white", width: 60 },
        hideDataPoint: true,
        labelComponent: () => customLabel("Jun"),
        // customDataPoint: customDataPoint,
      },
    ];
  return (
    <View style={tw``}>
      <View
        style={[
          {
            //   paddingVertical: 150,
            //   paddingLeft: 20,
            //   paddingTop: 50,
            //   backgroundColor: "#1C1C1C",
          },
          tw`pt-18 pb-5`,
        ]}
      >
        <LineChart
          areaChart
          curved
          initialSpacing={20}
          data={data}
          hideDataPoints
          spacing={68}
          color1="#205bb5"
          startFillColor1="#2774e9"
          startOpacity={1}
          endFillColor1="#232325"
          endOpacity={0.1}
          noOfSections={2}
            yAxisColor="white"
          yAxisThickness={0}
          hideYAxisText
          rulesType="solid"
          rulesColor="#ffffff00"
          yAxisTextStyle={{ color: "gray" }}
          //   yAxisLabelSuffix="%"
          xAxisColor="#232325"
          pointerConfig={{
            pointerStripUptoDataPoint: false,
            pointerStripColor: "lightgray",
            pointerStripWidth: 2,
            strokeDashArray: [2, 5],
            pointerColor: "#ffffff",
            radius: 4,
            borderWidth: 2,
            borderColor: "#2B7FFF",
            // pointerLabelWidth: 100,
            // pointerLabelHeight: 120,
            pointerLabelComponent: (items) => {
              return (
                <View
                  style={{
                    height: 40,
                    width: 80,
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    justifyContent: "center",
                    paddingLeft: 6,
                  }}
                >
                  <Text
                    style={{
                      color: "#grey",
                      fontWeight: "bold",
                      fontSize: 12,
                    }}
                  >
                    ${items[0]?.value}
                  </Text>
                </View>
              );
            },
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({})