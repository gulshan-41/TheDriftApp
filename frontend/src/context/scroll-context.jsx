import { createContext, useContext, useRef } from 'react';
import { Animated } from 'react-native';

const ScrollContext = createContext();

const HIDE_DISTANCE = 20;

export function ScrollProvider({ children }) {
    const translateY = useRef(new Animated.Value(0)).current;
    const startOffset = useRef(0);
    const isHidden = useRef(false);

    const animateTo = (hide) => {
        if (isHidden.current === hide) return;
        isHidden.current = hide;
        Animated.timing(translateY, {
            toValue: hide ? 200 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const settle = (endOffset) => {
        const diff = endOffset - startOffset.current;

        if (endOffset <= 10) {
            animateTo(false);
        } else if (diff > HIDE_DISTANCE) {
            animateTo(true);
        } else if (diff < -HIDE_DISTANCE) {
            animateTo(false);
        }
    };

    const onScrollBeginDrag = (e) => {
        startOffset.current = e.nativeEvent.contentOffset.y;
    };

    const onScrollEndDrag = (e) => {
        const { contentOffset, velocity } = e.nativeEvent;
        if (!velocity || Math.abs(velocity.y) < 0.1) {
            settle(contentOffset.y);
        }
    };

    const onMomentumScrollEnd = (e) => {
        settle(e.nativeEvent.contentOffset.y);
    };

    return (
        <ScrollContext.Provider
            value={{ translateY, onScrollBeginDrag, onScrollEndDrag, onMomentumScrollEnd }}
        >
            {children}
        </ScrollContext.Provider>
    );
}

export const useScroll = () => useContext(ScrollContext);