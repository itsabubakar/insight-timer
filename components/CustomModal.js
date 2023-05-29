import GestureRecognizer from 'react-native-swipe-gestures'
import Modal from "react-native-modal";

const CustomModal = (props, { children }) => {
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    return (
        <GestureRecognizer
            config={config}
            onSwipeLeft={() => props.onSwipe(!props.isVisible)}
            onSwipeRight={() => props.onSwipe(!props.isVisible)}

        >
            <Modal
                isVisible={props.isVisible}
                onBackdropPress={() => props.onSwipe(!props.isVisible)}
                useNativeDriverForBackdrop={true}
            >
                {props.children}
            </Modal>
        </GestureRecognizer>
    )
}
export default CustomModal