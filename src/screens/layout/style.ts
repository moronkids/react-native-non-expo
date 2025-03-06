import { StyleSheet } from "react-native";

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
        zIndex: 999,
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
        color: 'white',
        fontWeight: 800,
        fontFamily: 'Inter',
    }
});
export default Layout