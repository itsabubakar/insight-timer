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
            onSwipe={() => props.onSwipe(!props.isVisible)}

        >
            <Modal
                isVisible={props.isVisible}
                onBackdropPress={() => props.onSwipe(!props.isVisible)}
                onSwipeComplete={() => props.onSwipe(!props.isVisible)}
                swipeDirection={['left', 'right']}
                onSwipeThreshold={200}
                useNativeDriverForBackdrop={true}
            >
                {props.children}
            </Modal>
        </GestureRecognizer>
    )
}
export default CustomModal