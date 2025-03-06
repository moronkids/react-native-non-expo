import { StyleSheet, useWindowDimensions } from "react-native";

const Registration = StyleSheet.create({
    container: {
        flex: 1, // Use flex: 1 to fill the available space
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        zIndex: 1,
        gap: 56,
        paddingBottom: 56,
    },
    title: {
        fontFamily: "Inter",
        fontSize: 72,
        fontWeight: "700",
        color: "#303435",
    },
    desc: {
        fontFamily: "Inter",
        fontSize: 28,
        fontWeight: "600",
        textAlign: "center",
        color: "#303435",
    },
    containerMenu: {
        display: "flex",
        gap: 40,
        flexDirection: "row",

        // Scale will be handled dynamically below
    },
});

export const Menu = StyleSheet.create({
    container: {
        position: "relative",
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        height: 200,
        gap: 25,
        paddingTop: 40,
        width: 200,
    },
    titleOfService: {
        zIndex: 2,
        color: "white",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "600",
    },
    boxShadow: {
        position: "absolute",
        borderRadius: 75,
        width: 190,
        bottom: 3,
        height: 190,
        // boxShadow is not supported in react native, need to use shadow properties
        shadowColor: "#10182814",
        shadowOffset: { width: 0, height: 24 },
        shadowOpacity: 1,
        shadowRadius: 16,
        elevation: 4, // For Android shadow
    },
});

// Function to dynamically calculate scale
export const useDynamicDimensionScale = (baseWidth = 1280, baseHeight = 768) => {
    const { width, height } = useWindowDimensions();
    const widthScale = width / baseWidth;
    const heightScale = height / baseHeight;
    const scale = Math.min(widthScale, heightScale); // Use the smaller scale to fit content

    return scale;
};

export default Registration;