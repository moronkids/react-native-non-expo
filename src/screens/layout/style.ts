import { StyleSheet } from "react-native";

export const Theme = StyleSheet.create({
    darkBgColor: {
        backgroundColor: '#1B1917'
    },
    darkLogoContainer: {
        backgroundColor: 'linear-gradient(225.95deg, #996404 44.5 %, #B69C6C 78.14 %)'
    },
    darkFooterContainer: {
        backgroundColor: 'linear-gradient(89.93deg, #E0AA3E 7.74 %, #7A5D22 103.9 %)'

    },
    //
    lightBgColor: {
        backgroundColor: '#FDFDFD'
    },
    lightLogoContainer: {
        backgroundColor: '#E72D2A'
    },
    lightFooterContainer: {
        backgroundColor: '#E72D2A'
    }
});

const Layout = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
        width: '100%',
        display: 'flex',
        backgroundColor: '#FDFDFD',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    containerReceipt: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    halfCircleReceiptBg: {
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center'
    },
    bgShadowReceipt: {
        position: 'relative',
        zIndex: 2,
        marginBottom: 134,
    },
    containerLogo: {
        position: 'absolute',
        width: 309,
        height: 187,
        backgroundColor: '#E72D2A',
        borderBottomRightRadius: 50,
        left: -100,
        top: -80,
        transform: 'rotate(24.06 deg)',
    },
    logo: { top: 35, left: 30, position: 'absolute' },
    imgBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    imgBackgroundReceipt: {
        // position: 'absolute',
        width: '100%',
        height: '100%',
        right: 0,
        top: 0,
        zIndex: 2,
    },
    containerFooter: {
        height: 56,
        width: '100%',
        bottom: 0,
        position: 'absolute',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        backgroundColor: '#E72D2A',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 16
    },
    footer: {
        zIndex: 999999,
        color: 'white',
        fontWeight: 800,
        fontFamily: 'Inter',
    }
});
export default Layout