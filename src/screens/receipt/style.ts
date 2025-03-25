import { StyleSheet } from "react-native";

const Registration = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        width: '100%',
        zIndex: 3,
        gap: 56,
        paddingBottom: 56,
    },
    containerReceipt: {
        width: 328,
        height: 403,
        backgroundColor: 'white',
        zIndex: 4,
        marginBottom: 70,
        boxShadow: '0px 4px 6px -2px #10182808',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        padding: 44,
    },
    wrapperReceiptContent: {
        height: 315,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperReceiptHeader: {
        display: 'flex',
        gap: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 10,
        textAlign: 'center',
    },
    wrapperQueue: {
        marginTop: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    titleQueue: {
        fontSize: 14,
    },
    numberOfQueue: {
        fontFamily: 'Inter',
        fontSize: 48,
        fontWeight: 800,
    },
    nameOfService: {
        fontSize: 13,
        fontWeight: 800,
    },
    wrapperInformation: {
        marginTop: 36,
    },
    textInformation: { fontSize: 9, textAlign: 'center' },
    title: {
        fontFamily: 'Inter',
        fontSize: 28,
        fontWeight: 700,
        color: '#303435',
    },
    titleDark: {
        fontFamily: 'Inter',
        fontSize: 28,
        fontWeight: 700,
        color: '#FFFFFF',
    },
    desc: {
        fontFamily: 'Inter',
        fontSize: 28,
        fontWeight: 600,
        textAlign: 'center',
        color: '#303435',
    },
    containerMenu: { display: 'flex', gap: 40, flexDirection: 'row' }
});

export const Menu = StyleSheet.create({
    container: {
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex',
        height: 200,
        gap: 25,
        paddingTop: 40,
        width: 200,
    },
    titleOfService: { zIndex: 2, color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 600 },
    boxShadow: {
        position: 'absolute',
        borderRadius: 75,
        width: 190,
        bottom: 3,
        height: 190,
        boxShadow: '0px 24px 16px -4px #10182814',
    }
})

export default Registration